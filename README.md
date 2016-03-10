## Meteor TypeScript Compiler for Angular 2.

Based on https://github.com/barbatus/typescript-compiler.

It has predefined compiler options as follows:
```
{
  module: "system",
  moduleResolution: "classic",
  emitDecoratorMetadata: true
}
```

### Typings
Recognizes and installs declaration files comming from Atmosphere packages, where "installs" means copying them into the `typings` folder of the app.

For installing other typings, use `typings` utility.
