(function(){
    let app=angular.module('filters',[]);
    app.filter('slice', function() {
        return function(arr, start, end) {
            return arr.slice(start, end);
        };
    });
})();