# GroundLink React Components - Code of Conduct
## Table of Contents
1.    [Selecting correct commponents for the library](#selecting-correct-commponents-for-the-library)
1.    [Using the library component in projects](#using-the-library-component-in-projects)
1.    [Information forwarding](#information-forwarding)
1.    [Documentation](#documentation)
1.    [Creating library, group of components and individual component](#creating-library-group-of-components-and-individual-component)
1.    [Running and testing](#running-and-testing)
1.    [Quality Assurance](#quality-assurance)

## Selecting correct components for the library

Which component is the right candidate for the library?
* Code which repeats itself on multiple currencies on multiple projects is an obvious candidate. It is possible to extract whole component or helper functions (lodash is a great example) to reduce boilerplate code.
* Bulk code or component which can operate independently from the rest of the app and can or is used in multiple different  projects
* Common elements in multiple projects which should look and act the same and possibly define look and feel of applications such as loaders/spinners, buttons, headers, site navigations, default CSS styling

Which element should NOT be extracted as separated library component?
Although some elements are used multiple times within the same project, those elements would make any sense anywhere else - they should remain there. It is easier to test and maintain component within the project where it belongs than in separate project.

## Using the library component in projects

Component can be imported as any other using the `package.json`
The difference is that instead of using dependency version, we are giving the full path to the repository (including the version or the branch name).
Example:
```json
"component-name": "git+ssh://git@git.mydomain.com/Username/Repository#{branch|tag}"
```

It is possible to define repository path in `package.json`, and use it without the full path to the repo.
Documentation is available on [docs.npmjs.com](https://docs.npmjs.com/files/package.json#repository)

## Information forwarding

There are multiple means of component communication, such as cookies or local/session storage, props and callbacks, redux (see how redux forms works) and global variables.
Cookies and session/local storage are commonly used for user and login info (data which is not actively changed). Props and callbacks are the most common way of communicating.
The biggest concern is that component should be aware of the environment in which it is running (DEV/QA/PROD) if that changes the way component works (example: if a component is communicating with the API for fetching job info).

## Documentation

Proper documentation is a must! Documentation is written in README.MD files in the root of the component. README.MD must have an explanation what component does, it must enlist all params/props/callbacks which can be passed to the component, note what is mandatory and what is optional, and in case of the callback note what parameters will callback receive, and what values to expect in the callback. An example is always welcome.

Parent of components (such as the root of the project) should have a short description and the list of the components which should be linked to the individual components (their README.md files).

## Creating library, group of components and individual component

It is advised to keep all components within the single component library, which would enable simple usage of components within projects. Components of similar functionality should be grouped together (eg. all address components within address group, job components within the job group, etc.).

The root of the project and component group must have `index.js` file which will point to the individual component library:
```javascript
module.exports = require('./lib');
```
In root folder of project/component group/component will be README.md

## Running and testing

Running and testing of each component should be possible individually with real or dummy data.

## Quality Assurance

Code review is a must! For some components, automatic testing is an option. We should try it with the smaller components first and expand it to more complex components if it proves to be useful.
