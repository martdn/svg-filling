function svgFiliing(params) {
    var style = document.createElement('style');
    var head = document.getElementsByTagName('head')[0];
    var elements = document.querySelectorAll('[data-filling-state]');
    //получаем параметры и проверяем их
    var svgSelector = params.svgSelector == true ? 'icon' : params.svgSelector;
    var iconPrefix = params.iconPrefix == true ? 'icon-' : params.iconPrefix;
    //console.log(elements);

    elements.forEach(function(element) {
        var fillStates = element.dataset.fillingState; //Получаем состояние элемента

        if (element.classList.contains(svgSelector) !== true) {
            element = element.querySelector('.' + svgSelector);
        }

        if (element) {
            var currentBackgroundImage = window.getComputedStyle(element).backgroundImage; //получаем текущий свг
            var newFill                = window.getComputedStyle(element).fill; //получаем цвет филла

            fillStates = fillStates.split(' ');

            var classElement = element.className.split(' ').filter(function(classElem) {
                return classElem.search(iconPrefix) !== -1;
            });

            var changeFill = currentBackgroundImage.replace(/#[a-z0-9]+/, newFill); // находим в текущем бэкграунде свг филл и заменяем его

            fillStates.forEach(function(fillState) {
                var stateModifier = fillState == 'active' ? '.' : ':';
                var newStyle = '.' + classElement + stateModifier + fillState +'{background-image:' + changeFill + '}'; //создаем стили ховер для данных иконок
                var hover = document.createTextNode(newStyle);
                style.appendChild(hover);
                head.appendChild(style);
            })
        }
    })
}