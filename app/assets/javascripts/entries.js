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

class Entry {
	constructor(obj) {
		this.id = obj.id
		// this.created_at = obj.created_at
		this.title = obj.title
		this.content = obj.content
		this.comments = obj.comments
	}
}
