const Engineer = require('../lib/Engineer')



test('check for github', () => {
    const engineer = new Engineer('Mike', 1, 'boo@gmail.com', 'boohub')
    expect(engineer.github).toEqual(expect.any(String))
})

test('gets GITHUB account', () => {
    const engineer = new Engineer('Mike', 1, 'boo@gmail.com', 'boohub')
    expect(engineer.getGithub()).toBe('boohub')
})

test('gets role', () => {
    const engineer = new Engineer('Mike', 1, 'boo@gmail.com', 'boohub')
    expect(engineer.getRole()).toBe('Engineer')
})