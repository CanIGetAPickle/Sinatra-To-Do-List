$(document).ready(function() {
  $(".done").click(function(e) {
    var item_id = $(this).parents('li').attr('id');
    $.ajax({
      type: "POST",
      url: "/done",
      data: { id: item_id },
      }).done(function(data) {
        if(data.status == 'done') {
          $("#" + data.id + " a.done").html('<i class="icon-repeat icon-white"></i> Not Done')
          $("#" + data.id + " .item").wrapInner("<del>");
        }
        else {
          $("#" + data.id + " a.done").html('<i class="icon-ok icon-white"></i> Done')
          $("#" + data.id + " .item").html(function(i, h) {
            return h.replace("<del>", "");
          });
        }
    });
    e.preventDefault();
  });
});