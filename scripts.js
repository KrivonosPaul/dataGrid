(function () {
    let app = angular.module("dataGrid", ['directs', 'filters']);

    app.controller("tableController", function ($scope) {
        let maxCustomerCount = 5000;
        let maxStep = 1000;
        let stepSize = 100;
        $scope.stepVariants =[...Array(maxStep/stepSize).keys()].map(x => ++x*100);
        $scope.started = false;
        $scope.currentFirstOnPage = 0;
        $scope.pageNumber=1;

        $scope.pageStep = $scope.stepVariants[0];
        $scope.Customers = [];

        $scope.show = function () {
            for (let i = 0; i < $scope.pageStep; i++) {
                $scope.Customers.push({id:i,person:new Customer()});
            }
            $scope.started = true;
        };
        $scope.changeStep = function () {
            $scope.pageNumber=Math.floor($scope.currentFirstOnPage/$scope.pageStep)+1;//nambers start from 1 and pages from 0
            $scope.currentFirstOnPage=$scope.pageStep*($scope.pageNumber-1);
            while($scope.Customers.length<$scope.pageNumber*$scope.pageStep&&$scope.Customers.length<maxCustomerCount){
                $scope.Customers.push({id:$scope.Customers.length,person:new Customer()});
            }
        };
        $scope.goToNext=function(){
            while($scope.Customers.length<$scope.currentFirstOnPage+2*$scope.pageStep && $scope.Customers.length<maxCustomerCount){
                $scope.Customers.push({id:$scope.Customers.length,person:new Customer()});
            }
            if($scope.currentFirstOnPage+$scope.pageStep<maxCustomerCount){
                $scope.currentFirstOnPage+=$scope.pageStep;
                $scope.pageNumber++;
            }
        };

        $scope.goToPrev=function(){
            if($scope.currentFirstOnPage>$scope.pageStep){
                $scope.currentFirstOnPage-=$scope.pageStep;
                $scope.pageNumber--;
            }else{
                $scope.currentFirstOnPage=0;
                $scope.pageNumber=1;
            }
        };

        $scope.pageNumbers=function(){
            return [...new Array(Math.ceil(maxCustomerCount/$scope.pageStep)).keys()].map(x => ++x);
        };

        $scope.changePageNumber=function(){
            while($scope.Customers.length<$scope.pageStep*$scope.pageNumber&&$scope.Customers.length<maxCustomerCount){
                $scope.Customers.push({id:$scope.Customers.length,person:new Customer()});
            }
            $scope.currentFirstOnPage=$scope.pageStep*($scope.pageNumber-1);

            // while($scope.Customers.length<$scope.currentFirstOnPage+2*$scope.pageStep && $scope.Customers.length<maxCustomerCount){
            //     $scope.Customers.push({id:$scope.Customers.length,person:new Customer()});
            // }
            // $scope.currentFirstOnPage=$scope.pageStep*($scope.pageNumber-1);
        };
    });
})();