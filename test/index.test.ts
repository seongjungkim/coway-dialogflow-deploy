import { greet } from './index';

test('greet returns a greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});
