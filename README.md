Steps to Implement
==================
- craete a directory and cd into it
- npm init will create package.json
- Install react and react-dom
  - npm install react --save
  - npm install react-dom --save
- Install webpack (we are using webpack to generate bundle)
  - npm install webpack --save
  - npm install webpack-dev-server --save
  - npm install webpack-cli --save
- Install babel compiler and its plugins
  - npm install babel-core --save-dev
  - npm install babel-loader:7.1.5 --save-dev
  - npm install babel-preset-env --save-dev
  - npm install babel-preset-react --save-dev
  - npm install html-webpack-plugin --save-dev
  - npm install babel-cli babel-preset-es2015 --save-dev
- create files
  - index.html (type nul > index.html or touch index.html)
  - App.js
  - main.js
  - webpack.config.js
  - .babelrc

Error-#1:
=========
Error: Cannot find module '@babel/core'
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.

Solution:
 npm install babel-loader:7.1.5 --save-dev

Error-#2:
=========
Error: Couldn't find preset "es2015" relative to directory

Solution:
 npm install babel-cli babel-preset-es2015

other way:
==========
npx create-react-app app-name

Reference: https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm