$(document).ready(function() {
    $("#main_button").click(function(){
        $.ajax({
            url: "http://localhost:8080/greeting"
        }).then(function(data, status, jqxhr) {
            console.log(data);
           $('.greeting-id').append(data.id);
           $('.greeting-content').append(data.content);
           console.log(jqxhr);
        });
    });
});


