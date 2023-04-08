const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { generateTeamHTML } = require('./src/BuildHTML.js');
const { userInfo } = require('os');

const addEmployee = [
	{
		type:"list",
		name:"addEmployee",
		message:"Would you like to add an another employee",
		choices:["Engineer", "Intern", "No"]
	}
]

const addManager = [
	{
		type:"input",
		name:"name",
		message:"What is the manager's name?"
	},
	{
		type:"input",
		name:"id",
		message:"What is the manager's id?"
	},
	{
		type:"input",
		name:"email",
		message:"What is the manager's email?"
	},
	{
		type:"input",
		name:"officeNumber",
		message:"What is the manager's office number?"
	},
]

const addEngineer = [
	{
		type:"input",
		name:"name",
		message:"What is their name?"
	},
	{
		type:"input",
		name:"id",
		message:"What is their id?"
	},
	{
		type:"input",
		name:"email",
		message:"What is their email?"
	},
	{
		type:"input",
		name:"GitHub",
		message:"What is their GitHub?"
	},
]

const addIntern = [
	{
		type:"input",
		name:"name",
		message:"What is their name?"
	},
	{
		type:"input",
		name:"id",
		message:"What is their id?"
	},
	{
		type:"input",
		name:"email",
		message:"What is their email?"
	},
	{
		type:"input",
		name:"school",
		message:"What is their school?"
	},
]

function init() {
	inquirer.prompt(addManager).then((managerData) => {
	  const team = [];
  
	  // add manager to team
	  const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
	  team.push(manager);
  
	  function promptEmployee() {
		inquirer.prompt(addEmployee).then((employeeData) => {
		  if (employeeData.addEmployee === 'No') {
			// build team
			generateTeamHTML(team);
		  } else {
			let questions;
			if (employeeData.addEmployee === 'Engineer') {
			  questions = addEngineer;
			} else {
			  questions = addIntern;
			}
  
			inquirer.prompt(questions).then((employeeData) => {
			  let employee;
			  if (questions === addEngineer) {
				employee = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.GitHub);
			  } else {
				employee = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
			  }
  
			  // add employee to team
			  team.push(employee);
			  promptEmployee();
			});
		  }
		});
	  }
  
	  promptEmployee();
	});
  }

init();
