function getAnswer(category, answerID, option) {
    var question = option ? document.getElementsByClassName('question-mobile')[0] : document.getElementsByClassName('question')[0]
    var answer = option ? document.getElementsByClassName('answer-mobile')[0] : document.getElementsByClassName('answer')[0]
    var questionInMenu = document.getElementById('question ' + answerID)
    var prevSelectQ = document.getElementById(sessionStorage.getItem('prevSelectQuestion') || 'question 1')

    question.innerHTML = answersAndQuestions[category][answerID]['question']
    answer.innerHTML = answersAndQuestions[category][answerID]['answer']
    if (prevSelectQ) {
        prevSelectQ.classList.remove('select-question')
    }

    questionInMenu.classList.add('select-question')
    sessionStorage.setItem('prevSelectQuestion', 'question ' + answerID)

    if (option && option == 'mobile') {
        document.getElementsByClassName('questions-menu-mobile')[0].classList.remove('active')
    }
}

function getQuestionsList(category, option) {
    var questionsContainer = option ? document.getElementsByClassName('questions-container-mobile')[0] : document.getElementsByClassName('questions-container')[0]
    var questionsHTML = ''
    for (var i = 1; i <= Object.keys(answersAndQuestions[category]).length; i++) {
        if (option) {
            questionsHTML += `<div id="question ${i}" class="question-in-menu mobile" onclick="getAnswer('${category}', ${i}, 'mobile')">${answersAndQuestions[category][i]['question']}</div>`
        } else {
            questionsHTML += `<div id="question ${i}" class="question-in-menu" onclick="getAnswer('${category}', ${i})">${answersAndQuestions[category][i]['question']}</div>`
        }
    }
    questionsContainer.innerHTML = questionsHTML
}

function getLayout(category) {
    // сохраняем категорию в объекте sessionStorage браузера
    sessionStorage.setItem("category", category)
    // обновляем страницу
    window.location.href = window.location.href
}

function getRandomQuestionFromCategory(category) {
    // если нужно выбрать случайную категорию
    if (category == 'random') {
        // Получаем массив всех ключей объекта answersAndQuestions
        const jobKeys = Object.keys(answersAndQuestions);
        // Выбираем случайный ключ из jobKeys
        category = jobKeys[Math.floor(Math.random() * jobKeys.length)];
    }
    // Получаем массив всех вопросов из выбранного объекта
    const questions = Object.values(answersAndQuestions[category]);

    // Получаем случайный индекс из массива questions
    const randomIndex = Math.floor(Math.random() * questions.length);

    // Получаем случайный вопрос
    const result = questions[randomIndex].question;

    alert(result)
}

function runCommand(data) {
    const question = /вопрос/i
    const random = /любой/i
    const work = /работа/i
    const other = /(общ(и|е)(е|и|й))/i
    const python = /(пайтон|питон|пайтн|пайтим)/i
    const databases = /базы данных/i
    const oop = /ооп/i
    const async = /синхронност/i
    const tests = /тестирован/i
    const django = /джанго/i
    const git = /ги(т|д)/i
    const docker = /докер/i
    const algorithms = /алгоритмы/i
    const linux = /(линукс|линкс)/i
    const drf = /(дрф|дф|d рф|др рф)/i
    const brokers = /брокеры/i
    if (question.test(data)) {
        // проверяем категорию вопроса
        if (random.test(data)) {
            getRandomQuestionFromCategory('random')
        } else if (work.test(data)) {
            getRandomQuestionFromCategory('work')
        } else if (other.test(data)) {
            getRandomQuestionFromCategory('other')
        } else if (python.test(data)) {
            getRandomQuestionFromCategory('python')
        } else if (databases.test(data)) {
            getRandomQuestionFromCategory('databases')
        } else if (oop.test(data)) {
            getRandomQuestionFromCategory('oop')
        } else if (async.test(data)) {
            getRandomQuestionFromCategory('async')
        } else if (tests.test(data)) {
            getRandomQuestionFromCategory('tests')
        } else if (django.test(data)) {
            getRandomQuestionFromCategory('django')
        } else if (git.test(data)) {
            getRandomQuestionFromCategory('git')
        } else if (docker.test(data)) {
            getRandomQuestionFromCategory('docker')
        } else if (algorithms.test(data)) {
            getRandomQuestionFromCategory('algorithms')
        } else if (linux.test(data)) {
            getRandomQuestionFromCategory('linux')
        } else if (drf.test(data)) {
            getRandomQuestionFromCategory('drf')
        } else if (brokers.test(data)) {
            getRandomQuestionFromCategory('brokers')
        } else {
            alert('не могу показать вопрос, потому что не распознал название категории')
        }
    } else {
        alert('неизвестная команда')
    }
}

// для мобильной страницы
function openCategoryMenu() {
    document.getElementsByClassName('category-mobile')[0].classList.toggle('active')
}

function openQuestionsMenu() {
    document.getElementsByClassName('questions-menu-mobile')[0].classList.toggle('active')
}

function fillCounters() {
    for (var key in answersAndQuestions) {
      if (answersAndQuestions.hasOwnProperty(key)) {
        if (key != 'main') {
          var count = Object.keys(answersAndQuestions[key]).length;
          document.getElementsByClassName(`${key}`)[0].children[0].textContent = count
        }
      }
    }
}
