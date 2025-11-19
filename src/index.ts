import RateLimiter from './RateLimiter';

const limiter = new RateLimiter(3, 5000);

// const user = 'user1';

console.log(limiter.allowRequest('user1'));
console.log(limiter.allowRequest('user1'));
console.log(limiter.allowRequest('user1'));
console.log(limiter.allowRequest('user1'));
console.log(limiter.allowRequest('user1'));

setTimeout(() => {
  console.log('after 8 seconds');
  console.log(limiter.allowRequest('user1'));
}, 6000);
