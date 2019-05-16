# Vuejs-experiments

Learning... with Brad Traversy

After having coded my recursive toDO List

I need to do some help/readings

Here my (quick) notes from Brad Traversy's Free course : (it does not replace the cours, i'ts just for me to better remember what Brad said)

https://www.eduonix.com/dashboard/learn-web-development-using-vuejs

Also follow Traversy Media on YouTube : 

https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA

## Interpolation

<pre>
let app = new Vue({
	el:'#app',
	data:{
		message:'Hello world",
		url : 'https://www.eduonix.com',
		result : 12
	}
});
</pre>

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

## Conditionals and loops

### Loops :

in app.data we got an array of users

&lt;ul&gt;
	&lt;li v-for="user in users"&gt;{{user.name}}&lt;/li&gt;
&lt;/ul&gt;

with an index 

&lt;ul&gt;
	&lt;li v-for="(user,index) in users"&gt;{{index}} {{user.name}}&lt;/li&gt;
&lt;/ul&gt;

the index can be useful to provide DOM ids

v-for works with objects as well

&lt;div v-for="(value,key,index) in user"&gt;
	...
&lt;/div&gt;

Integers :

&lt;div v-for="n in 10"&gt;{{n}}&lt;/div&gt;

1

2

3

...

### Conditionals :

in app.data we got a status set to true :

let app = new Vue({
	el:'#app',
	data:{
		status : true
	}
});

&lt;h1 v-if="status"&gt;
	Status is True
&lt;/h1&gt;

&lt;h1 v-else&gt;
	Status is False
&lt;/h1&gt;

if you got multiple conditions then use v-else-if="condition"

## Class & Style Binding

### Class binding

&lt;div v-bind:class="{active:isActive}"&gt;Hello World!&lt;/div&gt;

You can use the shortcut for v-bind =&gt; :

&lt;div :class="{active: isActive,inactive: !isActive}"&gt;Hello World!&lt;/div&gt;

and put several conditions 

you can set multiple classes for 1 condition : 

&lt;div v-bind:class="{[active,selected]:isActive}"&gt;Hello World!&lt;/div&gt;

you can bind style and any other element like data-, id, type etc..

## Input Binding & forms

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

&lt;div id="app"&gt;
	&lt;div&gt;
		&lt;input v-model="message" placeholder="Tell me something" type="text"/&gt;&lt;br/&gt;
		{{message}}
	&lt;/div&gt;
	&lt;div&gt;
		&lt;input v-model="checked"  type="checkbox"/&gt;&lt;br/&gt;
		{{checked}}
	&lt;/div&gt;
	
	&lt;div&gt;
		&lt;input v-model="checkedNames" value="Renata" type="checkbox"/&gt;
		&lt;label&gt;Renata&lt;/label&gt;
		&lt;input v-model="checkedNames" value="Anton" type="checkbox"/&gt;
		&lt;label&gt;Anton&lt;/label&gt;
		&lt;input v-model="checkedNames" value="Laurence" type="checkbox"/&gt;
		&lt;label&gt;Laurence&lt;/label&gt;
		&lt;p&gt;{{checkedNames}}&lt;/p&gt;
	&lt;/div&gt;
	&lt;div&gt;
		&lt;input v-model="selectedName" value="Renata" type="radio"/&gt;
		&lt;label&gt;Renata&lt;/label&gt;
		&lt;input v-model="selectedName" value="Anton" type="radio"/&gt;
		&lt;label&gt;Anton&lt;/label&gt;
		&lt;input v-model="selectedName" value="Laurence" type="radio"/&gt;
		&lt;label&gt;Laurence&lt;/label&gt;
		&lt;input v-model="selectedName" value="" type="radio"/&gt;
		&lt;label&gt;None&lt;/label&gt;
		&lt;p&gt;{{selectedName}}&lt;/p&gt;
	&lt;/div&gt;
	&lt;div&gt;
		&lt;select v-model="selectedItem"  &gt;
			&lt;option v-for="item in items" v-bind:value="item.key"&gt;{{item.localized}}&lt;/option&gt;
		&lt;/select&gt;
		&lt;p&gt;{{selectedItem}}&lt;/p&gt;
	&lt;/div&gt;
	&lt;div&gt;
		&lt;select v-model="selectedItems" multiple length="3" &gt;
			&lt;option v-for="item in items" v-bind:value="item.key"&gt;{{item.localized}}&lt;/option&gt;
		&lt;/select&gt;
		&lt;br/&gt;
		&lt;p&gt;{{selectedItems}}&lt;/p&gt;
	&lt;/div&gt;
&lt;/div&gt;

## Events

## Filters
