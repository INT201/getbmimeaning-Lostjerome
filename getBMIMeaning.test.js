const testFn = require('./getBMIMeaning')

test('output#1', () => {
  expect(testFn(65, 1.8)).toBe('Normal weight')
})

test('output#2', () => {
  expect(testFn(80, 1.7)).toBe('Overweight')
})

test('output#3', () => {
  expect(testFn(44, 1.6)).toBe('Underweight')
})
