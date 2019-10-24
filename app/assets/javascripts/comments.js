$(function () {
  commentClick()
})

function commentClick(){
  $('button#comment-data').one('click', function(e) {
    e.preventDefault()
    getComments()
  })
}

//uses AJAX to get the comment information, then attach info to the desired div named
function getComments() {
	$.ajax({
		url: `http://localhost:3000/entries`,
		method: 'get',
		dataType: 'json',
		success: function (data) {
      // alert("hi")
			data.map(comments => {
				const newComment = new Comment(comments)
				const newCommentHtml = newComment.postHTML()
				document.getElementById('ajax-comments').innerHTML += newCommentHtml
      })
      		}
      	})
      }

class Comment {
	constructor(c) {
		this.id = c.id
		this.comments = c.comments
	}
}


// Layout formating for the constructor
  Comment.prototype.postHTML = function () {
  // set a vaiable with the comment param that is captured from the JSON
	let postComments = this.comments.map(comment => {
		return (`
			<li>${comment.content}</li>
		`)
	}).join('')

	return (`
		<div class='commentview'>
    <ol>
			${postComments}
      </ol>
		</div>
	`)
}
