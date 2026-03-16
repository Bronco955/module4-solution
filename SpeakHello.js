(function (window) {
  // 1. Создаем объект helloSpeaker
  var helloSpeaker = {};

  // 2. Внутренняя переменная, не доступная снаружи
  var speakWord = "Hello";

  // 3. Добавляем метод speak к объекту
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // 4. Делаем объект глобальным, прикрепляя его к window
  window.helloSpeaker = helloSpeaker;

})(window);
