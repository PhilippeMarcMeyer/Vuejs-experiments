
let app;


function appInit(){
	app = new Vue({
		el:'#app',
		data:{
			message:'Hello world!',
			items:[
				{key:'yellow',localized:'Jaune'},
				{key:'red',localized:'Rouge'},
				{key:'green',localized:'Vert'},
				{key:'blue',localized:'Bleu'},
				{key:'pink',localized:'Rose'}
			],
			checked:true,
			checkedNames:[],
			selectedName:'',
			selectedItem : '',
			selectedItems : []
		}
	});
}
