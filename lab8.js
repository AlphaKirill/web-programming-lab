function showDate() {

    let out = document.getElementById("current-date");
    let today = new Date();
    
    let out1 = document.getElementById("current-date1");
    let today1 = new Date();

    let out2 = document.getElementById("current-date2");
    let today2 = new Date();

    let out3 = document.getElementById("current-date3");
    let today3 = new Date();

    let out4 = document.getElementById("current-date4");
    let today4 = new Date();

    let out5 = document.getElementById("current-date5");
    let today5 = new Date();

    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    out1.innerHTML = 'Дата и время для German (Switzerland) локали: ' + today1.toLocaleString('de-CH');
    out2.innerHTML = 'Дата и время для English (United Kingdom) локали: ' + today2.toLocaleString('en-GB');
    out3.innerHTML = 'Дата и время для Spanish (Argentina) локали: ' + today3.toLocaleString('es-AR');
    out4.innerHTML = 'Дата и время для Kazakh (Kazakhstan) локали: ' + today4.toLocaleString('kk-KZ');
    out5.innerHTML = 'Дата и время для Ukrainian (Ukraine) локали: ' + today5.toLocaleString('uk-UA');

}