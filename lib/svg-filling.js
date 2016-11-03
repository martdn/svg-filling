function svgFiliing(params) {

    var style = document.createElement('style');
    var head = document.getElementsByTagName('head')[0];
    var elements = document.querySelectorAll('[data-filling-state]');

    elements.forEach(function(element) {

        var fillState = element.dataset.fillingState; //Получаем состояние элемента

        console.log(element);

        if (element.classList.contains(params.svgSelector) !== true ) {
            element = element.querySelector('.' + params.svgSelector);
        }

        var currentBackgroundImage = window.getComputedStyle(element).backgroundImage; //получаем текущий свг
        var newFill                = window.getComputedStyle(element).fill; //получаем филл (.-hover-fill-color) для ховера

        // var fillStates = element.className
        //     .split(' ')
        //     .filter(function(classStr) {
        //         return classStr.search('-fill-state-') !== -1;
        //     })
        //     .map(function(classStr) {
        //         return classStr.replace('-fill-state-', '');
        //     });

        var classElement = element.className
            .split(' ')
            .filter(function(classElem) {
                return classElem.search('icon-arrow-') !== -1;
            });

        var changeFill = currentBackgroundImage.replace(/#[a-z0-9]+/, newFill); // находим в текущем бэкграунде свг филл и заменяем его

        var stateModifier = fillState == 'active' ? '.' : ':';
        var newStyle = '.' + classElement + stateModifier + fillState +'{background-image:' + changeFill + '}'; //создаем стили ховер для данных иконок
        var hover = document.createTextNode(newStyle);
        style.appendChild(hover);
        head.appendChild(style);
    })
}