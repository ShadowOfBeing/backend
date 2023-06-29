answersAndQuestions = {
    'work': {
        1: {'question': 'Расскажите о себе', 'answer': 'Кратко описываем свои последние места работы и стек'},
        2: {'question': 'Почему вы уволились с последнего места работы?', 'answer': 'work_place answer 2'},
        3: {'question': 'Расскажите о самом интересном своём проекте', 'answer': 'work_place answer 3'},
        4: {'question': 'Расскажите о самом большом своём факапе', 'answer': 'Рассказать используя концепцию SMART'},
        5: {'question': 'Опишите свой последний рабочий проект', 'answer': 'Рассказать про последний проект'},
        6: {'question': 'Опишите какая была команда и стек на последнем месте', 'answer': 'Рассказать про тимлидов, бэкендеров/фронтов/тестировщиков, описать стек'},
        7: {'question': 'Опишите как был устроен рабочий процесс на последнем месте работы', 'answer': `Описать кто писал ТЗ,
                         кто создавал и назначал задачи, как задачи брали в работу, как сдавали задачи, как контролировали сроки, как проходило code review.`},
        8: {'question': 'Какие ваши ожидания от нового места работы? В какой компании/проекте хотели бы работать?',
            'answer': 'Можно сказать, что ищешь интересный проект с достойной зарплатой и развитием по хардскилам и карьере.'},
        9: {'question': 'По каким критериям будете выбирать из нескольких офферов?',
            'answer': `Можно сказать, что в первую очередь будешь смотреть на то насколько интересный проект и на зарплату,
                       затем какое развитие могут предложить (по хардскилам и по карьере), если всё перечисленное примерно
                       одинаковое, то выберешь более известную компанию.`},
    },
    'python': {
        1: {'question': 'Что такое asyncio?', 'answer': 'python answer 1'},
        2: {'question': 'Как работает в Python многопоточность и асинхронность?', 'answer': 'python answer 2'},
        3: {'question': 'Что такое GIL?', 'answer': 'python answer 3'},
        4: {'question': 'Как работает сборщик мусора в Python?', 'answer': 'python answer 4'},
        5: {'question': 'Как в Python устроены словари?', 'answer': 'python answer 5'},
        6: {'question': 'Как в Python устроены списки?', 'answer': 'python answer 6'},
        7: {'question': 'Какие изменяемые и неизменяемые типы данных есть в Python?', 'answer': 'python answer 7'},
        8: {'question': 'Что такое вещественные и ссылочные типы данных?', 'answer': 'python answer 8'},
        9: {'question': 'Что такое List Comprehensions?', 'answer': 'python answer 9'},
        10: {'question': 'Что такое генератор в Python?', 'answer': 'python answer 10'},
        11: {'question': 'Что такое декораторы в Python? Как написать свой декоратор?', 'answer': 'python answer 11'},
        12: {'question': 'Какие есть изменения в версиях Python 2.x/3.x?',
             'answer':
             `Версия 3.4 (16 мар 2014):<br>
              - добавлена библиотека asyncio (асинхронность)<br>
              Версия 3.5 (13 сен 2015):<br>
              - добавлена библиотека typing (аннотация типов)<br>
              Версия 3.8 (21 окт 2019):<br>
              - добавлен моржовый оператор (:=)<br>`},
    },
    'async': {
        1: {'question': 'Есть ли асинхронность в Django?',
            'answer': `Да, начиная с версии Django 3.1 во фреймворк добавили поддержку асинхронности (асинхронные view
                       и middleware), чтобы объявить функцию асинхронной нужно перед def прописать async. С версии 4.1
                       добавили так же асинхронную поддержку ORM Django. В Django используется библиотека asyncio,
                       благодаря методу asyncio.iscoroutinefunction() middleware может работать как в асинхронном,
                       так и в синхронном режиме (метод принимает наш запрос и через ветвление if/else мы прописываем
                       две реализации кода: для синхронного и асинхронного запросов). Пример:<br>
                       import asyncio<br>
                       from django.utils.decorators import sync_and_async_middleware<br>
                       <br>
                       @sync_and_async_middleware<br>
                       def simple_middleware(get_response):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;if asyncio.iscoroutinefunction(get_response):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;async def middleware(request):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;response = await get_response(request)<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return response<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;else:<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;def middleware(request):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;response = get_response(request)<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return response<br>
                       <br>
                       Модуль django.utils.decorators содержит декораторы sync_only_middleware(), async_only_middleware()
                       и sync_and_async_middleware(), которые позволяют применять эти флаги к нашим функциям и указывать
                       в каком режиме они должны работать.<br><br>
                       Однако асинхронность в Django всё ещё несёт
                       ряд ограничений, из-за которых эта реализация пока что не пользуется большой популярностью:<br>
                       - Django позволяет использовать в одном проекте и синхронный и асинхронный код, но за счёт
                       такого гибридного использования теряется производительность в 1 миллисекунду.<br>
                       - некоторые глобальные вещи в Django синхронные, так как имеют глобальную область видимости и
                       их нельзя сделать асинхронными из соображений безопасности<br><br>
                       Документация:<br>
                       - <a href="https://django.fun/ru/docs/django/3.1/releases/3.1/#asynchronous-views-and-middleware-support" target="_blank">Django 3.1</a><br>
                       - <a href="https://docs.djangoproject.com/en/4.2/releases/4.1/" target="_blank">Django 4.1</a><br>
                       `},
        2: {'question': 'Что такое async и await?',
            'answer':
            `async и await - это ключевые слова, используемые при работе с асинхронными функциями в Python. async
             помечает функцию как асинхронную, а await используется для ожидания результата работы функции. Например:
             `},
        3: {'question': 'Зачем нужно асинхронное выполнение кода?',
            'answer':
            `В контексте backend-разработки асинхронное выполнение кода нужно для того, чтобы запросы к базе данных не
             замедляли выполнение кода и выполнялись параллельно остальному коду`},
    },
    'databases': {
        1: {'question': 'Что такое ACID?', 'answer': 'databases answer 1'},
        2: {'question': 'Какими основными свойствами должна обладать транзакционная база данных?', 'answer': 'ACID'},
        3: {'question': 'Какое из свойств ACID является мнимым?', 'answer': '?'},
        4: {'question': 'Какие отличия есть между SQL и NoSQL базами данных?', 'answer': 'databases answer 3'},
        5: {'question': 'Какие существуют SQL и NoSQL базы данных?', 'answer': 'databases answer 4'},
        6: {'question': 'Что такое транзакция?', 'answer': 'databases answer 6'},
        7: {'question': 'Что такое индексы в базе данных? Зачем они нужны? Назовите плюсы и минусы индексации.',
            'answer': `databases answer 7`},
        8: {'question': `Приходилось ли помимо ORM писать напрямую запросы к базе данных?
                         В каких случаях это требовалось?`,
            'answer': 'databases answer 8'},
        9: {'question': 'Какие типы JOIN есть в SQL?',
            'answer':
            `- INNER JOIN<br>
             - LEFT JOIN<br>
             - RIGHT JOIN<br>
             - FULL OUTER JOIN<br>
             - CROSS JOIN<br>
             - SELF JOIN<br>`},
        10: {'question': '5x10', 'answer': 'databases answer 6'},
    },
    'algorithms': {
        1: {'question': 'Что такое Big O?', 'answer': 'algorithms answer 1'},
        2: {'question': 'Какие алгоритмы сортировки существуют?', 'answer': 'algorithms answer 2'},
        3: {'question': 'Какая сложность у операции вставки в середину списка?', 'answer': 'algorithms answer 3'},
        4: {'question': 'Какая сложность у операции вставки в конец списка?', 'answer': 'algorithms answer 4'},
        5: {'question': 'Какие виды сортировок существуют?', 'answer': 'Пузырьком, слиянием, быстрая сортировка/сортировка Хоара'},
        6: {'question': 'Что такое хэш-таблица?', 'answer': 'algorithms answer 6'},
    },
    'tests': {
        1: {'question': 'Какой процент кода нужно покрывать тестами?', 'answer': 'tests answer 1'},
        2: {'question': 'Какие инструменты для тестирования существуют?',
            'answer':
            `- библиотека pytest<br>
             - Postman для тестирования API<br>
             - Selenium для автоматизации ручного тестирования<br>
             - Linter для проверки Code Style`},
        3: {'question': 'Что такое unit-тесты? Зачем они нужны?',
            'answer': 'unit-тесты проверяют работоспособность отдельных модулей проекта'},
    },
    'oop': {
        1: {'question': 'Что такое SOLID?', 'answer': 'oop answer 1'},
        2: {'question': 'Какие основные концепции ООП? Опишите их.', 'answer': 'oop answer 2'},
        3: {'question': 'Что такое ромбовидное наследование?',
            'answer': `Ромбовидное наследование (diamond inheritance) - это специфика множественного наследования,
                       которая возникает, когда один класс наследуется от двух классов через промежуточный класс,
                       которые оба наследуют от одного и того же базового класса. Это создает структуру наследования в
                       форме ромба, где базовый класс расположен на вершине ромба, а наследующие классы - на боковых
                       сторонах.`},
        4: {'question': 'Что такое абстрактный класс?',
            'answer': `Абстрактный класс похож на интерфейс, но в отличии от интерфейса в абстрактном классе у методов
                       можно прописать реализацию. В Python в ядре языка нет реализации абстрактных классов,
                       однако с версии языка 2.6 в стандартную библиотеку добавлен модуль abc и абстрактный класс
                       можно создать путем наследования от класса abc.ABC из модуля abc и объявления абстрактных
                       методов с помощью декоратора @abstractmethod и абстрактных свойств с помощью декоратора
                       @abstractproperty.`},
        5: {'question': 'Что такое интерфейс?',
            'answer': `Интерфейс хранит описание методов с их параметрами без реализации, т.е. интерфейс не является
                       классом и для него нельзя создать объект. В Python нет интерфейсов, но есть концепция
                       "duck typing", которая позволяет проверять объекты на наличие нужных атрибутов и методов вместо
                       проверки типов данных. Это означает, что классы могут использоваться как интерфейсы, если они
                       предоставляют необходимый функционал.`},
        6: {'question': 'Как в Python указать модификатор private?',
            'answer': `В Python нет такого модификатора доступа, как private, как, например, в Java или C#. Вместо
                       этого в Python используется соглашение об именовании, которое гласит о том, что имя атрибута или
                       метода, начинающееся с символа подчеркивания, считается "внутренним" и не рекомендуется
                       использовать за пределами класса. Однако, это не является строгим правилом и не является
                       ограничением доступа к атрибутам и методам в классе и за его пределами.
                       <br><br>
                       Если же все же требуется получить схожий функционал, можно использовать свойства (property) и их
                       декораторы:<br>
                       @property - в качестве getter<br>
                       @<атрибут>.setter - в качестве setter<br>
                       @<атрибут>.deleter - в качестве deleter<br>
                       С помощью этого механизма можно реализовать логику "private" доступа к атрибутам. Это позволит
                       скрыть от пользователя некоторые свойства и методы. Однако, такой функционал не будет полностью
                       защищен от доступа за пределами класса, это скорее инструмент для упрощения использования класса,
                       но без строгого контроля доступа.
                       <br><br>
                       Пример реализации:<br>
                       class MyClass:<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, val):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._val = val<br>
                       <br><br>
                       &nbsp;&nbsp;&nbsp;&nbsp;@property<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;def val(self):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Getting val")<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self._val<br>
                       <br><br>
                       &nbsp;&nbsp;&nbsp;&nbsp;@val.setter<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;def val(self, value):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Setting val")<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._val = value<br>
                       <br><br>
                       &nbsp;&nbsp;&nbsp;&nbsp;@val.deleter<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;def val(self):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Deleting val")<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;del self._val<br>
                       `},
            7: {'question': 'Как проверить, что элемент является экземпляром класса?',
                'answer': 'isinstance(my_element, TargetClass)'},
    },
    'django': {
        1: {'question': 'Что нового в версиях Django 2.x/3.x/4.x?',
            'answer':
            `Версия 3.0 (2 дек 2019):<br>
             - добавлена поддержка MariaDB, ASGI<br>
             Версия 3.1 (4 авг 2020):<br>
             - добавлена поддержка асинхронных view и middleware<br>
             Версия 4.1 (3 авг 2022):<br>
             - добавлен асинхронный интерфейс к ORM`},
        2: {'question': 'Что такое миграции в Django?', 'answer': 'django answer 2'},
        3: {'question': 'Что такое модели в Django?', 'answer': 'django answer 3'},
    },
    'git': {
        1: {'question': 'В чём отличие merge от rebase?', 'answer': 'git answer 1'},
        2: {'question': 'git question 2', 'answer': 'git answer 2'},
        3: {'question': 'git question 3', 'answer': 'git answer 3'},
    },
    'docker': {
        1: {'question': 'docker question 1', 'answer': 'docker answer 1'},
        2: {'question': 'docker question 2', 'answer': 'docker answer 2'},
        3: {'question': 'docker question 3', 'answer': 'docker answer 3'},
    },
    'drf': {
        1: {'question': 'Что такое сериализаторы в DRF?', 'answer': 'drf answer 1'},
        2: {'question': 'Как в DRF настраивается роутинг URL?',
            'answer':
            `Пример создания роутеров для методов /departments и /employees в файле urls.py:<br>
             from django.urls import include, path<br>
             from rest_framework import routers<br>
             from .views import DepartmentViewSet, EmployeeViewSet<br>
             <br>
             router = routers.DefaultRouter()<br>
             router.register(r'departments', DepartmentViewSet)<br>
             router.register(r'employees', EmployeeViewSet)<br>
             <br>
             urlpatterns = [<br>
             &nbsp;&nbsp;&nbsp;&nbsp;path('', include(router.urls)),<br>
             ]`},
        3: {'question': 'Как сделать разграничение прав для API метода в DRF?',
            'answer':
            `Для этого в класс-представление нужно добавить поле permission_classes = [] и в нём указать каким группам
             разрешено использовать данный API метод. Например:<br>
             permission_classes = [IsAuthenticated, IsAuthenticatedOrReadOnly]`},
        4: {'question': 'Какие уровни разграничения прав к API методам есть в DRF?',
            'answer':
            `- IsAuthenticated<br>
             - IsAuthenticatedOrReadOnly<br>
             - ?`},
    },
    'brokers': {
        1: {'question': 'Зачем нужны брокеры сообщений?', 'answer': 'brokers answer 1'},
        2: {'question': 'Как устроен RabbitMQ?', 'answer': 'brokers answer 2'},
        3: {'question': 'Как устроен Kafka?', 'answer': 'brokers answer 3'},
        4: {'question': 'В чём принципиальное отличие между RabbitMQ и Kafka?', 'answer': 'brokers answer 4'},
    },
    'other': {
        1: {'question': 'Что такое REST?', 'answer': 'other answer 1'},
        2: {'question': 'Что такое KISS?', 'answer': 'other answer 2'},
        3: {'question': 'Что такое DRY?', 'answer': 'other answer 3'},
    },
}

