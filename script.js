$(document).ready(function() {
    // Tablica z nazwami dni tygodnia
    var dayName = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];

    // Wyświetlenie nazw dni tygodnia z odpowiednią klasą dla weekendu
    for (let i = 0; i <= 6; i++) {
        //$("#calendar").append('<div class="day-name' + (i == 5 ? ' saturday' : i == 6 ? ' sunday' : '') + '">' + dayName[i] + '</div>');
        var divDay = $('<div>').text(dayName[i]).addClass('day-name');
        if (i == 5) { divDay.addClass('saturday'); }
        if (i == 6) { divDay.addClass('sunday'); }
        $("#calendar").append(divDay);
    }

    // Wyświetlenie dni miesiąca z odpowiednią klasą dla weekendu
    for (let i = 1; i <= 31; i++) {
        //$("#calendar").append('<div class="' + ((i % 7 == 1) ? 'clear' : (i % 7 == 0) ? 'sunday' : (i % 7 == 6) ? 'saturday' : '') + '">' + i + '</div>');
        var divDay = $('<div>').text(i);
        // Dodanie klasy w zależności od dnia tygodnia
        if (i % 7 == 1) { divDay.addClass('clear'); }
        if (i % 7 == 0) { divDay.addClass('sunday'); }
        if (i % 7 == 6) { divDay.addClass('saturday'); }
        $("#calendar").append(divDay);
    }
});