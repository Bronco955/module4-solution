(function (window) {
  // 1. Создаем объект byeSpeaker
  var byeSpeaker = {};

  // 2. Внутренняя переменная для этого контекста
  var speakWord = "Good Bye";

  // 3. Добавляем метод speak к объекту
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // 4. Экспортируем объект в глобальную область видимости
  window.byeSpeaker = byeSpeaker;

})(window);
