$(document).ready(function () {
    console.log("hello");

    //basic test
    $.ajax({
        type: "GET",
        url: "/api",
        dataType: "json",
    }).then((res) => {
        console.log(res);

        $.ajax({
            type: "GET",
            url: "/api/proof",
            dataType: "json",
        }).then((res) => console.log(res));

    })
});

