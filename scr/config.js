app.config(function ($routeProvider) {
	$routeProvider.when('/home',{
           templateUrl:'partial/login.html',
           controller:'mycntl'
	}).when('/signup',{
           templateUrl:'partial/signup.html',
           controller:'mycntl'
	}).when('/login',{
           templateUrl:'partial/login.html',
           controller:'mycntl'
	}).when('/main',{
           templateUrl:'partial/main.html',
           controller:'mycntl'
  });
});