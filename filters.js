(function(){
    let app=angular.module('filters',[]);
    app.filter('slice', function() {//filter for making slices from list of customers
        return function(arr, start, end) {
            return arr.slice(start, end);
        };
    });
})();