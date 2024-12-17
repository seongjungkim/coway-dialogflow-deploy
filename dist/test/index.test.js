"use strict";
// ChatGPT
/*
import { greet } from '../src/index';

test('greet function', () => {
  expect(greet('World')).toBe('Hello, World!');
});
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Gemini
var index_1 = require("./index");
test('greet returns a greeting', function () {
    expect((0, index_1.greet)('World')).toBe('Hello, World!');
});
