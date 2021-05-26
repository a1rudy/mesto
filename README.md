# Проект: Место
[Ссылка на проект](https://a1rudy.github.io/mesto/)

------
Проект "Mesto" был реализован автором в рамках 22 потока курса по Веб-разработке от Яндекс.Практикума.  
  На сайте можно делиться фотографиями вдохновляющих вас мест России, в деталях рассмотреть фото панорамы города, удивиться необъятной живописной природой страны и, конечно, обязательно лайкать понравившиеся вам места.  
  P.S. Ну или просто посмеяться мемам или умилиться котикам других студентов сообщества Практикума.

------
### Пользовательский интерфейс:
1. Редактирование профиля пользователя: полей "имя" и "о себе", аватар пользователя.
2. Добавление фотографии-карточки на сайт.
3. Удаление добавленной пользователем карточки с подтверждением действия.
4. Просмотр фотографии карточки в полном размере при клике на нее.
5. Постановка и снятие лайка с карточки.
6. UX функции: 
    * адаптация сайта для мобильных устройств;
    * затемнение и уменьшение прозрачности активных кнопок и элементов;
    * отображение ошибок и деактивация кнопки "сохранить" при неверном заполнении формы попапа;
    * закрытие попапа с сохранение данных формы при нажатии кнопки "Enter";
    * закрытие попапа по кнопке "Esc", а также по клике мыши за его пределами;

------
### Применение инструментов HTML, CSS, JavaScript и др.:
1. Компонетный подход БЭМ, в т.ч. файловая структура по правилам Nested БЭМ.
2. Адаптивная верстка с применением медизапросов.
3. Grid layout вёрстка.
4. Flexbox вёрстка.
5. Псевдоклассы.
6. JavaScript:
    * объектно-ориентированного программирование;
    * управление DOM элементами;
    * обработка событий по клику мыши и клавиатуры;
    * применение валидации форм;
    * управление модулями;
    * применение HTTP API и Promise.
7. Сборщик проектов Webpack.

------
### Инструкция по развертыванию проекта через Git Bash (терминал):
1. Скачайте и установите [Node.js с официального сайта](https://nodejs.org/en/download/) (по необходимости).
2. Клонируйте репозиторий в корневую папку командой: 
    `git clone https://github.com/a1rudy/mesto`
3. Перейдите в установленный репозиторий командой: 
    `cd mesto`
4. Установите node_modules командой: 
    `npm install`
5. Совершите сборку проекта командой: 
    `npm run build`
6. Запустите проект командой: 
    `npm run dev`