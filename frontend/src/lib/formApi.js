import { apiUrl } from "./apiBase.js";

const authStorageKey = "shopify_component_library_auth";
const subscriberStorageKey = "shopify_component_library_subscriber";

const getErrorMessage = async (response) => {
  try {
    const data = await response.json();
    return data?.message || data?.error || "Request failed. Please try again.";
  } catch {
    return "Request failed. Please try again.";
  }
};

async function postJson(path, payload) {
  const response = await fetch(apiUrl(path), {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response));
  }

  return response.json();
}

export function saveAuthSession(authData) {
  const token = authData?.token || authData?.accessToken;
  if (!token) return;
  const session = { ...authData, token };
  localStorage.setItem(authStorageKey, JSON.stringify(session));
  window.dispatchEvent(new CustomEvent("clbl:auth-change", { detail: session }));
}

export function getAuthSession() {
  try {
    return JSON.parse(localStorage.getItem(authStorageKey) || "null");
  } catch {
    return null;
  }
}

export function clearAuthSession() {
  localStorage.removeItem(authStorageKey);
  window.dispatchEvent(new CustomEvent("clbl:auth-change", { detail: null }));
}

export function isAuthenticated() {
  return Boolean(getAuthSession()?.token);
}

export function saveSubscriberSession(data) {
  const payload = data?.data || data || {};
  const subscriber = payload.subscriber || {};
  const session = {
    email: subscriber.email || payload.email || "",
    remainingCopies:
      typeof payload.remainingCopies === "number" ? payload.remainingCopies : null,
    copyCodeCount:
      typeof payload.copyCodeCount === "number"
        ? payload.copyCodeCount
        : subscriber.copyCodeCount || 0,
    maxFreeCopies: payload.maxFreeCopies || 3,
    subscribed: true,
  };
  localStorage.setItem(subscriberStorageKey, JSON.stringify(session));
  window.dispatchEvent(
    new CustomEvent("clbl:subscriber-change", { detail: session }),
  );
  return session;
}

export function getSubscriberSession() {
  try {
    return JSON.parse(localStorage.getItem(subscriberStorageKey) || "null");
  } catch {
    return null;
  }
}

export function registerUser(payload) {
  return postJson("/api/auth/register", payload);
}

export function loginUser(payload) {
  return postJson("/api/auth/login", payload);
}

export function logoutUser() {
  return postJson("/api/auth/logout", {});
}

export function subscribeToNewsletter(payload) {
  return postJson("/api/access/newsletter", payload);
}

export function submitContactMessage(payload) {
  return postJson("/api/contact", payload);
}
