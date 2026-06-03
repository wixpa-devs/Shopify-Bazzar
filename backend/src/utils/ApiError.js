export class ApiError extends Error {
  constructor(statusCode = 500, message = "Internal server error", errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;
  }
}
