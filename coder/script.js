/*function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
  
    console.log('Оригинальная строка: "' + stringToSplit + '"');
    console.log('Разделитель: "' + separator + '"');
    console.log('Массив содержит ' + arrayOfStrings.length + ' элементов: ' + arrayOfStrings.join(' / '));
  }
  
  // Строчка из «Бури» Шекспира. Перевод Михаила Донского.
  var tempestString = 'И как хорош тот новый мир, где есть такие люди!';
  var monthString = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек';
  
  var space = ' ';
  var comma = ',';
  
  splitString(tempestString, space);
  splitString(tempestString);
  splitString(monthString, comma);*/
  let encoder = new TextEncoder();

    let uint8Array = encoder.encode("Hello");
  
  var text = 'hello'
  let coded = []
coded = text.split('');
alert(uint8Array)