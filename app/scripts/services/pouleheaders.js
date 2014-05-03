'use strict';

angular.module('meanstacktestApp')
  .factory('PouleHeaders', function () {
    // Service logic
    // ...






        return {
            generate: function(competitorsNumber){
                var pouleHeaders = [];
                pouleHeaders.push("Name");
                pouleHeaders.push("");
                for (var i = 0 ; i < competitorsNumber ; i++) {
                    pouleHeaders.push(i + 1);
                };
                pouleHeaders.push("V/M");
                pouleHeaders.push("Hits Scored");
                pouleHeaders.push("Hits Received");
                pouleHeaders.push("HS/HR Total");
                pouleHeaders.push("Position");


                // Public API here
                return pouleHeaders;
            }
        }
    });
