/*Get your solution of the fourth exercise from the html day
Create and include a scripts.js file just like before
Create an array with random names and yours
Using forEach to add each name to the <ul> list
(Optional) Your name should be bold
*/

let userNames = ['Anakin', 'Tony', 'Stalker', 'David'];


userNames.forEach(element => {
    $('.ul').append('<li>' + element + '</li>');
});


/* Work with the same files as in the previous exercise
Create this object: let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
  Add a new block at the end of the page, the title should be in a heading,
   the text should be in a paragraph block*/

  let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
  $('.ul_2').after('<div class=jsblock></div>');
  $('.jsblock').append('<h1>' + additionalBlock.title + '</h1> <p>' + additionalBlock.text + '</p>')




