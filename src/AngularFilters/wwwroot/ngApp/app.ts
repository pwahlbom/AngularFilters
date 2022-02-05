interface IProduct {
    name: string,
    price: number
};

namespace Filters {
    angular.module("Filters", []);

    class ProductController {
        public productArray: any[];
        constructor() {
            this.productArray = [
                { name: "mac", price: 2000 },
                { name: "smart phone", price: 400 },
                { name: "head phones", price: 100 },
                { name: "video game", price: 60 },
                { name: "vive", price: 800 },
                { name: "smart tv", price: 300 },
                { name: "grapes", price: 3.99, expDate: new Date(2016,8,2) }
            ];
        };
    };

    angular.module("Filters").controller("ProductController", ProductController);

    //ng-repeat = "item in itemsArr"
    function startsWith() { //return array
        return function (input: string[], userValue: string) { //return array 
            return input.filter((value) => { //loop array here, return array of true elements
                //return value.name.indexOf(userValue) == 0; //loop and test string here, return boolean
                return true; //loop and test string here, return boolean
            });
        };
    };

    //???
    angular.module("Filter").filter("startsWith", startsWith);
};