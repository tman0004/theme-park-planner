
window.onload = function() {
    var button = document.getElementById("start_plan_button")
    button.onclick = planClick;
}

function planClick () {
    window.open("http://localhost:8080")
    // $.ajax({
    //     url: "http://localhost:8080/greeting"
    // }).then(function(data, status, jqxhr) {
    //     console.log(data)
    //    $('.greeting-id').append(data.id);
    //    $('.greeting-content').append(data.content);
    //    console.log(jqxhr);
    // });
}

