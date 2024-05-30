document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Ваше сообщение успешно отправлено!');
        this.reset();
    });

    // Включение прокручиваемого списка при наведении на изображение продукта
    document.querySelectorAll('.product-content').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('active');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
        });
    });

    // Обработчик для вкладок FAQ
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        const question = tab.querySelector('.question');
        const answer = tab.querySelector('.answer');

        question.addEventListener('click', function () {
            // Переключаем класс active у текущей вкладки
            tab.classList.toggle('active');
            // Показываем/скрываем ответ
            answer.classList.toggle('active');
        });
    });

    function parallaxIt() {
        // create variables
        var $fwindow = $(window);
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        var $contents = [];
        var $backgrounds = [];

        // for each of content parallax element
        $('[data-type="content"]').each(function (index, e) {
            var $contentObj = $(this);
            // Измените значение data-speed в HTML для каждого элемента по вашему усмотрению
            $contentObj.__speed = ($contentObj.data('speed') || 0.1); // Уменьшите значение для замедления
            $contentObj.__fgOffset = $contentObj.offset().top;
            $contents.push($contentObj);
        });
        
        $('[data-type="background"]').each(function () {
            var $backgroundObj = $(this);
            // Измените значение data-speed в HTML для каждого элемента по вашему усмотрению
            $backgroundObj.__speed = ($backgroundObj.data('speed') || 0.1); // Уменьшите значение для замедления
            $backgroundObj.__fgOffset = $backgroundObj.offset().top;
            $backgrounds.push($backgroundObj);
        });
        

        // update positions
        $fwindow.on('scroll resize', function () {
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            $contents.forEach(function ($contentObj) {
                var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

                $contentObj.css('top', yPos);
            })

            $backgrounds.forEach(function ($backgroundObj) {
                var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

                $backgroundObj.css({
                    backgroundPosition: '50% ' + yPos + 'px'
                    backgroundSize: 'cover'
                });
            });
        });

        // triggers winodw scroll for refresh
        $fwindow.trigger('scroll');
    };

    parallaxIt();
});
