## Fixtures

Create a fixtures json file and fill it with your data: `cypress/fixtures/users.json`

```json
[
  { "username": "estelle",
    "age": 29,
    "gender": "female",
    "active": true
  },
]
```

Usage: 

```js
beforeEach(() => {
  cy.fixture('users.json').as('usersJSON'); // Declare the fixture
  cy.server();
  cy.route('GET', '/users', '@usersJSON' ).as('users'); // Use the '@usersJSON' fixture
});
```