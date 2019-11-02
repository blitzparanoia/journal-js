$(function () {
	listenForClick()
	listForSort()
});

function listenForClick() {
	$('button#entries-data').one('click', function (event) {
		event.preventDefault()
		getEntries()
	})
}

function listForSort() {
	$('button#sort-data').on('click', function (e) {
		e.preventDefault()
		// console.log('Heyy')
		getSort()
	})
}

function getSort() {
	$.ajax({
		url: 'http://localhost:3000/entries',
		method: 'get',
		dataType: 'json',
		success: function (data){
			// console.log("data: ", data)
			data.sort(function(a, b) {
			  var nameA = a.title.toUpperCase(); // ignore upper and lowercase
			  var nameB = b.title.toUpperCase(); // ignore upper and lowercase
			  if (nameA < nameB) {
			    return -1;
			  }
			  if (nameA > nameB) {
			    return 1;
			  }

			  // names must be equal
			  return 0;
			});
			console.log(data)
		}

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
  let entryComments = this.comments.map(comment => {
		return (`
			<ul>
			<li> ${comment.content} </li>
			</ul>

		`)
	}).join('')

	let dateFix = this.created_at.slice(0, 10)
	return (`
		<div class='entry'>
			<h3><a href="/entries/${this.id}">${this.title}</a></h3>
      <small>${dateFix}</small>
			<p>${this.content}</p>
			<p>${entryComments}</p>
			<hr>
		</div>
	`)
}
