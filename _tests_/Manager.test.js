const Manager = require('../lib/Manager')



test('check for office number', () => {
    const manager = new Manager('Mike', 1, 'boo@gmail.com', 555)
    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test('gets role', () => {
    const manager = new Manager('Mike', 1, 'boo@gmail.com', 555)
    expect(manager.getRole()).toBe('Manager')
})