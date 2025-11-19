import RateLimiter from "../src/RateLimiter";

describe("RateLimiter", () => {
  test("allows first few requests within limit", () => {
    const limit = 3;
    const windowSize = 5000; // ms
    const rl = new RateLimiter(limit, windowSize);
    const user = "u1";

    expect(rl.allowRequest(user)).toBe(true);
    expect(rl.allowRequest(user)).toBe(true);
    expect(rl.allowRequest(user)).toBe(true);
    expect(rl.allowRequest(user)).toBe(false); // 4th request denied
  });

  test("allows 4th request after sometime", () => {

    jest.useFakeTimers();

    const limit = 3;
    const windowSize = 5000; // ms
    const rl = new RateLimiter(limit, windowSize);
    const user = "u1";

    expect(rl.allowRequest(user)).toBe(true);
    expect(rl.allowRequest(user)).toBe(true);
    expect(rl.allowRequest(user)).toBe(true);

    // fast-forward 7 seconds
    jest.advanceTimersByTime(6000);
    expect(rl.allowRequest(user)).toBe(true); // 4th request allowed  
  });

});
