$(document).ready(function() {
    $('#getBtn').on('click', function() {
        $.fn.myfunction = function () {
            //ajax() GET request
            $.ajax({
                method: 'GET',
                url: 'http://127.0.0.1:3000/api/employees',
                dataType: 'json'
            }).done(function(data) {
                // console.log(data);
                $.map(data, function(employee, index) {
                    // $('#result').append("<h3>"+post.title+"</h3><p>"+post.body+"</p>");
                    $('#table-body').append(`<tr>
                                                <td>${employee.id}</td>
                                                <td>${employee.first_name}</td>
                                                <td>${employee.last_name}</td>
                                                <td>${employee.email}</td>
                                                <td>${employee.gender}</td>
                                                <td>${employee.ip_address}</td>
                                            </tr>`);
                });
            });
        }
        $.fn.myfunction();
    });

    $('#postBtn').on('click', function() {
        //ajax() POST request
        $("#postForm").submit(function(e) {
            e.preventDefault();
    
            let first_name = $('#firstName').val();
            let last_name = $('#lastName').val();
            let email = $('#empEmail').val();
            let gender = $('#empGender').val();
            let ip_address = $('#ipAddress').val();
            let url = $(this).attr('action');
    
            $.post(url,{first_name:first_name, last_name:last_name, email:email, gender: gender,ip_address: ip_address}).done(function(data) {
                // console.log('Post Saved');
                // console.log(data);
                // alert('success');
                $.fn.myfunction();
            });
            // alert('failed');
        });
    });

    $('#putBtn').on('click',function() {
        // alert('Put Request');
        // window.location.href="./updateEmployee.html";
        $.fn.myUpdateFunction = function () {
            //ajax() GET request
            $.ajax({
                method: 'GET',
                url: 'http://127.0.0.1:3000/api/employees',
                dataType: 'json'
            }).done(function(data) {
                // console.log(data);
                $.map(data, function(employee, index) {
                    // $('#result').append("<h3>"+post.title+"</h3><p>"+post.body+"</p>");
                    $('#table-body').append(`<tr>
                                                <form action="http://127.0.0.1:3000/api/employees/" id="">
                                                <td>${employee.id}</td>
                                                <td>${employee.first_name}</td>
                                                <td>${employee.last_name}</td>
                                                <td>${employee.email}</td>
                                                <td>${employee.gender}</td>
                                                <td>${employee.ip_address}</td>
                                                <td><button type="submit">Update</button></td>
                                                </form>
                                            </tr>`);
                });
            });
        }
        $.fn.myUpdateFunction();
    });


    $('#delBtn').on('click',function() {
        alert('Delete Request');
    });
    
});