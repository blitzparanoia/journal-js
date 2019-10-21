//file load test
$(function(){
  // console.log('entries.js loaded')
  listenForClick()
});

//button event listener on page

function listenForClick() {
    $('#new-entry').click(function (event) {
      // alert('Yay');
      event.preventDefault()
      getEntries()
    })
}



//get req for data


// class constructor for form and format/rendering
