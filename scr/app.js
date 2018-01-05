var app=angular.module('myapp',['ngRoute','firebase']);


app.controller('mycntl', function ($scope,$firebaseAuth,$location) {
  $scope.login=function(){
  	var username=$scope.user.email;
  	var password=$scope.user.password;
  	var auth=$firebaseAuth();
  	auth.$signInWithEmailAndPassword(username,password)
  	.then(function(user){
  		console.log(user.uid);
      $location.path('/main');
  	})
  	.catch(function(error){
  		console.log(error);
  	});
  	};
    $scope.signup=function(){
    var username=$scope.user.email;
    var password=$scope.user.password;
    var auth=$firebaseAuth();
    auth.$createUserWithEmailAndPassword(username,password)
    .then(function(user){
      console.log(user.uid);
      $location.path('/login');
    })
    .catch(function(error){
      console.log(error);
    });
    };
});