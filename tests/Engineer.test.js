const Engineer = require("../lib/engineer")

describe("Engineer", () => {
	it('should create an object with a name, id, email, and GitHub', () => {
		const engineer = new Engineer('Gary', '313', 'gary@gmail.com', 'Gary585' );
		expect(engineer.name).toEqual('Gary');
		expect(engineer.id).toEqual('313');
		expect(engineer.email).toEqual('gary@gmail.com');
		expect(engineer.gitHub).toEqual('Gary585');
	});
	it('should return the name when using the getName() method', () => {
		const engineer = new Engineer('Gary', '313', 'gary@gmail.com', 'Gary585' );
		expect(engineer.getName()).toEqual('Gary')
	})
	it('should return the id when using the getId() method', () => {
		const engineer = new Engineer('Gary', '313', 'gary@gmail.com', 'Gary585' );
		expect(engineer.getId()).toEqual('313')
	})
	it('should return the email when using the getEmail() method', () => {
		const engineer = new Engineer('Gary', '313', 'gary@gmail.com', 'Gary585' );
		expect(engineer.getEmail()).toEqual('gary@gmail.com')
	})
	it('should return the GitHub when using the getGitHub() method', () => {
		const engineer = new Engineer('Gary', '313', 'gary@gmail.com', 'Gary585' );
		expect(engineer.getGitHub()).toEqual('Gary585')
	})
	it('should return the role when using the getRole() method', () => {
		const engineer = new Engineer('Gary', '313', 'gary@gmail.com', 'Gary585' );
		expect(engineer.getRole()).toEqual('Engineer')
	})
})
