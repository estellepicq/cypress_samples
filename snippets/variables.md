## Variables

Put your own variables in a config file `cypress.json`. Custom variables go in "env". 

```json
{
  "baseUrl": "http://localhost:4200",
  "env": {
    "login": "user123",
    "password": "passw0rd",
  }
}
```

Usage: 

```js
cy.get('input[name="username"]').type(Cypress.env('login'));
cy.get('input[name="password"]').type(Cypress.env('password'));
```