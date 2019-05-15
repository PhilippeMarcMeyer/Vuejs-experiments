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

will render inside its root element : &lt;div id="app"&gt;&lt;/div&gt;

You can use mustache : {{messsage}} where message = "Hello world"
or directive v-text : &lt;span v-text="message"&gt;&lt;/span&gt; where message = "Hello world"
or v-html : &lt;span v-html="message"&gt;&lt;/span&gt; where message = "&lt;b&gt;Hello world&lt;/b&gt;"

if you want a not mutable : &lt;span v-once&gt;{{messsage}}&lt;/span&gt;
message will never change.

### render an attribute

&lt;a href="{{url}}"&gt;click&lt;/a&gt; won't work

use

&lt;a v-bind:href="url"&gt;click&lt;/a&gt;

### We can render javascript : &lt;p&gt;Points : {{result - 2}}&lt;p&gt; will render 10

Other examples :

&lt;p&gt;Graduate : {{result &gt;= 10 ? 'YES' : 'NO'}}&lt;p&gt;

## Conditionals 


