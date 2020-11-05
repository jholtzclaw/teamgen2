const Intern = require('../lib/Intern')



test('check for school', () => {
    const intern = new Intern('Mike', 1, 'boo@gmail.com', 'School')
    expect(intern.school).toEqual(expect.any(String))
})

test('gets school', () => {
    const intern = new Intern('Mike', 1, 'boo@gmail.com', 'School')
    expect(intern.getSchool()).toBe('School')
})

test('gets role', () => {
    const intern = new Intern('Mike', 1, 'boo@gmail.com', 'School')
    expect(intern.getRole()).toBe('Intern')
})