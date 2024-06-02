$(document).ready(function() {
    // Tablica z nazwami dni tygodnia
    var dayName = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];

    // Wyświetlenie nazw dni tygodnia z odpowiednią klasą dla weekendu
    for (let i = 0; i <= 6; i++) {
        $("#calendar").append('<div class="day-name' + (i == 5 ? ' saturday' : i == 6 ? ' sunday' : '') + '">' + dayName[i] + '</div>');
    }

    // Wyświetlenie dni miesiąca z odpowiednią klasą dla weekendu
    for (let i = 1; i <= 31; i++) {
        $("#calendar").append('<div class="' + ((i % 7 == 1) ? 'clear' : (i % 7 == 0) ? 'sunday' : (i % 7 == 6) ? 'saturday' : '') + '">' + i + '</div>');
    }
});