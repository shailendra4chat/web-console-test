$( document ).ready(function() {

    // Get the updated list
    let reports;
    $.get("/files", function( data ) {
        reports = data.reverse();
        update_reports(reports);
    });

    // Update it
    function update_reports(reports) {
        // clear the existing list
        $('#reports .list li').remove();

        $.each(reports, function(index, report) {
            let reportName = report.split('.').slice(0, -1).join('.'); // Removed extension from the filename

            $('#reports .list').append('<li class=list-group-item><a href=' + report + '>'+reportName+'</a></li>');
        });
    }
});