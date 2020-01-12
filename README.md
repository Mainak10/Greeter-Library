# Greeter-Library
A Javascript based library for Greeting in English and Spanish, Inspired from jQuery Library. 

# Idea Behind the Framework
This framework I have build for POC purpose to implement pure JS concepts like:

 - First class function or First Citizenship function
 - IIFs (Immediately Invoked functions)
 - Prototypal Inheritance 
 - Function Constructor
 - Method Chaining 
 and many more....
 

# How to use?

 - Download or make a clone from *[Greeter-Library](https://github.com/Mainak10/Greeter-Library)*.
 - Download latest JQuery library and add that in your project folder.
 - Add downloaded script file in your project e.g - `	<script src="greeter.js" type="text/javascript"></script>
`
 - In your script file now make use of the Greeter library:
				 
 - Use Global identifier of the library as **$G** or **Greetr**
 - Start typing using something like : `$G('Mainak','Chakrabortty').greeting()` It will give you output as       `Hello Mainak!`

# What you can do?
There are couple of things which you can make use from this library:

 - `$G()` Need to pass *(firstname: mandatory , lastname :optional ,Language:optional)* as a method argument. Default language is english. Currently accept only English as `'en'` or Spanish as `'es'` .
 
 - `greeting()` Greet user informal way as `Hello firstname!` for english or `Hola firstname!` for Spanish.
 
 - `formalGreeting()` Greet user formal way as `Hello Mainak Chakrabortty`for english or `Saludos,Mainak Chakrabortty` for spanish. 
 
 - `greet()` Support method chaining by returning the greeter object like: `Greeter.init {firstname: "Mainak", lastname: "Chakrabortty", language: "es"}` type of the function constructor is `Geeter.init`.
 
 - `setLang()` Support method chaining . Set language on the fly and return the object. e.g: `$G('Mainak','Chakrabortty','es').greet().setLang('en').greet()` will return `Greeter.init {firstname: "Mainak", lastname: "Chakrabortty", language: "en"}`.



 

 
