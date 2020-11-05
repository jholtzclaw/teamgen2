const inquirer = require('inquirer')
const fs = require ('fs')
const generatePage = require('./src/htmlTemp')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let team = []

const promptUserManager = () => {
    console.log(`Let's build your team!`)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'nameManager',
            message: 'Who is the team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter a name.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'idManager',
            message: 'What is their Id?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter an Id.')
                    return false
                }
            }
        },
        {    
            type: 'input',
            name: 'emailManager',
            message: 'What is their email?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter an email.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'numberManager',
            message: 'What is their office number?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter a number.')
                    return false
                }
            }
        }
    ])
    .then(answers => {
        const manager = new Manager(
            answers.nameManager,
            answers.idManager,
            answers.emailManager,
            answers.numberManager
        )
        team.push(manager)
    })
}

const promptUserMember = () => {
    console.log(`Let's add some members!`)
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What type of team member are we adding?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then(addTeam => {
        if (addTeam.choice === 'Engineer') {
            console.log("Engineer Chosen")
            // Engineer information prompts
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'nameEngineer',
                    message: 'Who is an Engineer?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('Please enter a name.')
                            return false
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'idEngineer',
                    message: 'What is their Id?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('Please enter an Id.')
                            return false
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'emailEngineer',
                    message: 'What is their email?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('Please enter an email.')
                            return false
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'githubEngineer',
                    message: 'What is their GitHub?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('Please enter a GitHub username.')
                            return false
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'newTeamMember',
                    message: 'Add another team member?',
                    default: 'false'
                }
            ])
            .then(answers => {
                const engineer = new Engineer(
                    answers.nameEngineer,
                    answers.idEngineer,
                    answers.emailEngineer,
                    answers.githubEngineer
                )
                team.push(engineer)
                if (answers.newTeamMember) {
                    return promptUserMember()
                } else {
                    return
                }
            })
        }
        if (addTeam.choice === 'Intern') {
            console.log("Intern Chosen")
            // Intern prompts
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'nameIntern',
                    message: 'Who is an Intern?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('Please enter a name.')
                            return false
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'idIntern',
                    message: 'What is their Id?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('Please enter an Id.')
                            return false
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'emailIntern',
                    message: 'What is their email?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('Please enter an email.')
                            return false
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'schoolIntern',
                    message: 'What school do they hail from?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true
                        } else {
                            console.log('Please enter a school name.')
                            return false
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'newTeamMember',
                    message: 'Add another team member?',
                    default: 'false'
                }
            ])
            .then(answers => {
                const intern = new Intern(
                    answers.nameIntern,
                    answers.idIntern,
                    answers.emailIntern,
                    answers.schoolIntern
                )
                team.push(intern)
                if (answers.newTeamMember) {
                    return promptUserMember()
                } else {
                    return
                }
            })
        }
        if (addTeam.choice === 'None') {
            return
        }
    })
}

const writePage = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw (err)
        else{
            console.log('Page created!')
        }
    })
}

promptUserManager()
.then(promptUserMember)
.then(completeTeam => {
    completeTeam = team
    return generatePage(completeTeam)
})
.then(completePage => {
    return writePage(completePage)
})
.catch(err => {
    console.log(err)
})