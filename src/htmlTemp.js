// creates the HTML basic template
module.exports = template => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.css" integrity="sha512-8bKh9RpTTQf+EOCSqu/jiAhcUlb5BpcWy0eXEijSX7yode10sZLU3dLBcmoaj15chLpVb+/TY0Z6SL//d4lVAQ==" crossorigin="anonymous" />
        <link rel='stylesheet' href="./style.css">
        <title>My Team Page</title>
    </head>
    <body>
        <div class="hero">
            <div class="container is-widescreen mx-0 pb-6">
              <h1 class="has-background-link-dark has-text-light has-text-centered is-size-4 py-3">My Team</h1>
            </div>
        </div>
            ${generateCards(template)}
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </body>
    </html>
    `;
};

// this function is called to genereate each individual card for the employees. Uses the getRole() method to help filter the array
const generateCards = teamArr => {
    return `
    <div class="columns is-mobile px-4">
    <div class="column">
            <!-- filters through all the inputs and filters out the manager roles then loops through creating a card for each if applicable -->
            ${teamArr.filter( employee => {return employee.getRole() === "Manager"} ).map(({ name, id, email, officeNumber}) => {
                    return `
                    <div class="card my-4" style="width: 18rem;">
                        <header class="card-header has-text-centered has-background-danger-dark">
                            <h2 class="card-header-title has-text-light">${name}</h2>
                            <h4 class="card-header-title has-text-light"><span class="icon has-text-light"><i class="fas fa-beer"></i></span> Team Manager</h5>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <ul>
                                    <li>ID: ${id} </li>
                                    <li>Email: <a href="mailto:${email}" target="_top">${email}</a></li>
                                    <li>Office Number: ${officeNumber}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `; 
            }).join('')}
    </div>    
    <div class="column">  
            <!-- filters through all the inputs and filters out the engineer roles then loops through creating a card for each if applicable -->
            ${teamArr.filter( employee => {return employee.getRole() === "Engineer"} ).map(({ name, id, email, github }) => {
                return `
                    <div class="card my-4" style="width: 18rem;">
                        <header class="card-header has-text-centered has-background-danger-dark">
                            <h2 class="card-header-title has-text-light">${name}</h3>
                            <h4 class="card-header-title has-text-light"><span class="icon has-text-light"><i class="fas fa-wrench"></i></span> Engineer</h5>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <ul>
                                    <li>ID: ${id} </li>
                                    <li>Email: <a href="mailto:${email}" target="_top">${email}</a></li>
                                    <li>GitHub: <a href="https://github.com/${github}">${github}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                `;
            }).join('')}
    </div>
    <div class="column">
            <!-- filters through all the inputs and filters out the intern roles then loops through creating a card for each if applicable -->
            ${teamArr.filter( employee => {return employee.getRole() === "Intern"} ).map(({ name, id, email, school }) => {
                return `
                    <div class="card my-4" style="width: 18rem;">
                        <header class="card-header has-text-centered has-background-danger-dark">
                            <h2 class="card-header-title has-text-light">${name}</h3>
                            <h4 class="card-header-title has-text-light"><span class="icon has-text-light"><i class="fas fa-bus"></i></span> Intern</h5>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <ul>
                                    <li>ID: ${id} </li>
                                    <li>Email: <a href="mailto:${email}" target="_top">${email}</a></li>
                                    <li>School: ${school}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
    <div>
    `;    
};