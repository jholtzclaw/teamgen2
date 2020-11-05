const Employee = require('../lib/Employee')



test('creates an employee', () => {
    const employee = new Employee('Mike', 1, 'boo@gmail.com')
    expect(employee.name).toBe('Mike')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toBe('boo@gmail.com')
})

test('gets name', () => {
    const employee = new Employee('Mike', 1, 'boo@gmail.com')
    expect(employee.getName()).toEqual(expect.any(String))
})

test('gets id', () => {
    const employee = new Employee('Mike', 1, 'boo@gmail.com')
    expect(employee.getId()).toEqual(expect.any(Number))
})

test('gets email', () => {
    const employee = new Employee('Mike', 1, 'boo@gmail.com')
    expect(employee.getEmail()).toEqual(expect.any(String))
})

test('gets role', () => {
    const employee = new Employee('Mike', 1, 'boo@gmail.com')
    expect(employee.getRole()).toBe('Employee')
})