answersAndQuestions = {
    'work_place': {
        1: {'question': 'Расскажите о себе', 'answer': 'Кратко описываем свои последние места работы и стек'},
        2: {'question': 'Почему вы уволились с последнего места работы?', 'answer': 'work_place answer 2'},
        3: {'question': 'Расскажите о самом интересном своём проекте', 'answer': 'work_place answer 3'},
        4: {'question': 'Расскажите о самом большом своём факапе', 'answer': 'Рассказать используя концепцию SMART'},
        5: {'question': 'Опишите свой последний рабочий проект', 'answer': 'Рассказать про последний проект'},
        6: {'question': 'Опишите какая была команда и стек на последнем месте', 'answer': 'Рассказать про тимлидов, бэкендеров/фронтов/тестировщиков, описать стек'},
        7: {'question': 'Опишите как был устроен рабочий процесс на последнем месте работы', 'answer': `Описать кто писал ТЗ,
                         кто создавал и назначал задачи, как задачи брали в работу, как сдавали задачи, как контролировали сроки, как проходило code review`},
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
    },
    'databases': {
        1: {'question': 'Что такое ACID?', 'answer': 'databases answer 1'},
        2: {'question': 'Какими основными свойствами должна обладать база данных?', 'answer': 'ACID'},
        3: {'question': 'Какие отличия есть между SQL и NoSQL базами данных?', 'answer': 'databases answer 3'},
        4: {'question': 'Какие существуют SQL и NoSQL базы данных?', 'answer': 'databases answer 4'},
    },
    'algorithms': {
        1: {'question': 'Что такое Big O?', 'answer': 'algorithms answer 1'},
        2: {'question': 'Какие алгоритмы сортировки существуют?', 'answer': 'algorithms answer 2'},
        3: {'question': 'Какая сложность у операции вставки в середину списка?', 'answer': 'algorithms answer 3'},
        4: {'question': 'Какая сложность у операции вставки в конец списка?', 'answer': 'algorithms answer 4'},
    },
    'tests': {
        1: {'question': 'Какой процент кода нужно покрывать тестами?', 'answer': 'tests answer 1'},
        2: {'question': 'Какие инструменты для тестирования существуют?', 'answer': 'tests answer 2'},
    },
    'oop': {
        1: {'question': 'Что такое SOLID?', 'answer': 'oop answer 1'},
        2: {'question': 'Какие основные концепции ООП? Опишите их.', 'answer': 'oop answer 2'},
        3: {'question': 'oop question 3', 'answer': 'oop answer 3'},
    },
    'django': {
        1: {'question': 'django question 1', 'answer': 'django answer 1'},
        2: {'question': 'django question 2', 'answer': 'django answer 2'},
        3: {'question': 'django question 3', 'answer': 'django answer 3'},
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
        1: {'question': 'drf question 1', 'answer': 'drf answer 1'},
        2: {'question': 'drf question 2', 'answer': 'drf answer 2'},
        3: {'question': 'drf question 3', 'answer': 'drf answer 3'},
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

    question.innerHTML = answersAndQuestions[category][answerID]['question']
    answer.innerHTML = answersAndQuestions[category][answerID]['answer']
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
    window.location.href = window.location.href.replace("index.html", "layout.html").replace("index", "layout")
}