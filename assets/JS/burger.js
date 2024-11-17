// Добавляем события клика на открытия элемента
document.getElementById('burgerOpen').addEventListener('click', function() {  
    // Получаем элементы меню и иконки бургера по их идентификаторам
    const menuItems = document.getElementById('menuItems');  
    const burgerIcon = document.getElementById('burgerIcon');  
  
    // Переключаем класс 'open' у элементов меню и иконки бургера
    // Если класс 'open' есть, он будет удален; если его нет, он будет добавлен
    menuItems.classList.toggle('open');  
    burgerIcon.classList.toggle('open');  
});

// Добавляем события клика на закрытия элемента 
document.getElementById('burgerClose').addEventListener('click', function() {  
    // Получаем элементы меню и иконки бургера по их идентификаторам
    const menuItems = document.getElementById('menuItems');  
    const burgerIcon = document.getElementById('burgerIcon');  
  
    // Удаляем класс 'open' у элементов меню и иконки бургера
    // Это скрывает меню и возвращает иконку бургера в исходное состояние
    menuItems.classList.remove('open');  
    burgerIcon.classList.remove('open');  
});