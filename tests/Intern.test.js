const Intern = require("../lib/intern")

describe("Intern", () => {
	it('should create an object with a name, id, email, and School', () => {
		const intern = new Intern('Mathew', '76', 'mathew@gmail.com', 'University of Washington' );
		expect(intern.name).toEqual('Mathew');
		expect(intern.id).toEqual('76');
		expect(intern.email).toEqual('mathew@gmail.com');
		expect(intern.school).toEqual('University of Washington');
	});
	it('should return the name when using the getName() method', () => {
		const intern = new Intern('Mathew', '76', 'mathew@gmail.com', 'University of Washington' );
		expect(intern.getName()).toEqual('Mathew')
	})
	it('should return the id when using the getId() method', () => {
		const intern = new Intern('Mathew', '76', 'mathew@gmail.com', 'University of Washington' );
		expect(intern.getId()).toEqual('76')
	})
	it('should return the email when using the getEmail() method', () => {
		const intern = new Intern('Mathew', '76', 'mathew@gmail.com', 'University of Washington' );
		expect(intern.getEmail()).toEqual('mathew@gmail.com')
	})
	it('should return the School when using the getSchool() method', () => {
		const intern = new Intern('Mathew', '76', 'mathew@gmail.com', 'University of Washington' );
		expect(intern.getSchool()).toEqual('University of Washington')
	})
	it('should return the role when using the getRole() method', () => {
		const intern = new Intern('Mathew', '76', 'mathew@gmail.com', 'University of Washington' );
		expect(intern.getRole()).toEqual('Intern')
	})
})
