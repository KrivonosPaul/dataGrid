(function(){
    let app=angular.module('directs',[]);
    app.directive('customerTable', function(){
        return{
            restrict:'E',
            templateUrl:'./templates/customerTable.html'
        }
    });

    app.directive('tableOptions', function(){
        return{
            restrict:'E'
            ,templateUrl:'./templates/tableOptions.html'
            // ,controller:'tableController'
        }
    });

    app.directive('pageNavigator', function(){
        return{
            restrict:'E'
            ,templateUrl:'./templates/pageNavigator.html'
            // ,controller:'tableController'
        }
    });

    app.directive('filterInput', function(){
        return{
            restrict:'E'
            ,templateUrl:'./templates/filterInput.html'
            // ,controller:'tableController'
        }
    });

})();