function getAnswer(category, answerID) {
    var question = document.getElementsByClassName('question')[0]
    var answer = document.getElementsByClassName('answer')[0]
    var questionInMenu = document.getElementById('question ' + answerID)
    var prevSelectQ = document.getElementById(sessionStorage.getItem('prevSelectQuestion') || 'question 1')

    question.innerHTML = answersAndQuestions[category][answerID]['question']
    answer.innerHTML = answersAndQuestions[category][answerID]['answer']
    prevSelectQ.classList.remove('select-question')

    questionInMenu.classList.add('select-question')
    sessionStorage.setItem('prevSelectQuestion', 'question ' + answerID)
}

function getQuestionsList(category) {
    var questionsContainer = document.getElementsByClassName('questions-container')[0]
    var questionsHTML = ''
    for (var i = 1; i <= Object.keys(answersAndQuestions[category]).length; i++) {
        questionsHTML += `<div id="question ${i}" class="question-in-menu" onclick="getAnswer('${category}', ${i})">${answersAndQuestions[category][i]['question']}</div>`
    }
    questionsContainer.innerHTML = questionsHTML
}

function getLayout(category) {
    // сохраняем категорию в объекте sessionStorage браузера
    sessionStorage.setItem("category", category)
    // открываем страницу шаблона
    // window.location.href = window.location.href.replace("index.html", "layout.html").replace("index", "layout")
    window.location.href = window.location.href

    //if (category == 'main') {}
}

