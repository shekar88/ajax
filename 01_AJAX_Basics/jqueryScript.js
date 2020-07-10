$(document).ready(function() {
    $('#txtBtn').on('click', function() {
        $.get('./data/message.txt',function(data) {
            $('#txt-card').html(data);
        });
    });

    $('#jsonBtn').on('click', function() {
        $.ajax({
            method: "GET",
            url: './data/users.json',
            dataType: 'json'
        }).done(function(data) {
            console.log(data);
            $.map(data, function(mobileData, index) {
                $('#json-card').append(`<h4>${mobileData}</h4>`);
            })
        }); 
    });
});

