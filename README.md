# Vuejs-experiments

Learning... with Brad Traversy

After having coded my recursive toDO List

I need to do some help/readings

Here my (quick) notes from Brad Traversy's Free course : (it does not replace the cours, i'ts just for me to better remember what Brad said)

https://www.eduonix.com/dashboard/learn-web-development-using-vuejs

Also follow Traversy Media on YouTube : 

https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA

## Interpolation

```javascript
let app = new Vue({
	el:'#app',
	data:{
		message:'Hello world",
		url : 'https://www.eduonix.com',
		result : 12
	}
});
```

will render inside its root element : <div id="app"></div>

You can use mustache : {{messsage}} where message = "Hello world"

or directive v-text : 
```
<span v-text="message"></span> where message = "Hello world"
```
or v-html : 
```
<span v-html="message"></span> where message = "<b>Hello world</b>"
```
if you want a not mutable : 
```
<span v-once>{{messsage}}</span>
```
message will never change.

### render an attribute
```
<a href="{{url}}">click</a> //won't work
```
use
```
<a v-bind:href="url">click</a>
```
### We can render javascript : 
```
<p>Points : {{result - 2}}<p> // will render 10
```
Other examples :
```
<p>Graduate : {{result >= 10 ? 'YES' : 'NO'}}<p>
```

## Conditionals and loops

### Loops :

in app.data we got an array of users

```
<ul>
	<li v-for="user in users">{{user.name}}</li>
</ul>
```
with an index 
```
<ul>
	<li v-for="(user,index) in users">{{index}} {{user.name}}</li>
</ul>
```
the index can be useful to provide DOM ids

v-for works with objects as well
```
<div v-for="(value,key,index) in user">
	...
</div>
```
Integers :
```
<div v-for="n in 10">{{n}}</div>
```
1

2

3

...

### Conditionals :

in app.data we got a status set to true :

```javascript
let app = new Vue({
	el:'#app',
	data:{
		status : true
	}
});
```
```
<h1 v-if="status">
	Status is True
</h1>
<h1 v-else>
	Status is False
</h1>
```
if you got multiple conditions then use v-else-if="condition"

## Class & Style Binding

### Class binding

```
<div v-bind:class="{active:isActive}">Hello World!</div>
```
You can use the shortcut for v-bind => :
```
<div :class="{active: isActive,inactive: !isActive}">Hello World!</div>
```
and put several conditions 

you can set multiple classes for 1 condition : 
```
<div v-bind:class="{[active,selected]:isActive}">Hello World!</div>
```
you can bind style and any other element like data-, id, type etc..

## Input Binding & forms

```javascript
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
```

```
<div id="app">
	<div>
		<input v-model="message" placeholder="Tell me something" type="text"/><br/>
		{{message}}
	</div>
	<div>
		<input v-model="checked"  type="checkbox"/><br/>
		{{checked}}
	</div>
	<div>
		<input v-model="checkedNames" value="Renata" type="checkbox"/>
		<label>Renata</label>
		<input v-model="checkedNames" value="Anton" type="checkbox"/>
		<label>Anton</label>
		<input v-model="checkedNames" value="Laurence" type="checkbox"/>
		<label>Laurence</label>
		<p>{{checkedNames}}</p>
	</div>
	<div>
		<input v-model="selectedName" value="Renata" type="radio"/>
		<label>Renata</label>
		<input v-model="selectedName" value="Anton" type="radio"/>
		<label>Anton</label>
		<input v-model="selectedName" value="Laurence" type="radio"/>
		<label>Laurence</label>
		<input v-model="selectedName" value="" type="radio"/>
		<label>None</label>
		<p>{{selectedName}}</p>
	</div>
	<div>
		<select v-model="selectedItem"  >
			<option v-for="item in items" v-bind:value="item.key">{{item.localized}}</option>
		</select>
		<p>{{selectedItem}}</p>
	</div>
	<div>
		<select v-model="selectedItems" multiple length="3" >
			<option v-for="item in items" v-bind:value="item.key">{{item.localized}}</option>
		</select>
		<br/>
		<p>{{selectedItems}}</p>
	</div>
</div>
```

## Events

## Filters
