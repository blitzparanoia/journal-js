$(function () {
  console.log('comments.js load')
  commentClick()
})

function commentClick(){
  $('button#comment-data').on('click', function(e) {
    e.preventDefault()
    getComments()
  })
}

function getComments() {
  // console.log('This button works')
}
