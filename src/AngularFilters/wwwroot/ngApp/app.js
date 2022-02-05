;
var Filters;
(function (Filters) {
    angular.module("Filters", []);
    var ProductController = (function () {
        function ProductController() {
            this.productArray = [
                { name: "mac", price: 2000 },
                { name: "smart phone", price: 400 },
                { name: "head phones", price: 100 },
                { name: "video game", price: 60 },
                { name: "vive", price: 800 },
                { name: "smart tv", price: 300 },
                { name: "grapes", price: 3.99, expDate: new Date(2016, 8, 2) }
            ];
        }
        ;
        return ProductController;
    }());
    ;
    angular.module("Filters").controller("ProductController", ProductController);
    //ng-repeat = "item in itemsArr"
    function startsWith() {
        return function (input, userValue) {
            return input.filter(function (value) {
                //return value.name.indexOf(userValue) == 0; //loop and test string here, return boolean
                return true; //loop and test string here, return boolean
            });
        };
    }
    ;
    //???
    angular.module("Filter").filter("startsWith", startsWith);
})(Filters || (Filters = {}));
;
//# sourceMappingURL=app.js.map