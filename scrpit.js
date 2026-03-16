(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Цикл по массиву имен
  for (var i = 0; i < names.length; i++) {

    // Извлекаем первую букву имени и переводим в нижний регистр
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Сравниваем первую букву с 'j'
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
