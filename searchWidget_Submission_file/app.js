var myApp = angular.module('searchWidgetApp', ['ui.bootstrap','ui.router','ngAnimate']);

(function(app){

app.config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

app.run(function($rootScope) {
    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
});

app.service('searchWidgetService',['$http','$timeout','$q', function($http,$timeout,$q) {
   return {
        getSearchData: function() {
            return $http.get('./data/data.json');
        }
   }
}]);

app.controller('searchWidgetViewController',['searchWidgetService',function(searchWidgetService) {
    var vm = this;
    vm.service = searchWidgetService;
    //vm.searchData = [{name:"ABC",phone_num:8978137763,email:"abc@xyz.com",policy_num:12345678},{name:"PQR",phone_num:8978137763,email:"pqr@xyz.com",policy_num:12345678},{name:"MNO",phone_num:8978137763,email:"MNO@xyz.com",policy_num:12345678},{name:"yello",phone_num:8978137763,email:"Yellow@xyz.com",policy_num:12345678}]
    vm.searchData = vm.service.getSearchData();
    vm.searchSuccessCallBack = function(selected){
        debugger
        alert(selected);
    };

}]);

app.component("searchWidgetComponent",{
      templateUrl: './src/searchWidgetComponent/searchWidget.template.html',
      bindings: { dataset: '=', success:'&' },
      controller: function () {
       // use this.parent to access required Objects
       var vm = this;      
       if (vm.dataset && typeof vm.dataset.then === 'function') {
            vm.dataset.then(function(data){vm.dataset = data.data});
       }  
       vm.alertmessage = function(item){
        alert(item);
       }
      }
  });
})(myApp);
