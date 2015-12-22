
var person = {
	name: '张三'
};
var proxy = new Proxy(person, {
	get: function(target, property){
		if(property in target) {
			return target[property];
		} else {
			throw new ReferenceError(`property: ${property} does not exist.`);
		}
	}
});
console.log(proxy.name);
//console.log(proxy.age);

var proto = new Proxy({xxx: 1}, {
	get (target, property, receiver) {
		console.log('GET ' + property);
		return target[property];
	}
});
var obj = Object.create(proto);
obj.xxx

function createArray(...elements) {
	let handler = {
		get(target, propKey, receiver){
			let index = Number(propKey);
			if(index < 0) propKey = String(target.length + index);
			return Reflect.get(target, propKey, receiver);
		}
	};
	let target = [];
	target.push(...elements);
	return new Proxy(target, handler);
}
let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);

let validator = {
	set(obj, prop, value){
		if(prop === 'age') {
			if(!Number.isInteger(value)){
				throw new Error(`The age is not an integer`);
			}
			if(value > 200){
				throw new Error(`The age must less than 200`);
			}
			obj[prop] = value;
		}
	}
};
var person = new Proxy({}, validator);
person.age = 100;
//person.age = 300; 会抛出一个错误

var handler = {
	get(target, key){
		invariant(key, 'get');
		return target[key];
	},
	set(target, key, value){
		invariant(key, 'set');
		target[key] = value;
	}
};
function invariant (key, action) {
	if(key[0] === '_'){
		throw new Error(`Invalid attemp to ${action} provate "${key}" property`);
	}
}

var target  = {};
var proxy = new Proxy(target, handler);
//proxy._prop = 'c';
proxy.a = 'a';
console.log(proxy.a);







