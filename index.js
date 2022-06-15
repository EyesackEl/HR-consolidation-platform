const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const topBun = 
`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />
</head>
<body>
    <header><h1 class = 'display-2 text-center'>Welcome to the future of HR</h1></header>
    <div class = 'bdr container'>
        <div class = 'bdr row justify-content-center'>`
;
const bottomBun = 
`       </div>
    </div>
</body>
</html>`
;

const makeEmp = async (employee) => {

    if (employee.role === 'N/A') {
        var empCard =
`           <div class = 'bdr col-sm-3 text-center m-2'>
                <h1>${employee.name}</h1>
                <p><strong>${employee.role}</strong></p>
                <ul>
                    <li>Email: ${employee.email}</li>
                    <li>ID: ${employee.id}</li>
                </ul>
            </div>`
        ;
    } else if (employee.role === 'Manager') {
        var empCard =
`            <div class = 'bdr col-sm-3 text-center m-2'>
                <h1>${employee.name}</h1>
                <p><strong>${employee.role}</strong></p>
                <ul>
                    <li>Email: ${employee.email}</li>
                    <li>ID: ${employee.id}</li>
                    <li>Office #: ${employee.office}</li>
                </ul>
            </div>`
        ;
    } else if (employee.role === 'Engineer') {
        var empCard =
`            <div class = 'bdr col-sm-3 text-center m-2'>
                <h1>${employee.name}</h1>
                <p><strong>${employee.role}</strong></p>
                <ul>
                    <li>Email: ${employee.email}</li>
                    <li>ID: ${employee.id}</li>
                    <li>Github: ${employee.github}</li>
                </ul>
            </div>`
        ;
    } else if (employee.role === 'Intern') {
        var empCard =
`            <div class = 'bdr col-sm-3 text-center m-2'>
                <h1>${employee.name}</h1>
                <p><strong>${employee.role}</strong></p>
                <ul>
                    <li>Email: ${employee.email}</li>
                    <li>ID: ${employee.id}</li>
                    <li>School: ${employee.school}</li>
                </ul>
            </div>`
        ;
    }

    let topOfFile = fs.readFileSync('./dist/index.html', 'utf8');

    console.log(topOfFile)

    await fs.writeFile('./dist/index.html', topOfFile + `\n` + empCard, err =>{
        err ? console.error(err) : console.log(`\n\tEmployee Card Added\n`)
    });
}

const getSpecs = async (employee) => {
    let id = employee.id
    console.log(employee.role);
    if (employee.role === 'N/A') {
        await makeEmp(employee);
    } else if (employee.role === 'Manager') {
        await inquirer
        .prompt([
          {
          type: 'input',
          message: `Please enter employee ${id}'s office Number`,
          name: 'office'
          }
          ])
        .then(async (response) => {
          let specEmp = new Manager (employee.name, employee.id, employee.email, employee.role, response.office)
          await makeEmp(specEmp);
          });
    } else if (employee.role === 'Engineer') {
        await inquirer
        .prompt([
          {
          type: 'input',
          message: `Please enter employee ${id}'s github username`,
          name: 'github'
          }
          ])
        .then(async (response) => {
            let specEmp = new Engineer (employee.name, employee.id, employee.email, employee.role, response.github)
            await makeEmp(specEmp);
          });
    } else if (employee.role === 'Intern') {
       await inquirer
          .prompt([
            {
            type: 'input',
            message: `Please enter employee ${id}'s school`,
            name: 'school'
            }
            ])
          .then(async (response) => {
            let specEmp = new Intern (employee.name, employee.id, employee.email, employee.role, response.school)
            await makeEmp(specEmp);
            });
    }


};

const init = async () => {

    fs.writeFile('./dist/index.html',topBun, err =>{
        err ? console.error(err) : console.log(`\n\tTop Bun Added\n`)
    });

    await inquirer
      .prompt([
          {
          type: 'list',
          message: 'Please choose how many employees you would like to add',
          name: 'empNum',
          choices:[
              1,
              2,
              3,
              4,
              5
              ]
          }
      ])
      .then(async (response) => {
          let empNum = response.empNum
          for (i = 0; i < empNum; i++) {
            let id = i+1
            await inquirer
                .prompt([
                  {
                      type: 'input',
                      message: `Please enter employee ${id}'s name.`,
                      name: 'name'
                  },
                  {
                      type: 'input',
                      message: `Please enter employee ${id}'s email`,
                      name: 'email'
                  },
                  {
                    type: 'list',
                    message: `Please select the role of employee ${id}.`,
                    name: 'role',
                    choices:[
                    'Manager',
                    'Engineer',
                    'Intern',
                    'N/A'
                    ]
                  },
                ])
                .then(async (response) => {
                    let employee = new Employee (response.name, id, response.email, response.role)
                    await getSpecs(employee);
                })
          }
      });

      fs.readFile('./dist/index.html', 'utf8', function(err, data){
          let wholeFile = `${data}\n${bottomBun}`;
        fs.writeFile('./dist/index.html', wholeFile, err =>{
            err ? console.error(err) : console.log(`\n\tBottom Bun Added\n`)
          });
      });
}

init();

