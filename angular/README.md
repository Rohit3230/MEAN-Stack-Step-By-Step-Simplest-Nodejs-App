## SB Admin v2.0 rewritten in AngularJS

[![Join the chat at https://gitter.im/start-angular/sb-admin-angular](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/start-angular/sb-admin-angular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This project is a port of the famous Free Admin Bootstrap Theme [SB Admin v2.0](http://startbootstrap.com/template-overviews/sb-admin-2/) to Angular Theme.

Find out more [Free Angular Themes at StartAngular.com](http://www.startangular.com/).

### Note: This project is no longer maintained. 

## Installation
####1. Clone this project or Download that ZIP file

```sh
$ git clone https://github.com/start-angular/sb-admin-angular.git
```

####2.  Make sure you have [bower](http://bower.io/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally
 
 
```sh
$ sudo apt-get install npm
$ sudo npm install -g grunt-cli
$ sudo npm install -g bower
```
####3. On the command prompt run the following commands

```sh
$ cd `project-directory`
```
- bower install is ran from the postinstall
```sh
$ npm install 
```
- a shortcut for `grunt serve`
```sh
$ npm start
```
- a shortcut for `grunt serve:dist` to minify the files for deployment
```sh
$ npm run dist 
```


**Note:**
If you get this following error, 
```text
Error: EACCES, permission denied '.config/configstore/insight-bower.yml'
You don't have access to this file.
```
changing ownner .config

```sh
sudo chown -R [user name] ~/.config
```


## Roadmap

- Add sample AJAX calls and make the directives more modular

### Automation tools

- [Grunt](http://gruntjs.com/)




<!--

{
  "name": "sb-admin",
  "version": "0.0.0",
  "dependencies": {
    "angular": "1.6.6",
    "json3": "~3.3.1",
    "es5-shim": "~4.5.9",
    "angular-resource": "1.6.6",
    "angular-cookies": "1.6.6",
    "angular-sanitize": "1.6.6",
    "angular-animate": "1.6.6",
    "angular-touch": "1.6.6",
    "angular-route": "1.6.6",
    "font-awesome": "4.7.0",
    "angular-bootstrap": "0.12.0",
    "oclazyload": "~1.1.0",
    "angular-loading-bar": "~0.9.0",
    "angular-ui-router": "~0.4.2",
    "angular-toggle-switch": "~1.3.0",
    "metisMenu": "~1.1.3",
    "angular-chart.js": "~1.1.1"
  },
  "devDependencies": {
    "angular-mocks": "1.6.6",
    "angular-scenario": "1.6.6"
  },
  "resolutions":{
      "bootstrap": "~3.1.1"
    },
  "appPath": "app"
}-->
