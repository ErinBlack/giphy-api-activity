console.log('js/jq sourced!');

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
   var singleGif = $('<div class="gifCont"><img src="' + response.data[i].images.downsized.url + '">' + '<button id="deleteGif">remove</button></div>');
   $('#searchResults').append(singleGif);
 }

}
 $('#txtSearch').val('');
}

//remove the gif with deleteGif button
$('#searchResults').on('click', '#deleteGif', function(){
  console.log('delete gif button working');
  $(this).parent().remove();
});
}





}); // end on-click
