$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

  var input =  $('#input').val();

    var input1 = input.split(' ');

    var input2 = input1.reverse();

    var input3 = input2.join();

    $('#result').text(input3);
    console.log(input3)
  });

  $('form#inputs').submit(function() {


var texts = [$('#text1').val(), $('#text2').val(), $('#text3').val()];

var textA = texts.sort();

textA.forEach(function(text) {
  $('#list').append('<li>' + text + '</li>');

});

var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
var cards = ['jack', 'ace', 'king', 'queen', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

suits.forEach(function(suit) {
  cards.forEach(function(card) {

    $('ul#decks').append('<li>' + suit + ' of ' + card + '</li>');


  });
});





});





  });
