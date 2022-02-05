namespace modMain {
    angular.module("modMain", []);

    class ctlController {
        public aryItems;

        constructor() {
            this.aryItems = [
                "*pen",
                "*pen",
                "mouse",
                "hammer",
                "car",
                "*hat",
                "*hat",
                "girl",
                "stamp"
            ];
        };
    };

    angular.module("modMain").controller("ctiController", ctlController);

    function fltUnique() {

        return function (input: string[]) {
        
            return input.reduce((memo, value) => {

                if (memo.indexOf(value) < 0) {
                    memo.push(value);
                }

                return memo;
            }, []);
        };
    };

    angular.module('modMain').filter("fltUnique", fltUnique);

};