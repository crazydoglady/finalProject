farmApp.controller('indexCtrl', ['$location', '$scope', '$routeParams', 'Auth',
function($scope, $location, $routeParams, Auth){
  console.log("in controller sasdf");
  $scope.some_text = {name:"Farmer Ted", city: "Charleston"};



  $scope.signUp = function() {
    $location.url('/users/sign_up')
  };

  $scope.registerUser = function() {
    console.log("in register function")
  }

  $scope.submitLoginAct = function(){
    var credentials = {
      email: $scope.loginEmail,
      password: $scope.loginPassword
    };
    Auth.login(credentials).then(function(user){
      // $scope.setUser();
      // $scope.loginEmail = '';
      // $scope.loginPassword = '';
      },function(error) {
        $scope.error_message = error;
    });

  };

  $scope.loggedIn = function(){
    return Auth.isAuthenticated();
  };

  $scope.setUser = function(){
    Auth.currentUser().then(function(user){
      $scope.currentUser = user;
      $scope.error_message = '';
     },function(error){
      $scope.currentUser = '';
      $scope.error_message = error;
    });
  };
  $scope.submitSignUpAct = function(){
    console.log("in submit function");
    var credentials = {
      email: $scope.signUpEmail,
      password: $scope.signUpPassword,
      password_confirmation: $scope.signUpPasswordConfirmation
    };
    Auth.register(credentials).then(function(user){
     $url.location('/createProfile');
      console.log('done did it');
    }, function(error){
      $scope.error_message = error;
      console.log('didnt do it');
    });
    userData.submitLoginAct(addUser);
  };

  $scope.submitLogoutAct = function(){
    console.log("Inside function");
    Auth.logout().then(function(){
      console.log("goodbye world")
      $scope.setUser();
    });
  };

  // $scope.$on('devise:login', function(event, currentUser){

  // });

  // $scope.$on('devise:new-session', function(event, currentUser){

  // });
  // $scope.confirm = function(){
  //   $scope.submit({
  //     method: 'POST',
  //     url: '../users/confirmation.json',
  //     data: {user: {email: $scope.login_user.email}},
  //     success_message: "A new confirmation link has been sent",
  //     error_entity: $scope.login_error
  //   });
  // };

}]);
