$(document).ready(function() {
  $('#filter-button').click(function() {
    var dateFrom = $('#date_from').val();
    var dateTo = $('#date_to').val();

    $.ajax({
      url: '/filter',
      method: 'POST',
      data: {
        date_from: dateFrom,
        date_to: dateTo
      },
      success: function(response) {
        $('#table-container').html(response.html);
      },
      error: function() {
        alert('Errore durante il filtraggio dei dati.');
      }
    });
  });
});
