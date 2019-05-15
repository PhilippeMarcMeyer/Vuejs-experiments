
let app;

function appInit(){
	app = new Vue({
		el:'#root',
		data:{
			message:'Hello world',
			url : 'https://www.eduonix.com',
			result : 12
		}
	});
}

