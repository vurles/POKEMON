global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');

describe('example', () => {
 it('is a function', () => {
   expect(typeof example).toBe('function');
 });

 it('returns `example`', () => {
   expect(example()).toBe('example');
 });
});