function getRubrics() {
    var rubricsContainer = document.getElementsByClassName('rubrics-menu')[0]
    var rubrics = `
            <div class="title">Категории</div>
            <div class="main-title main" onclick="getLayout('main')">Главная</div>
            <div class="main-title work" onclick="getLayout('work')">О работе</div>
            <div class="main-title other" onclick="getLayout('other')">Общее</div>
            <div class="main-title python" onclick="getLayout('python')">Python</div>
            <div class="main-title async" onclick="getLayout('async')">Асинхронность</div>
            <div class="main-title databases" onclick="getLayout('databases')">Базы данных</div>
            <div class="main-title tests" onclick="getLayout('tests')">Тестирование</div>
            <div class="main-title oop" onclick="getLayout('oop')">ООП</div>
            <div class="main-title django" onclick="getLayout('django')">Django</div>
            <div class="main-title git" onclick="getLayout('git')">Git</div>
            <div class="main-title brokers" onclick="getLayout('brokers')">Брокеры сообщений</div>
            <div class="main-title docker" onclick="getLayout('docker')">Docker</div>
            <div class="main-title algorithms" onclick="getLayout('algorithms')">Алгоритмы</div>
            <div class="main-title drf" onclick="getLayout('drf')">DRF</div>
    `
    rubricsContainer.innerHTML = rubrics
}

