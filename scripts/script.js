console.log('js/jq sourced!');

// on-click function
$(document).on('click', '#cmdSearch', function(){
  console.log('cmdSearch clicked');
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
 console.log( 'back from search:', response.data[0].images.downsized.url );
 for (var i = 0; i < response.data.length; i++) {
   $('#searchResults').append('<img src="' + response.data[i].images.downsized.url + '">');
 }

}





}); // end on-click
