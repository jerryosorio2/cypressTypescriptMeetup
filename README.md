# Cypress meetup

Cypress meetup examples

## Installation

First clone repository

```bash
git clone https://github.com/jerryosorio2/cypressMeetup.git
```

Install packages

```bash
npm install
```

Execute test in headless mode

```bash
npm run headless

```

Execute console

```bash
npm run console

```

Or to execute specific test group use the following command

```bash
npx cypress run --spec 'pathOfSpecs'
```

Execute in parallel use the following command

```bash
npx cypress run --record --key [ProjectKey] --parallel --ci-build-id [BuildId]
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
