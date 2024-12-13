import { greet } from '../src/index';

test('greet returns a greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});