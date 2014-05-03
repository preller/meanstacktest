'use strict';

angular.module('meanstacktestApp')
    .factory('Competitors', function () {
        // Service logic
        // ...

        var Competitors = [
            "Pato",
            "Diego",
            "Martin",
            "Lucho"
        ];

        // Public API here
        return Competitors;
    });
