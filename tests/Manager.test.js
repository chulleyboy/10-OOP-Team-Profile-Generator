const Manager = require("../lib/manager")

describe("Manager", () => {
	it('should create an object with a name, id, email, and Office Number', () => {
		const manager = new Manager('Gerald', '23', 'gerald@gmail.com', '6647' );
		expect(manager.name).toEqual('Gerald');
		expect(manager.id).toEqual('23');
		expect(manager.email).toEqual('gerald@gmail.com');
		expect(manager.officeNumber).toEqual('6647');
	});
	it('should return the name when using the getName() method', () => {
		const manager = new Manager('Gerald', '23', 'gerald@gmail.com', '6647' );
		expect(manager.getName()).toEqual('Gerald')
	})
	it('should return the id when using the getId() method', () => {
		const manager = new Manager('Gerald', '23', 'gerald@gmail.com', '6647' );
		expect(manager.getId()).toEqual('23')
	})
	it('should return the email when using the getEmail() method', () => {
		const manager = new Manager('Gerald', '23', 'gerald@gmail.com', '6647' );
		expect(manager.getEmail()).toEqual('gerald@gmail.com')
	})
	it('should return the Office Number when using the getOfficeNumber() method', () => {
		const manager = new Manager('Gerald', '23', 'gerald@gmail.com', '6647' );
		expect(manager.getOfficeNumber()).toEqual('6647')
	})
	it('should return the role when using the getRole() method', () => {
		const manager = new Manager('Gerald', '23', 'gerald@gmail.com', '6647' );
		expect(manager.getRole()).toEqual('Manager')
	})
})
