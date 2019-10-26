$(function () {
  getComments()
})

function getComments () {
  $("button#comment-data").one("click", function(e) {
   e.preventDefault();
      let id = $(this).data("id");
      $.get(`/entries/${id}/comments.json`, function(data){
        let comments = data
        for(i = 0; i< comments.length; i++){
          $('#ajax-comments').append(`

            <li> ${comments[i].content} </li>

            `)
        }
      });
  });
};
