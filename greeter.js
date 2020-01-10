/* Greeting Framework 1.0.0 */
// Inspired by jquery-3.4.1

//creating IIFs by taking Window and jquery as a arguments
// To make safe code!

"use strict";

(function (global, $) {

	//The Greeter object will return a function constructor 
	//so that in child we don't have to use new keyword while creating
	//an Object Greeter varibale

	var Greeter = function (firstname, lastname, language) {
		//init is the property of the Greeter function
		/*Why we need to add init property?*/
		//* In the child file where we want to expose Greetr as a Globally
		//to avoid use of new keyword each time.
		//* Instead of using Greetr.init if we would have used only Greeter like 
		// new Greeter(), then it will give you "Maximum call stack exceeds error"

		return new Greeter.init(firstname, lastname, language);
	}

	//Scope Limited to IIFE and not accesible from outside.
	//Array for supported Language.
	var supportedLang = ['en', 'es'];

	//Informal Gretting
	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	//Formal Greeting
	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	//All the methods goes here

	Greeter.prototype = {

		fullname: function () {
			return this.firstname + ' ' + this.lastname;
		},

		validate: function () {
			if (this.firstname === '') throw 'First Name can not be Empty!';

			if (supportedLang.indexOf(this.language) === -1) throw 'Invalid language';
		},

		greeting() {
			this.validate();
			return greetings[this.language] + ' ' + this.firstname + '!';
		},

		formalGreeting() {
			this.validate();
			return formalGreetings[this.language] + ',' + this.firstname + ' ' + this.lastname;
		},

		//pass true for formal greeting!
		//This method is chainable. So, make use of it
		greet: function (formal) {
			var msg = '';
			this.validate();

			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			console.log('Inside of Library: ' + msg);

			//returning 'this' makes greet chainable
			return this;
		},

		//set the language in which you would to greet!
		setLang: function (lang) {
			this.language = lang;
			this.validate();
			return this;
		}
	};

	Greeter.init = function (firstname, lastname, language) {

		//avoid conflicting of 'this' variable

		let self = this;
		self.firstname = firstname || '';
		self.lastname = lastname || '';
		self.language = language || 'en';
	}

	//Greeter.init and Greeter has separate prototype chain 
	//The object return by the Greeter.init function constructor 
	//should point to the prottype of the Greeter

	Greeter.init.prototype = Greeter.prototype;
	//Global selector for Greeter by 'Greetr' or '$G'
	global.Greetr = global.$G = Greeter;

}(window, jQuery));