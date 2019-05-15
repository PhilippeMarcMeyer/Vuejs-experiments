# Vuejs-experiments
Learning... with Traversy

Here my (quick) notes :

## Interpolation

let app = new Vue({
	el:'#app',
	data:{
		message:'Hello world",
		url : 'https://www.eduonix.com',
		result : 12
	}
});

will render inside its root element : <div id="app"></div>

You can use mustache : {{messsage}} where message = "Hello world"
or directive v-text : <span v-text="message"></span> where message = "Hello world"
or v-html : <span v-html="message"></span> where message = "<b>Hello world</b>"

if you want a not mutable : <span v-once>{{messsage}}</span>
message will never change.

### render an attribute

<a href="{{url}}">click</a> won't work

use

<a v-bind:href="url">click</a>

### We can render javascript : <p>Points : {{result - 2}}<p> will render 10

Other examples :

<p>Graduate : {{result >= 10 ? 'YES' : 'NO'}}<p>

## Conditionals 


