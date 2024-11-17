// Находим кнопку с идентификатором 'open-modal-btn' и добавляем к ней обработчик события клика
document.getElementById("open-modal-btn").addEventListener("click", function() {
  // Находим модальное окно с идентификатором 'my-modal' и переключаем класс 'open'
  // Если класс 'open' уже есть, он будет удален; если его нет, он будет добавлен
  document.getElementById("my-modal").classList.toggle("open");
});

// Находим кнопку с идентификатором 'close-my-modal-btn' и добавляем к ней обработчик события клика
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  // Находим модальное окно с идентификатором 'my-modal' и удаляем класс 'open'
  // Это скрывает модальное окно, так как класс 'open' отвечает за его видимость
  document.getElementById("my-modal").classList.remove("open");
});
