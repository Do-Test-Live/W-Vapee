//Contact Us
//validation rules
$("#contact_form").validate({
    rules: {
        "email": {
            required: true,
            email: true
        },
        "message": {
            required: true,
            minlength: 5
        },
        "subject": {
            required: true
        },
        "name": {
            required: true
        },
        "state": {
            required: true
        }
    },
    //perform AJAX
    submitHandler: function() {
        $.post(postUrl,
            $('#contact_form').serialize(),
            function(data) {
                $('#contact_form')[0].reset();
		        dataLayer.push({'event': 'contactSuccess'});

                //RESPONSE
                //console.log(data);
                $("#contact_form").fadeOut();
                $(".response").text(data.msg).fadeIn();


            }, "json");
    }
});
