// ChatGPT
/*
import { greet } from '../src/index';

test('greet function', () => {
  expect(greet('World')).toBe('Hello, World!');
});
*/

// Gemini

//import { greet } from './index';
import { greet } from '../src/index';

test('greet returns a greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});
