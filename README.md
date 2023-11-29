# Angular Futurama Wiki

This is an Angular conversion of my [React Futurama Fan Wiki](https://github.com/jdegand/futurama-fan-wiki).

## Built With

- [Angular](https://angular.dev)
- [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.
- [Futurama API](https://sampleapis.com/api-list/futurama)

## Thoughts

- I converted this specifically to use Cypress' intercept method.
- If you were to add SSR or SSG, the intercept method won't work without modification.  
- I haven't found a good example of Angular SSR testing yet.
- If you pass an id that doesn't exist on the API, the detail page renders nothing.  I used an @else block but that would flash until the API request completed.
- Could refactor to use httpClient and catchError or improve the fetch implementation with a try / catch ? 
- I limited the amount of character sayings returned in the @for loop by adding slice (`character.sayings.slice(0,5)`).  

## Continued Development

- Fetch error handling 
- You could bind `head-shot` for alt tag.  I think all head-shots are empty strings.

## Useful Resources

- [transform](https://transform.tools/json-to-typescript) - json to typescript
- [CSS Reset](https://andy-bell.co.uk/a-more-modern-css-reset/) - a more modern css reset
- [tektutorialshub](https://www.tektutorialshub.com/angular/angular-folder-structure-best-practices/) - angular folder structure best practices
- [Stack Overflow](https://stackoverflow.com/questions/56092083/async-await-in-angular-ngoninit) - async await in angular ngOnInit
- [Github](https://github.com/cypress-io/cypress/issues/8477) - sourceMap error when you don't add a `tsconfig.json` file inside the cypress folder
- [Cypress Docs](https://docs.cypress.io/guides/tooling/typescript-support#Configure-tsconfig-json) - configure tsconfig.json
- [Web.dev](https://web.dev/articles/fetch-api-error-handling) - fetch api error handling
- [Sentry](https://sentry.io/answers/how-do-i-test-for-an-empty-javascript-object/) - how do I test for an empty js object
- [YouTube](https://www.youtube.com/watch?v=cJQQizjl7eo) - You might be using fetch with async/await wrong...
- [Stack Overflow](https://stackoverflow.com/questions/37818677/how-can-i-limit-ngfor-repeat-to-some-number-of-items-in-angular) - how can i limit ngFor repeat to some number of items in angular