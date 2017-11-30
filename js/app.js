var app = angular.module("HangmanApp",[]);
app.controller("GameController",['$scope',function($scope){

  var words = ["rat","catg", "bat","maty"];
  $scope.inCorrectLettersChosen=[];
  $scope.correctLettersChosen=[];
  var selectedLettersChosen=[];
  $scope.guesses=6;
  $scope.displayWord ='';
  $scope.input = {
    letter : ''
  }


  var selectRandomWord = function(){
    var index = Math.round(Math.random()*words.length);
    return words[index];
  }


  var newGame = function(){
    $scope.inCorrectLettersChosen = [];
    $scope.correctLettersChosen=[];
    $scope.guesses=6;
    $scope.displayWord ='';

    selectedWord = selectRandomWord();

    var tempDisplayWord = '';
    console.log(selectedWord);
    for(var i = 0; i < selectedWord.length; i++){
        tempDisplayWord+='*';
    }
    console.log(tempDisplayWord);
    $scope.displayWord = tempDisplayWord;
  }


  $scope.letterChosen = function(){
    for(var i = 0; i<$scope.correctLettersChosen.length; i++){
      if($scope.correctLettersChosen[i].toUpperCase() === $scope.input.letter.toLowerCase()){
        $scope.input.letter = "";
        return;
      }
    }
    for(var i = 0; i<$scope.inCorrectLettersChosen.length; i++){
      if($scope.inCorrectLettersChosen[i].toUpperCase() === $scope.input.letter.toLowerCase()){
        $scope.input.letter = "";
        return;
      }
    }
    var correct = false;
    console.log(correct);
    for (var i = 0; i < selectedWord.length; i++){
      if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
        $scope.displayWord = $scope.displayWord.slice(0,i) + $scope.input.letter.toLowerCase() + $scope.displayWord.slice(i+1);
        correct = true;
      }
    }
   if (correct){
     $scope.correctLettersChosen.push($scope.input.letter.toLowerCase());
   } else {
      $scope.inCorrectLettersChosen.push($scope.input.letter.toLowerCase());
   }
   $scope.input.letter="";
  }


  newGame();
}]);
