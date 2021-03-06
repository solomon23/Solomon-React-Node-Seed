var React      = require('react');
var Router     = require('react-router');
var App        = require('./components/App.react');
var NotFound   = require('./components/pages/NotFound.react');
var FirstPage  = require('./components/pages/FirstPage.react');
var SecondPage = require('./components/pages/SecondPage.react');
var LoginPage  = require('./components/pages/Login.react');
var AdminPage  = require('./components/pages/Admin.react');

var Route      = Router.Route, DefaultRoute = Router.DefaultRoute, NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={FirstPage} />
    <Route name="Page2" path="/page/2" handler={SecondPage}/>
    <Route name="Login" path="/login"  handler={LoginPage}/>
    <Route name="Admin" path="/admin"  handler={AdminPage}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = {
  init: function() {
    // setup html5 routes
    Router.run(routes, Router.HistoryLocation, function(Handler) {
      React.render(<Handler/>, document.body);
    });
  }
};