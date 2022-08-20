
# Inventory System

## Requirements

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v14.20.0

    $ npm --version
    v6.14.17

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs


## Install

    $ npm install


## Start & watch

    $ npm start


## Languages & tools

### Templating

- [Material UI](https://mui.com/material-ui/getting-started/overview/) for some structuring.

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.
- [axios](https://www.npmjs.com/package/axios) for handling api calls.
- [eslint](https://eslint.org/) for better code quality.
- [formik](https://formik.org/) for form rendering.
- [prettier](https://prettier.io/) for maintaining code quality in project.
- [react-data-table-component](https://www.npmjs.com/package/react-data-table-component) for rendering data in table format.
- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton) for adding loading skeleton for better UX.
- [react-modal](https://www.npmjs.com/package/react-modal) for better user UX.
- [react-select](https://react-select.com/) for dropdown.
- [react-toastify](https://www.npmjs.com/package/react-toastify) for flash notifications.


### CSS
- [SCSS](https://sass-lang.com/) is used to write futureproof CSS in nested form.

## Notes
- Implemented a proper login system where user can login to access the dashboard.
- Properly handle UI with mobile responsiveness.
- Added Data Table with proper pagination.
- Implemented Product CRUD.
- Added validation on Product and Login Form.
- Added ESLint and Stylelint for consistency and better code quality.
- Added Skeletons for better User Experience while waiting for response.
- Added toast for proper notifications.
- Added Basic Test Cases for components.

## Future Work
- We can add proper Authentication Process where user can signup.
- We can add detailed test cases.
- We can add Inventory CRUD.
- We can add Cart page.
- We can add Checkout page.
- We can add Profile page.
- We can add profile CRUD.
