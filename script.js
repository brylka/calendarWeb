$(document).ready(function() {
    // Tablica z nazwami dni tygodnia
    var dayName = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];

    // Wyświetlenie nazw dni tygodnia
    for (let i = 0; i <= 6; i++) {
        $("#calendar").append('<div class="day-name">' + dayName[i] + '</div>');
    }

    // Wyświetlenie dni miesiąca
    for (let i = 1; i <= 31; i++) {
        $("#calendar").append('<div class="' + ((i % 7 == 1) ? 'clear' : '') + '">' + i + '</div>');
    }
});