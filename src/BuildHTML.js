const fs = require('fs');

exports.generateTeamHTML = function(team) {
	let html = `<!DOCTYPE html>
	<html lang="en">
	  <head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Team Profile Generator</title>
		<link rel="stylesheet" href="../style.css" />
	  </head>
	
	  <body>
		<header>
		  <h1>My Team</h1>
		</header>
		
	  <main class="cards">`;
  
	for (let i = 0; i < team.length; i++) {
	  let employee = team[i];
	  let roleInfo = '';
  
	  if (employee.getRole() === 'Manager') {
		roleInfo = `Office Number: ${employee.getOfficeNumber()}`;
	  } else if (employee.getRole() === 'Engineer') {
		roleInfo = `GitHub: <a href="https://github.com/${employee.getGitHub()}">${employee.getGitHub()}</a>`;
	  } else if (employee.getRole() === 'Intern') {
		roleInfo = `School: ${employee.getSchool()}`;
	  }
  
	  html += `
		<div class="card">
		  <div class="card-header">
			<h2>${employee.getName()}</h2>
			<h3>${employee.getRole()}</h3>
		  </div>
		  <div class="card-body">
			<ul>
			  <li>ID: ${employee.getId()}</li>
			  <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
			  <li>${roleInfo}</li>
			</ul>
		  </div>
		</div>
	  `;
	}

	html += `</main>
	</body>
	</html>`;
  
	fs.writeFile('dist/index.html', html, err => {
		if (err) {
			console.log(err);
		} else {
			console.log('Successfully generated team page!');
		}
	});
  }
