document.getElementById('burgerOpen').addEventListener('click', function() {  
    const menuItems = document.getElementById('menuItems');  
    const burgerIcon = document.getElementById('burgerIcon');  
  
    menuItems.classList.toggle('open');  
    burgerIcon.classList.toggle('open');  
});
document.getElementById('burgerClose').addEventListener('click', function() {  
    const menuItems = document.getElementById('menuItems');  
    const burgerIcon = document.getElementById('burgerIcon');  
  
    menuItems.classList.remove('open');  
    burgerIcon.classList.remove('open');  
});