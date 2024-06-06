$(document).ready(function() {
    // Dane startowe
    var date = new Date();
    var month = date.getMonth() + 1; // Pobranie aktualnego miesiąca i korekta indeksu (getMonth zwraca miesiące od 0 do 11)
    var year = date.getFullYear(); // Pobranie aktualnego roku w formacie czterocyfrowym
    var lang = 'pl'; // Domyślny język
    var translations = {};

    changeTranslations(lang);

    // Funkcja do zmiany tłumaczeń
    function changeTranslations(lang) {
        if (lang === 'pl') {
            translations = {
                'month_january': 'Styczeń', 'month_february': 'Luty', 'month_march': 'Marzec',
                'month_april': 'Kwiecień', 'month_may': 'Maj', 'month_june': 'Czerwiec',
                'month_july': 'Lipiec', 'month_august': 'Sierpień', 'month_september': 'Wrzesień',
                'month_october': 'Październik', 'month_november': 'Listopad', 'month_december': 'Grudzień',
                'day_monday': 'Pon', 'day_tuesday': 'Wto', 'day_wednesday': 'Śro',
                'day_thursday': 'Czw', 'day_friday': 'Pią', 'day_saturday': 'Sob', 'day_sunday': 'Nie'
            };
        } else if (lang === 'en') {
            translations = {
                'month_january': 'January', 'month_february': 'February', 'month_march': 'March',
                'month_april': 'April', 'month_may': 'May', 'month_june': 'June',
                'month_july': 'July', 'month_august': 'August', 'month_september': 'September',
                'month_october': 'October', 'month_november': 'November', 'month_december': 'December',
                'day_monday': 'Mon', 'day_tuesday': 'Tue', 'day_wednesday': 'Wed',
                'day_thursday': 'Thu', 'day_friday': 'Fri', 'day_saturday': 'Sat', 'day_sunday': 'Sun'
            };
        }
        generateCalendar(month, year);
    }

    function generateCalendar(month, year) {
        var day = date.getDate(); // Pobranie aktualnego dnia miesiąca

        // Obliczenie pierwszego dnia miesiąca
        var startDay = new Date(year, month - 1, 1).getDay(); // .getDay() zwraca indeksy dni tygodnia 0-6, gdzie 0 to niedziela
        if (startDay === 0) { startDay = 7; } // Zamiana numeru dla niedzieli na format 1-7

        // Pobranie maksymalnego dnia w miesiącu
        var maxDay = new Date(year, month, 0).getDate();

        // Tablica z nazwami miesięcy
        var monthName = [
            translations['month_january'], translations['month_february'], translations['month_march'],
            translations['month_april'], translations['month_may'], translations['month_june'],
            translations['month_july'], translations['month_august'], translations['month_september'],
            translations['month_october'], translations['month_november'], translations['month_december']
        ];

        // Tworzenie fragmentu dokumentu
        var fragment = $(document.createDocumentFragment());

        // Wyświetlenie panelu do zmiany języka
        fragment.append($('<div>').attr('id', 'language-panel')
            .append($('<select>').attr('id', 'change-lang')
                .append($('<option>').val('pl').text('Polski'))
                .append($('<option>').val('en').text('English'))
            .val(lang)));

        // Wyświetlanie nazwy miesiąca i roku oraz elementów nawigacyjnych
        fragment.append($('<div>').text("<").addClass('nav prev'));
        fragment.append($('<div>').text(monthName[month - 1] + " " + year).addClass('month-year'));
        fragment.append($('<div>').text(">").addClass('nav next'));

        // Tablica z nazwami dni tygodnia
        var dayName = [
            translations['day_monday'], translations['day_tuesday'], translations['day_wednesday'],
            translations['day_thursday'], translations['day_friday'], translations['day_saturday'],
            translations['day_sunday']
        ];

        // Wyświetlenie nazw dni tygodnia z odpowiednią klasą dla weekendu
        for (let i = 0; i <= 6; i++) {
            divDay = $('<div>').text(dayName[i]).addClass('day-name');
            if (i === 5) { divDay.addClass('saturday'); }
            if (i === 6) { divDay.addClass('sunday'); }
            fragment.append(divDay);
        }

        // Wyświetlenie pustych dni na początku miesiąca
        for (let i = 1; i < startDay; i++) {
            divDay = $('<div>').addClass('none');
            fragment.append(divDay);
        }

        // Wyświetlenie dni miesiąca
        for (let i = 1; i <= maxDay; i++) {
            var ii = i + startDay - 1;
            divDay = $('<div>').text(i);
            if (i === day && month === (new Date()).getMonth() + 1 && year === (new Date()).getFullYear()) {
                divDay.addClass('today');
            } else {
                if (ii % 7 === 0) { divDay.addClass('sunday'); }
                if (ii % 7 === 6) { divDay.addClass('saturday'); }
            }
            fragment.append(divDay);
        }

        // Dodanie całego fragmentu do elementu #calendar
        $("#calendar").empty().append(fragment);
    }

    // Onclick dla przycisków nawigujących kalendarzem
    $(document).on('click', '.nav', function() {
        if ($(this).hasClass('prev')) {
            month--;
            if (month < 1) {
                month = 12;
                year--;
            }
        } else if ($(this).hasClass('next')) {
            month++;
            if (month > 12) {
                month = 1;
                year++;
            }
        }
        generateCalendar(month, year);
    });

    // Onchange do zmiany tłumaczenia
    $(document).on('change', '#change-lang', function() {
        lang = $(this).val();
        changeTranslations(lang);
    });
});
