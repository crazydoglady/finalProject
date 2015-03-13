var myModule = angular.module('myModule', ['ngRoute']['Devise']);
myModule
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CRSF-Token'] = $("meta[name=csrf-token]").attr("content");
    })
  .controller('indexCtrl', function($scope, $http, Auth) {
    $http.get('/home.json').success(function(data)){
      $scope.farmers = data;
    })

    $scope.setUser = function(){
      $scope.currentUser = Auth._currentUser;
    };

    $scope.loggedIn = function(){
      return Auth.isAuthenticated();
    };

    $scope.submitLougoutAct = funtion(){
      $http.delete('/users/sign_out.json').success(funciton(){
        console.log('User Deleted');
      });

      Auth.logout().then(function(){
        $scope.setUser();
      });
    };

    $scope.submitLoginAct = function(){
      var credentials = {
        email: $scope.loginEmail,
        password: $scope.loginPassword
      };
      Auth.login(credentials).then(function(user){
        $scope.setUser();
        $scope.loginEmail = '';
        $scope.loginPassword = '';
        console.log(boop);
      }, function(error) {
        console.log('login failed'); 
      });
    };

    $scope.submitSignUpAct = function(){
      var sign_up_credentials = {
        email: $scope.signUpEmail,
        password: $scope.signUpPassword,
        password_confirmation: $scope.signUpPasswordConfirmation,
      };
      Auth.register(sign_up_credentials).then(function(user){
        $scope.loginEmail = '';
        $scope.loginPassword = '';
        $scope.signUpPasswordConfirmation = '';
        console.log('yes');
      }, function(error) {
        console.log('no');  
      });
    };
  });