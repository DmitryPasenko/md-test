## E-shop Filters (Middle Dev skills test)

The goal of this project was to build a filters functionality for e-shop application.
Filters - is what you using when shopping online to narrow down your search criteria.

### Installation

```bash
git clone https://gitlab.com/dmitry.pasenko/md-test.git
yarn
```

### Get started

```bash
yarn start
```

### Automated tests

```bash
yarn test
```

### Built With

* [CRA](https://github.com/facebook/create-react-app) - creates boilerplate configuration for React apps
* [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - State Management
* [ImmutableJS](http://facebook.github.io/immutable-js/) - Immutable collections for JavaScript
* [Reselect](https://github.com/reduxjs/reselect) - “selector” library for Redux
* [Material-UI](https://material-ui.com/) - React components that implement Google's Material Design
* [Jest](https://jestjs.io/) + [Enzyme](https://airbnb.io/enzyme/)- testing framework and utilities

### Used approach  

In this project I'm using redux to store array of filtering options, arranged by category(size, color, price range etc.).
Every option has 2 properties indicating whether this particular option is **checked** in corresponding menu dialog or **selected** which means applied as search filter.
This approach allows to have one source of truth for entire application: menus, badges, selected filters always renders with valid data, valid state.      
Also it gives an option to save/restore application state to localStorage if needed in later development(not implemented).

### Another possible approaches to consider (depending on real-world application requirements)

* Use global App state and propagate it through props to child components (bad idea, not recommended)    
* Wrap entire App with store component and pass state to child components with help of React Context
* Use the Apollo Client cache as single source of truth (apollo-link-state), use GraphQL queries and mutations to access or update local state. 

### To do
Write complex component tests instead of those silly ones =)