$(document).ready(function() {
    for (let i = 1; i <= 31; i++) {
        //if (i % 7 == 1) { // Każdy pierwszy dzień tygodnia zaczyna nowy rząd
        //    $("#calendar").append('<div class="clear">' + i + '</div>');
        //} else {
        //    $("#calendar").append("<div>" + i + "</div>");
        //}
        $("#calendar").append('<div class="' + ((i % 7 == 1) ? 'clear' : '') + '">' + i + '</div>');
    }
});