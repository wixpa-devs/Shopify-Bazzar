import express from "express";

const router = express.Router();

/**
 * Fetch products from Shopify collection
 * POST /api/shopify/collection-products
 * Body: { collectionUrl: "https://store.myshopify.com/collections/sale", limit: 8 }
 */
router.post("/collection-products", async (req, res) => {
  try {
    const { collectionUrl, limit = 8 } = req.body;

    if (!collectionUrl) {
      return res.status(400).json({ error: "collectionUrl is required" });
    }

    // Parse Shopify store URL
    const urlObj = new URL(collectionUrl);
    const storeName = urlObj.hostname.split(".")[0];
    const collectionHandle = urlObj.pathname.split("/").pop();

    // Fetch collection data from Shopify
    const graphqlQuery = `
      query GetCollectionProducts {
        collection(handle: "${collectionHandle}") {
          title
          products(first: ${limit}) {
            edges {
              node {
                id
                title
                handle
                description
                vendor
                featuredImage {
                  url
                  altText
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                compareAtPriceRange {
                  minVariantPrice {
                    amount
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      id
                      availableForSale
                    }
                  }
                }
                images(first: 2) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch(
      `https://${storeName}.myshopify.com/api/2024-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN || "",
        },
        body: JSON.stringify({ query: graphqlQuery }),
      }
    );

    const data = await response.json();

    if (data.errors) {
      return res.status(400).json({ error: data.errors[0].message });
    }

    if (!data.data.collection) {
      return res.status(404).json({ error: "Collection not found" });
    }

    // Transform Shopify data to component format
    const products = data.data.collection.products.edges.map((edge, idx) => {
      const node = edge.node;
      const variantId = node.variants.edges[0]?.node?.id || "";
      const primaryImage = node.featuredImage || node.images.edges[0]?.node || {};

      return {
        title: node.title,
        price: node.priceRange.minVariantPrice.amount,
        comparePrice: node.compareAtPriceRange.minVariantPrice?.amount || "",
        imageUrl: primaryImage.url || "",
        imageAlt: primaryImage.altText || node.title,
        productUrl: `https://${storeName}.myshopify.com/products/${node.handle}`,
        variantId: variantId,
        description: node.description ? node.description.substring(0, 100) : "",
        vendor: node.vendor || "Unknown",
        badge: "",
      };
    });

    res.json({
      success: true,
      collection: data.data.collection.title,
      products,
      count: products.length,
    });
  } catch (error) {
    console.error("Shopify API Error:", error);
    res.status(500).json({ error: "Failed to fetch collection products" });
  }
});

export { router as shopifyRouter };
