'use strict';

angular.module('meanstacktestApp')
  .controller('Main2Ctrl', ['$scope', 'Competitors', 'PouleHeaders',
        function ($scope, Competitors, PouleHeaders) {

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



  }]);
