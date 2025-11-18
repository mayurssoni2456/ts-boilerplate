export default class RateLimiter {
  private request: Map<string, number> = new Map();
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequest: number, windowms: number) {
    this.maxRequests = maxRequest;
    this.windowMs = windowms;
  }

  isAllowed(userId: string): boolean {
    console.log(userId);
    return true;
  }
}
