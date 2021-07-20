$(function() {
    $("#myForm").submit(function(event) {
        event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var subject = $("input#subject").val();
        var message = $("textarea#message").val();
        var firstName = name; // For Success/Failure Message
        // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
            firstName = name.split(' ').slice(0, -1).join(' ');
        }

        var to = 'philipgaray2@gmail.com';
        var email_subject = "Website Contact Form: " + name;
        var email_body = "You have received a new message from your website contact form.<br><br>Here are the details:<br><br>Name: " + name + "<br><br>Email: " + email + "<br><br>Subject: " + subject + "<br><br>Message:\n" + message;
        $.ajax({
                url: "https://shoppy-123456789.herokuapp.com/app/1/sendMail",
                type: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data:{
                    from: email,
                    email: to,
                    subject: email_subject,
                    message: email_body
                },
                cache: false
            })
            .done(function(data) {
                console.log('done: ', data);
                // Success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-success')
                    .append("<strong>Your message has been sent. </strong>");
                $('#success > .alert-success')
                    .append('</div>');

                //clear all fields
                $('#myForm').trigger("reset");
            })
            .fail(function(jqXHR) {
                // Fail message
                var err = eval("(" + jqXHR.responseText + ")");
                console.log('error: ', err);

                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                $('#success > .alert-danger').append("<strong>Sorry, it seems that my mail server is not responding. Please try again later!</strong>");

                if (err && !err.success) {
                    if (err && err.result) {
                        let strErr = '<p></p>';
                        for (var i = 0; i < err.result.length; i++) {
                            strErr = strErr + '<p>' + err.result[i].msg + '</p>';
                        }
                        strErr = strErr + '</p>';
                        $('#success > .alert-danger').append("<strong>" + strErr + "</strong>");
                    }
                }
                $('#success > .alert-danger').append('</div>');
                //clear all fields
                $('#myForm').trigger("reset");
            })
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});