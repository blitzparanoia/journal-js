//file load test
$(function(){
  // console.log('entries.js loaded')
  listenForClick()
});

//button event listener on page

function listenForClick() {
    $('#new-entry').on('click', function (event) {
      // alert('Yay');
      event.preventDefault()
      let newEntryForm = Entry.newEntryForm()
      document.querySelector('div#entry-form').innerHTML = newEntryForm
    })
}
//
//get req for data
// function getEntries() {
//     $.ajax({
//       url: 'http://localhost:3000/entries'
//     })
// }





// class constructor for form and format/rendering
class Entry {
  constructor(e) {
    this.id = e.id
    this.title = e.title
    this.content = e.content
    this.comments = e.comments
  }

  static newEntryForm() {
    return(`
      <p>New Entry</p>
      <form>
        Title: <input id='entry-title' type='text' name='title'></input>
        <br> Entry Content: <input name='content' type='text'></input>
        <br> <input type='submit' />
      </form>
      `)
  }
}
