'use strict';

angular.module('meanstacktestApp')
    //from http://jsfiddle.net/Nishchit14/xh5kV/2/ of https://groups.google.com/forum/#!topic/angular/5o6OepuutbQ
   .directive('numbersOnly', function() {
        return function(scope, element, attrs) {

            var keyCode = [8,9,37,39,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105];
            element.bind("keydown", function(event) {
                console.log($.inArray(event.which,keyCode));
                if($.inArray(event.which,keyCode) == -1) {
                    scope.$apply(function(){
                        scope.$eval(attrs.onlyNum);
                        event.preventDefault();
                    });
                    event.preventDefault();
                }

            });
        };
  });
