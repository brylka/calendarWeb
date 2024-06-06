CREATE DATABASE calendar;

USE calendar;

CREATE TABLE translations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    key_name VARCHAR(50) NOT NULL,
    lang VARCHAR(10) NOT NULL,
    value VARCHAR(255) NOT NULL
);

INSERT INTO translations (key_name, lang, value) VALUES
('month_january', 'pl', 'Styczeń'),
('month_february', 'pl', 'Luty'),
('month_march', 'pl', 'Marzec'),
('month_april', 'pl', 'Kwiecień'),
('month_may', 'pl', 'Maj'),
('month_june', 'pl', 'Czerwiec'),
('month_july', 'pl', 'Lipiec'),
('month_august', 'pl', 'Sierpień'),
('month_september', 'pl', 'Wrzesień'),
('month_october', 'pl', 'Październik'),
('month_november', 'pl', 'Listopad'),
('month_december', 'pl', 'Grudzień'),
('month_january', 'en', 'January'),
('month_february', 'en', 'February'),
('month_march', 'en', 'March'),
('month_april', 'en', 'April'),
('month_may', 'en', 'May'),
('month_june', 'en', 'June'),
('month_july', 'en', 'July'),
('month_august', 'en', 'August'),
('month_september', 'en', 'September'),
('month_october', 'en', 'October'),
('month_november', 'en', 'November'),
('month_december', 'en', 'December'),
('day_monday', 'pl', 'Pon'),
('day_tuesday', 'pl', 'Wto'),
('day_wednesday', 'pl', 'Śro'),
('day_thursday', 'pl', 'Czw'),
('day_friday', 'pl', 'Pią'),
('day_saturday', 'pl', 'Sob'),
('day_sunday', 'pl', 'Nie'),
('day_monday', 'en', 'Mon'),
('day_tuesday', 'en', 'Tue'),
('day_wednesday', 'en', 'Wed'),
('day_thursday', 'en', 'Thu'),
('day_friday', 'en', 'Fri'),
('day_saturday', 'en', 'Sat'),
('day_sunday', 'en', 'Sun');