var mainText = `
    <div class="main-page-content">
        Совет №1: если крутите опыт, то очень хорошо проработайте легенду, посмотрите телеграм-канал "Один день ITтишника",
        поспрашивайте опытных товарищей.
        <br><br>
        Совет №2: чем учить теорию до бесконечности выучите поверхностно любой список вопросов из интернета (топ 50 вопросов
        по вашему языку, топ 50 вопросов по вашему фреймворку) и идите практиковаться проходить собесы. За 5-6 собесов
        поймёте, что спрашивают 20-30 одних и тех же вопросов, выпишите их все и те что не знаете выучите.
        <br><br>
        Совет №3: включайте запись с экрана когда проходите техническое собеседование. Телефонные созвоны с эйчарами
        тоже желательно записывать. Потом отсматривайте/отслушивайте, выписывайте вопросы что задают, обращайте
        внимание как вы сами отвечаете, корректируйте свои ответы. Найдите оптимальный темп ответа: слишком быстрые
        ответы будут выглядеть как заученные, при слишком долгих размышлениях будете выглядеть неуверенно. Идеально
        знать ответ на вопрос и делать вид, что слегка задумался, а потом постепенно выдавать ответ, будто вспоминаешь.
        <br><br>
        Совет №4: на скрининге помимо общих вопросов эйчары могут поспрашивать технические вопросы по бумажке, либо
        тест с вариантами ответов, нужно быть к этому готовым. Твои ответы будут оценивать не они, они запишут ответы
        либо текстом, либо на аудио.
        <br><br>
        Совет №5: не ставьте на один день больше 2 технических собеседований, лучше вообще 1. Скринингов это не касается,
        можно и 5 штук поставить.
        <br><br>
        Совет №6: обязательно просить фидбек в конце интервью, даже если чувствуешь, что провалил его. Если после
        эйчар напишет отказ без фидбека тоже попросить обратную связь. Если всё же не получишь обратную связь, то не
        стоит загоняться по поводу причины отказа, причины могут быть совершенно разные:<br>
        - недостаточные знания<br>
        - не устроила причина твоего увольнения с последнего места работы<br>
        - в резюме слишком частые смены работ<br>
        - вакансия уже закрылась (хотя эту причину обычно озвучивают)<br>
        - ты попросил слишком много денег<br>
        - не понравилась твоя внешность<br>
        - не понравилась твоя манера общения<br>
        - не понравились твои взгляды на работу<br>
        - не подошёл твой предыдущий опыт (искали кандидата с релевантным опытом, например в банковской сфере)<br>
        - не совпали по твоим ожиданиям от работы и то что они могут предложить
        <br><br>
        Совет №7: обращайте внимание на красные флаги. Например:<br>
        - вакансия очень долго открыта<br>
        - не хотят говорить вилку по зарплате<br>
        - очень размытые требования к кандидату<br>
        - сфера деятельности компании из серого списка (ставки на спорт, сайты для взрослых, казино, микрозаймы)<br>
        - оформление по ГПХ или как самозанятый<br>
        - стартап, который оплачивает работу акциями
        <br><br>
        Совет №8: когда будете с эйчаром выбирать дату техсобеса, выбирайте день как можно раньше. Выучить что-то за несколько
        дней в любом случае не успеете, а вот потерять вакансию шансы увеличиваются.
        <br><br>
        Совет №9: не стоит переоценивать знание фреймворков, довольно редко задают вопросы на знание конкретного фреймворка
        и даже если спросят, то скорее всего какие то поверхностные вопросы. Чаще спрашивают фундаментальные вопросы:
        базы данных, асинхронность, знание языка.
        <br><br>
        Совет №10: не приходите на собеседование уставшим, в состоянии опьянения, в плохом самочувствии, лучше в
        таком случае объясниться и попросить перенести встречу.
        <br><br>
        Совет №11: если не знаете ответа, то не нужно мяться и делать долгих пауз, лучше сказать честно, что либо
        забыл, либо не сталкивался с таким в работе, но попробуешь порассуждать. Обращают внимание как ты отвечаешь
        на вопросы на которые не знаешь ответа, пробуешь ли рассуждать, смотрят за логикой рассуждений.
        <br><br>
        Совет №12: обязательно задавайте вопросы эйчару, отсутствие вопросов может произвести впечатление, что ты
        не сильно заинтересован в вакансии.
    </div>
`