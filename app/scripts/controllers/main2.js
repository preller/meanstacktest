'use strict';

angular.module('meanstacktestApp')
  .controller('Main2Ctrl', ['$scope', 'Competitors', 'PouleHeaders','PouleTable',
        function ($scope, Competitors, PouleHeaders, PouleTable) {

            $scope.competitors = Competitors;

            $scope.cell = [];
            for (var row = 0 ; row < Competitors.length ; row++) {
                var tempRow = [];
                for (var col = 0; col < Competitors.length; col++) {
                    tempRow.push(col);
                }
                $scope.cell.push(tempRow);
            }

            $scope.isDiagonal = function(a, b){
                return (a == b);
            }

            $scope.pouleHeaders = PouleHeaders.generate(Competitors.length);

            var a = 1;
            $scope.pouleData = [a];

/*
            for (var i=0 ; i < 3 ; i++){
                $scope.pouleData
            }*/

//            $scope.tablez = PouleTable.createTable();
//            $scope.testm1 = PouleTable.assignHeaders(["Name"], ["V / M", "Hits Scored"]);
//            $scope.test0 = PouleTable.assignInfo(Competitors, 15);
//            $scope.test1 = PouleTable.createHeaders();
//            $scope.test2 = PouleTable.createScoreTable();
//            $scope.test3 = PouleTable.createResultsTable();

//            $scope.pouleTable = PouleTable.createTable();
            PouleTable.assignHeaders(["Name"], ["V / M", "Hits Scored"]);
            PouleTable.assignInfo(Competitors, 15);
//            PouleTable.generate();
            PouleTable.createHeaders();
            PouleTable.createScoreTable();
            PouleTable.createResultsTable();




  }]);
