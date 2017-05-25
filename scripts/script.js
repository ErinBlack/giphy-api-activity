console.log('js/jq sourced!');
var favorites = [];
var favoritesNum = 0;
// on-click function
$(document).on('click', '#cmdSearch', function(){
  console.log('cmdSearch clicked');

if($('#txtSearch').val() === ''){
  alert ('Enter a search key');
}
else {


  // concatenating URL string
  var searchURL = 'http://api.giphy.com/v1/gifs/search?q=';
  var userInput = $('#txtSearch').val();
  searchURL += userInput;
  searchURL += '&api_key=dc6zaTOxFJmzC';
  console.log(searchURL);

  // AJAX GET call
  $.ajax({
     url: searchURL,
     type: 'GET',
     success: searchResponse

   }); // end ajax

function searchResponse(response) {
 // console.log( 'back from search:', response.data[0].images.downsized.url );
 if(response.data.length ===0){
   alert('You suck at searching AND spelling');
 }else{
 console.log('length of data', response.data.length);

 for (var i = 0; i < response.data.length; i++) {
   var singleGif = $('<div class="gifCont"><img class="gifDisplay" src="' +
                     response.data[i].images.downsized.url + '">' +
                     '<div class="buttonDiv"><button class="deleteGif">remove</button>' +
                     '<button class="addFav">Add to Favorites</button></div></div>');
   $('#searchResults').prepend(singleGif);
 }

}
 $('#txtSearch').val('');
}

//remove the gif with deleteGif button
$('#searchResults').on('click', '.deleteGif', function(){
  console.log('delete gif button working');
  $(this).parent().remove();
}); //end remove gif

//Add gif to favorites List
$('#searchResults').on('click', '.addFav', function(){
  console.log('the Add Fav button is working');
  //take image to become favorites and turn it into image tag
  var newFav = $(this).parent().parent().find( 'img' ).attr("src");
  var newFavImg = '<div class"favGif"><img class="gifDisplay" src="'+ newFav +
    '"><div class="buttonDiv"><button class="removeFav ">Remove from Favorites</button></div></div>';
  //push new image to the favorites array
  favorites.push(newFavImg);
  $(this).parent().parent().remove();

  //append the favorite array to the DOM
  $('#favorites').append(favorites[favoritesNum]);
  favoritesNum ++;
  //remove
});// end add gif to favorites

//remove from favorites button
$('.favoritesList').on('click', '.removeFav',  function(){
  $(this).parent().remove();
});

}

$('#showResults').on('click', function(){
  $('#searchResults').toggle();
});

$('#showFavorites').on('click', function(){
  $('#favorites').toggle();
})



}); // end on-click
