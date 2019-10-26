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
		this.created_at = obj.created_at
		this.title = obj.title
		this.content = obj.content
		this.comments = obj.comments
	}
}

Entry.prototype.entryHTML = function () {
  // let entryComments = this.comments.map(comment => {
	// 	return (`
	// 		<ul>
	// 		<li> ${comment.content} </li>
	// 		</ul>
	//
	// 	`)
	// }).join('')

	let dateFix = this.created_at.slice(0, 10)
	return (`
		<div class='entry'>
			<h3><a href="/entries/${this.id}">${this.title}</a></h3>
      <small>${dateFix}</small>
			<p>${this.content}</p>
			<hr>
		</div>
	`)
}
