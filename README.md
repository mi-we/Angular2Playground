# Angular2Playground

This is a repository where i just try out Angular2 a bit for myself. Tag v1.1 contains the result of the ToDo list tutorial from the Angular2 docs.

The project should run successfully with AngularJS 2.0.0-alpha.26.

# Prerequisites

Assuming that npm is already installed on your computer, do the following steps:

Install TypeScript

```
npm install -g typescript
```

Install tsd (Tool to get TypeScript definition files)

```
npm install -g tsd
```

Install bower

```
npm install -g bower
```

# Initialisation

From the project root directory run the following commands:

 `tsd update` to get the Angular2 definitions for TypeScript.
 `bower install` to install the dependencies to traceur.
 `tsc` to compile the TypeScript files.
 
 Use a simple http-server like the one from npm:
 
 ```
 npm install http-server
 ```
 
 Run it from the root directory of the project and open the URL.
 
 # Useful resources
 
 * [Angular2 docs](https://angular.io/docs/js/latest/index.html) Especially the step-by-step guide
 * [TypeScript handbook](http://www.typescriptlang.org/Handbook)
 
 ## Hints and troubleshooting
 
 * (http://stackoverflow.com/questions/30580083/angular2-no-provider-for-nameservice)
 * (http://stackoverflow.com/questions/30311514/injectables-in-angular2)
 