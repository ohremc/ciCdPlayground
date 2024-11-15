import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Christoph Ohrem',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'GitLab'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Don't know yet',
		// What do you want to learn in this workshop? 
		expectations: [
			'Learn some basics'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'read', 
			'gym', 
			'computer games'
		]
	}
});
