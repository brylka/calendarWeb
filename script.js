$(document).ready(function() {
    // Dane startowe
    var startDay = 7; // Numer dnia tygodnia 1-7, gdzie 1 - poniedziałek, 7 - niedziela
    var maxDay = 30; // Ilość dni w miesiącu

    // Tablica z nazwami dni tygodnia
    var dayName = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];

    // Wyświetlenie nazw dni tygodnia z odpowiednią klasą dla weekendu
    for (let i = 0; i <= 6; i++) {
        var divDay = $('<div>').text(dayName[i]).addClass('day-name');
        if (i == 5) { divDay.addClass('saturday'); }
        if (i == 6) { divDay.addClass('sunday'); }
        $("#calendar").append(divDay);
    }

    // Wyświetlenie pustych dni na początku miesiąca
    for (let i = 1; i < startDay; i++) {
        var divDay = $('<div>').addClass('none');
        if (i == 1) { divDay.addClass('clear'); }
        $("#calendar").append(divDay);
    }

    // Wyświetlenie dni miesiąca
    for (let i = 1; i <= maxDay; i++) {
        var ii = i + startDay - 1;
        var divDay = $('<div>').text(i);
        if (ii % 7 == 1) { divDay.addClass('clear'); }
        if (ii % 7 == 0) { divDay.addClass('sunday'); }
        if (ii % 7 == 6) { divDay.addClass('saturday'); }
        $("#calendar").append(divDay);
    }
});