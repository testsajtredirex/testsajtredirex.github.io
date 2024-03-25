$("#country_search").keyup(function () {
  var filter = $(this).val().trim().toLowerCase();
  $('.card').each(function () {
    if ($(this).find(".col-md-4").text().toLowerCase().includes(filter)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});