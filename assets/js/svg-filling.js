var style = document.createElement('style'),
    head = document.getElementsByTagName('head')[0];

    style.type = 'text/css';

var elements = document.querySelectorAll('.icon');
var currentBackgroundImage = [],
    newFill = [],
    changeFill = [],
    newStyle = [],
    hover = [],
    reg = /#[a-z0-9]*/g;

for (i=0; i < elements.length; i++) {
    currentBackgroundImage[i] = window.getComputedStyle(elements[i]).backgroundImage; //получаем текущий свг
    newFill[i] = window.getComputedStyle(elements[i]).fill; //получаем филл (.-hover-fill-color) для ховера
    changeFill[i] = currentBackgroundImage[i].replace(reg, newFill[i]); // находим в текущем бэкграунде свг филл и заменяем его
    newStyle[i] = '.' + elements[i].classList[1] + ':hover{background-image:'+ changeFill[i] +'!important}'; //создаем стили ховер для данных иконок
    hover[i] = document.createTextNode(newStyle[i]);
    style.appendChild(hover[i]);
    head.appendChild(style);
    //console.log(changeFill[i]);
}