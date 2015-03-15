(function (){
  "use strict";
  var farmApp = angular.module('farmApp')
  .controller('indexCtrl', function($scope){
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
     })
  })
})