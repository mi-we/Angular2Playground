# Angular2Playground

This is a repository where i just try out Angular2 a bit for myself. Tag v1.1 contains the result of the ToDo list tutorial from the Angular2 docs

# Initialisation

Install TypeScript via NPM

```
npm install -g typescript
```

Install tsd via NPM (Tool to get TypeScript definition files)

```
npm install -g tsd
```

From the project root directory run `tsd update` to get the Angular2 definitions for TypeScript

From the project root directory run `tsc -w`. This will compile the TypeScript files and watch for changes. The compiler settings are defined in the file `tsconfig.json`.