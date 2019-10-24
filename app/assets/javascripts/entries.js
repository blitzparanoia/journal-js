// class Entry {
//   constructor(e){
//   this.id = e.id
//   this.title = e.title
//   this.content = e.content }
// }
//
//   Entry.prototype.postHTML = function(){
//     let htmlBlock = return(`
//       <br><br><br><br>${this.content}
//       `)
//        $(".showMore").append(htmlBlock)
// }


$(function() {
  $(".js-list").on("click", function(event) {
    event.preventDefault()
    let $list = $("#entryShow");
    var entryId = parseInt($(".js-list").attr("data-id"));
    $.get("/entries/" + entryId + ".json",
    function(data) {
      $list.htmlBlock('')
      data.entries(function(entry){
       displayEntry = new Entry(entry)
         displayEntry.htmlBlock()
      })
    });
  });
});




 // $(function () {
 //   $('form').submit(function(event) {
 //     event.preventDefault();
 //     var values = $(this).serialize();
 //     var posting = $.post('/entries', values);
 //     posting.done(function(data) {
 //       var entry = data;
 //     var entryTitle = entry["title"];
 //     var entryContent	= entry["content"];
 //     $("#newEntry").text("The entry " + entryTitle + " was created!" + "You wrote the following...     " + entryContent)
 //     });
 //   });
 // });
