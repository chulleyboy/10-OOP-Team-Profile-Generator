const Employee = require("../lib/employee")

describe("Employee", () => {
	it('should create an object with a name, id, and email', () => {
		const employee = new Employee('Smith', '1132', 'smith@gmail.com');
		expect(employee.name).toEqual('Smith');
		expect(employee.id).toEqual('1132');
		expect(employee.email).toEqual('smith@gmail.com');
	});
	it('should return the name when using the getName() method', () => {
		const employee = new Employee('Smith', '1132', 'smith@gmail.com');
		expect(employee.getName()).toEqual('Smith')
	})
	it('should return the id when using the getId() method', () => {
		const employee = new Employee('Smith', '1132', 'smith@gmail.com');
		expect(employee.getId()).toEqual('1132')
	})
	it('should return the email when using the getEmail() method', () => {
		const employee = new Employee('Smith', '1132', 'smith@gmail.com');
		expect(employee.getEmail()).toEqual('smith@gmail.com')
	})
	it('should return the role when using the getRole() method', () => {
		const employee = new Employee('Smith', '1132', 'smith@gmail.com');
		expect(employee.getRole()).toEqual('Employee')
	})
})
