$(document).ready(function() {
    $('#txtBtn').on('click', function() {
        $.get('message.txt',function(data) {
            $('#txt-card').html(data);
        });
    });
});