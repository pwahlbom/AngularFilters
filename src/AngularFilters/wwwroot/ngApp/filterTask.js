var modMain;
(function (modMain) {
    angular.module("modMain", []);
    var ctlController = (function () {
        function ctlController() {
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
        }
        ;
        return ctlController;
    }());
    ;
    angular.module("modMain").controller("ctiController", ctlController);
    function fltUnique() {
        return function (input) {
            return input.reduce(function (memo, value) {
                if (memo.indexOf(value) < 0) {
                    memo.push(value);
                }
                return memo;
            }, []);
        };
    }
    ;
    angular.module('modMain').filter("fltUnique", fltUnique);
})(modMain || (modMain = {}));
;
//# sourceMappingURL=filterTask.js.map