//
// $(function() {
//   $(".js-list").on("click", function(event) {
//     event.preventDefault()
//     let $list = $("#entryShow");
//     var entryId = parseInt($(".js-list").attr("data-id"));
//     $.get("/entries/" + entryId + ".json",
//     function(data) {
//       $list.htmlBlock('')
//       data.entries(function(entry){
//        displayEntry = new Entry(entry)
//          displayEntry.htmlBlock()
//       })
//     });
//   });
// });

$(function () {
	listenForClick()
});

function listenForClick() {
	$('button#entries-data').one('click', function (event) {
		event.preventDefault()
		getEntries()
	})
}

function getEntries() {
	$.ajax({
		url: 'http://localhost:3000/entries',
		method: 'get',
		dataType: 'json',
		success: function (data) {
			// console.log("date output:  ", data)
      data.map(entry => {
				const newEntry = new Entry(entry)
				const newEntryHtml = newEntry.entryHTML()
				document.getElementById('ajax-entries').innerHTML += newEntryHtml
    })
  }
  })
  		}



class Entry {
	constructor(obj) {
		this.id = obj.id
		// this.created_at = obj.created_at
		this.title = obj.title
		this.content = obj.content
		this.comments = obj.comments
	}
}

Entry.prototype.entryHTML = function () {

	return (`
		<div class='entry'>
			<h3><a href="/entries/${this.id}">${this.title}</a></h3>
			<p>${this.content}</p>
			<hr>
		</div>
	`)
}
