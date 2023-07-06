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
        1: {'question': 'Что такое asyncio?',
            'answer': `Asyncio (Asynchronous Input/Output) - это библиотека для написания асинхронного кода с
                       использованием синтаксиса async/await в Python. Она предоставляет асинхронную основу для многих
                       Python фреймворков, использующих асинхронное программирование. Благодаря asyncio можно
                       одновременно обрабатывать большое количество запросов, обращаться к внешним сервисам и
                       улучшить производительность веб-приложений.`},
        2: {'question': 'Как в Python работает многопроцессорность, многопоточность и асинхронность?',
            'answer': `Многопроцессорность в Python реализуется через библиотеку multiproccesing.<br>
                       <br>
                       Многопоточность в Python реализуется через библиотеку threading.<br>
                       <br>
                       Асинхронность в Python реализуется через библиотеку asyncio.`},
        3: {'question': 'Что такое GIL?',
            'answer': `GIL (Global Interpreter Lock) - это механизм в CPython (стандартной реализации Python), который
                       предназначен для обеспечения потокобезопасности , ограничивая выполнение кусков байткода Python
                       только одним потоком в любое время.
                       <br><br>
                       GIL блокирует объект интерпретатора, что позволяет только одному потоку Python выполнять байткод
                       в конкретный момент времени. Это нужно для того, чтобы гарантировать, что изменения в памяти не
                       приводят к недопустимым состояниям, таким как гонки данных или состояния гонок, т.е. для защиты
                       структуры данных интерпретатора, который имеет глобальную область видимости.
                       <br><br>
                       Вследствие этого GIL может ограничивать производительность многопоточных приложений. Хотя многие
                       операции в Python, такие как ввод-вывод или работа с сетью, могут проходить без блокировки GIL,
                       многопоточные приложения, к примеру, производящие вычисления, в большинстве случаев не получают
                       ощутимого преимущества от использования нескольких потоков.
                       <br><br>
                       Некоторые реализации Python, такие как Jython и IronPython, не имеют GIL и опираются на другие
                       механизмы для обеспечения потокобезопасности.`},
        4: {'question': 'Как работает сборщик мусора в Python?',
            'answer': `Сборщик мусора в Python отслеживает объекты, которые не имеют ссылок на себя из других объектов,
                       и освобождает память, занимаемую такими объектами. Он автоматически обрабатывает память и удаляет
                       из нее объекты, которые больше не используются в программе, что упрощает работу программиста и
                       предотвращает утечки памяти.
                       <br><br>
                       В Python используется разновидность сборщика мусора, называемая "генерационным". Он разделяет
                       объекты на три поколения: молодое поколение, поколение следующего уровня и долгоживущие объекты.
                       Большинство объектов быстро становятся мусором и собираются в молодом поколении, но если они
                       переживают несколько сборок мусора, то перемещаются в поколение следующего уровня для более
                       тщательной обработки.`},
        5: {'question': 'Как в Python устроены словари?',
            'answer': `В Python словари (dict) устроены как хеш-таблицы, что делает их очень эффективными для быстрого
                       поиска и доступа к данным. В словарях представлены данные в виде ключей и значений, где каждый
                       ключ должен быть уникальным.
                       <br><br>
                       При добавлении элемента в словарь, Python использует хеш-функцию для определения индекса, по
                       которому он должен храниться. При поиске элемента Python повторно использует эту хеш-функцию для
                       поиска индекса, что делает поиск элементов в словаре очень быстрым. По этой же причине в качестве
                       ключа можно использовать только неизменяемый тип данных.
                       <br><br>
                       Словари в Python являются изменяемым типом данных, что означает, что они могут изменяться в
                       процессе выполнения программы. Они также являются контейнерным типом данных, что позволяет
                       хранить в них любые другие типы данных, включая списки, кортежи и даже другие словари.`},
        6: {'question': 'Как в Python устроены списки?', 'answer': 'python answer 6'},
        7: {'question': 'Какие изменяемые и неизменяемые типы данных есть в Python?', 'answer': 'python answer 7'},
        8: {'question': 'Что такое вещественные и ссылочные типы данных?', 'answer': 'python answer 8'},
        9: {'question': 'Что такое List Comprehensions?', 'answer': 'python answer 9'},
        10: {'question': 'Что такое генератор (yield) в Python?',
             'answer': 'python answer 10'},
        11: {'question': 'Что такое декораторы в Python? Как написать свой декоратор?', 'answer': 'python answer 11'},
        12: {'question': 'Какие есть изменения в версиях Python 2.x/3.x?',
             'answer': `Версия 3.4 (16 мар 2014):<br>
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
            'answer': `async и await - это ключевые слова, используемые при работе с асинхронными функциями в Python. async
                       помечает функцию как асинхронную, а await используется для ожидания результата работы функции.
                       Например:`},
        3: {'question': 'Зачем нужно асинхронное выполнение кода?',
            'answer': `В контексте backend-разработки очень много времени тратится на операции ввода-вывода данных
                       (input/output), асинхронное выполнение кода нужно для того, чтобы выполнять такие операции
                       параллельно. К примеру, чтобы запросы к базе данных не замедляли выполнение кода и выполнялись
                       параллельно остальному коду или когда микросервисы посылают запросы к другим сервисам.`},
        4: {'question': 'Для каких задач применяется asynсio в Django проекте?',
            'answer': `Асинхронный ввод-вывод, предоставляемый asyncio, позволяет одновременно обрабатывать большое
                       количество запросов, не блокируя основной поток выполнения. В Django можно использовать asyncio
                       для обработки запросов, в работе которых требуется обращение к внешним сервисам, например, при
                       отправке электронной почты, обращении к API сторонних сервисов, работы с веб-сокетами и т.д.`},
        5: {'question': 'Многопроцессорность, многопоточность, асинхронность. В чём между ними разница и где что лучше использовать?',
            'answer': `Минусы многопроцессорности:<br>
                       - требуют много памяти (особенно для Python)<br>
                       - неэффективная коммуникация между процессами<br>
                       - overhead со стороны OS (user-space to kernel-space trip, scheduling, context switching),
                       тратится слишком много ресурсов, например вычищение кэшей при context switching<br>
                       <br>
                       Многопоточность имеет преимущества над многопроцессорностью:<br>
                       - требует меньше памяти<br>
                       - между потоками коммуникация более эффективная и простая чем между процессами (так как общая память)<br>
                       - менее ресурсозатратное переключение между потоками (не нужно чистить кэши)<br>
                       <br>
                       Но так же имеет ряд минусов:<br>
                       - иные проблемы с коммуникацией между потоками - состояние гонки, дедлоки (из-за общей памяти)<br>
                       - всё ещё overhead со стороны OS (шедулинг потоков)<br>
                       - даже если ограничивать количество потоков пулами, то пулы всё равно могут забиваться, приложение зависает<br>
                       `},
    },
    'databases': {
        1: {'question': 'Что такое ACID?', 'answer': 'databases answer 1'},
        2: {'question': 'Какими основными свойствами должна обладать транзакционная база данных?', 'answer': 'ACID'},
        3: {'question': 'Какое из свойств ACID является мнимым?', 'answer': '?'},
        4: {'question': 'Какие отличия есть между SQL и NoSQL базами данных?', 'answer': 'databases answer 3'},
        5: {'question': 'Какие существуют базы данных?',
            'answer': `SQL СУБД:<br>
                       - PostrgeSQL<br>
                       - MySQL<br>
                       - Microsoft SQL Server<br>
                       - Oracle Database<br>
                       - SQLite<br>
                       <br>
                       NoSQL СУБД:<br>
                       - MongoDB<br>
                       - ClickHouse<br>
                       <br>
                       Гибридные БД:<br>
                       - Redis<br>
                       - Tarantool<br>`},
        6: {'question': 'Что такое транзакция?', 'answer': 'databases answer 6'},
        7: {'question': 'Что такое индексы в базе данных? Зачем они нужны? Назовите плюсы и минусы индексации.',
            'answer': `databases answer 7`},
        8: {'question': `Приходилось ли помимо ORM писать напрямую запросы к базе данных?
                         В каких случаях это требовалось?`,
            'answer': `Django ORM плохо оптимизирует JOIN запросы, в таких случаях приходится писать прямые SQL запросы к базе данных.`},
        9: {'question': 'Какие типы JOIN есть в SQL?',
            'answer': `- INNER JOIN<br>
                       - LEFT JOIN<br>
                       - RIGHT JOIN<br>
                       - FULL OUTER JOIN<br>
                       - CROSS JOIN<br>
                       - SELF JOIN<br>`},
        10: {'question': 'Есть две таблицы - на 10 и на 5 записей. Сколько записей станет при CROSS JOIN объединении? А при INNER JOIN?',
             'answer': 'При CROSS JOIN в объединённой таблице записей будет 50, а при INNER JOIN 10 или 5 записей.'},
        11: {'question': 'Что такое уровни изоляции?',
             'answer': `Это разграничение прав между параллельными транзакциями на доступ к общим ячейкам базы данных.
                        Выделяют 4 уровня изоляции:<br>
                        - Read Uncommitted (RU) - транзакция может читать данные, изменяемые другими незафиксированными
                        транзакциями, что может привести к чтению "грязных" данных<br>
                        - Read Committed (RC) - транзакция может читать только данные, зафиксированные в базе данных на
                        момент чтения или после, если данные были закоммичены<br>
                        - Repeatable Read (RR) - транзакция не будет видеть изменения, сделанные другими транзакциями
                        после начала чтения, что может привести к фантомным чтениям<br>
                        - Serializable (SE) - транзакции выполняются последовательно, что гарантирует изоляцию транзакций
                        и отсутствие фантомных чтений<br>`},
    },
    'algorithms': {
        1: {'question': 'Что такое Big O?', 'answer': 'algorithms answer 1'},
        2: {'question': 'Какие алгоритмы сортировки существуют?', 'answer': 'algorithms answer 2'},
        3: {'question': 'Какая сложность у операции вставки в середину списка в Python?',
            'answer': `Вставка элемента в середину списка в Python занимает O(n) времени в худшем случае, где n - это
                       длина списка. Так как после вставки элемента необходимо перепривязать все соседние элементы, что
                       может потребовать прохождения до середины списка. Если индекс позиции вставки находится ближе к
                       началу списка, сложность может быть O(1) или близкой к этому значению.`},
        4: {'question': 'Какая сложность у операции вставки в конец списка в Python?',
            'answer': 'В Python сложность вставки в конец списка будет O(1), так как мы обращаемся по индексу.'},
        5: {'question': 'Какие виды сортировок существуют?', 'answer': 'Пузырьком, слиянием, быстрая сортировка/сортировка Хоара'},
        6: {'question': 'Что такое хэш-таблица?', 'answer': 'algorithms answer 6'},
        7: {'question': 'Как развернуть связный список (linked list)?', 'answer': 'algorithms answer 6'},
        8: {'question': 'Как развернуть словарь в Python?',
            'answer': `def reverse_dict(my_dict):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;current_node = my_dict<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;new_pointer = None<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;while current_node:<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;old_pointer = current_node['next']<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current_node['next'] = new_pointer<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_pointer = current_node<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current_node = old_pointer<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;return new_pointer`},
    },
    'tests': {
        1: {'question': 'Какой процент кода нужно покрывать тестами?',
            'answer': `Нужно стремиться к 70-80%, но держать в голове, что на практике покрытие будет на 10-15% меньше, чем запланировал.`},
        2: {'question': 'Какие инструменты для тестирования существуют?',
            'answer': `- библиотека pytest<br>
                       - Postman для тестирования API<br>
                       - Selenium для автоматизации ручного тестирования<br>
                       - Linter для проверки Code Style`},
        3: {'question': 'Какие виды тестирования существуют?',
            'answer': `- unit-тесты<br>
                       - интеграционные тесты<br>
                       - mock-тестирование`},
        4: {'question': 'Что такое unit-тесты? Зачем они нужны?',
            'answer': 'unit-тесты проверяют работоспособность отдельных модулей проекта'},
        5: {'question': 'Что такое интеграционные тесты? Зачем они нужны?',
            'answer': `answer 5`},
        6: {'question': 'Что такое mock-тесты? Зачем они нужны?',
            'answer': `answer 6`},
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
        8: {'question': 'Какие стандартные методы есть у классов в Python?',
            'answer': `- __init__<br>
                       - __str__<br>`},
        9: {'question': 'Как получить все свойства класса в Python?',
            'answer': `Можно использовать функцию dir(), которая вернёт все свойства и методы класса, а затем
                       исключить методы. Например, так можно реализовать метод, обнуляющий все свойства в классе:<br>
                       def reset(self):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;for attr in dir(self):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if not callable(getattr(self, attr)) and not attr.startswith("__"):<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setattr(self, attr, None)`},
    },
    'django': {
        1: {'question': 'Что нового в версиях Django 2.x/3.x/4.x?',
            'answer': `Версия 3.0 (2 дек 2019):<br>
                       - добавлена поддержка MariaDB, ASGI<br>
                       Версия 3.1 (4 авг 2020):<br>
                       - добавлена поддержка асинхронных view и middleware<br>
                       Версия 4.1 (3 авг 2022):<br>
                       - добавлен асинхронный интерфейс к ORM`},
        2: {'question': 'Что такое миграции в Django?',
            'answer': `Миграции баз данных в Django - это способ управления изменениями в структуре базы данных в процессе
                       разработки приложений. Миграции позволяют автоматически применять изменения, сделанные в коде
                       приложения, к уже существующей базе данных. В Django создание миграций начинается с команды
                       makemigrations, которая создает файлы миграций на основе моделей приложения, в эти файлы записываются
                       все изменения в структуре базы данных, которые вы внесли. Затем эти миграции применяются к базе
                       данных с помощью команды migrate. Такой подход помогает разработчикам безопасно и эффективно
                       изменять структуру базы данных, минимизируя время простоя.<br>
                       <br>
                       Механизм:<br>
                       1) Захотели изменить таблицу в базе (добавить столбцы, удалить столбцы, изменить тип полей)<br>
                       2) Вносите изменение в класс, описывающий таблицу в файле models.py<br>
                       3) Выполняете команду manage.py makemigrations, которая создаст sql-запросы к базе данных,
                       нужные для изменения структуры базы данных как вы хотите<br>
                       4) Выполняете команду manage.py migrate, которая выполнит все сгенерированные sql-запросы, либо
                       выдаст ошибку в случае конфликта<br>
                       <br>
                       Файлы миграций хранят историю изменения базы данных, используя их можно откатиться до предыдущего
                       состояния базы данных.`},
        3: {'question': 'Что такое модели в Django?', 'answer': 'django answer 3'},
        4: {'question': 'Что такое prefetch_related и select_related в Django?',
            'answer': `select_related и prefetch_related - это методы оптимизации запросов в Django ORM для связей между
                       таблицами в базе данных.<br>
                       <br>
                       select_related используется для сокращения количества SQL-запросов при доступе к связанным объектам
                       по внешним ключам, делая JOIN с предварительной выборкой связанных объектов. Удобен при работе с
                       одним-ко-многим или один-к-одному отношению.<br>
                       <br>
                       prefetch_related позволяет избежать дополнительных запросов при доступе к QuerySet'у, имеющему
                       связанные объекты в виде множества. Он работает путем выполнения двух отдельных запросов к базе
                       данных - один для исходного QuerySet'а и один для заполнения кэша со всеми связанными объектами.
                       Запрос к базе данных заполняет кэш, а затем django загружает все связанные объекты из кэша вместо
                       выполнения дополнительных запросов впоследствии. Таким образом, в отличие от select_related,
                       prefetch_related особенно полезен, когда QuerySet имеет связанные объекты в виде множества, т.е.
                       имеет связь многие-ко-многим.`},
        5: {'question': 'Что такое ленивые запросы (lazy queries) в Django?',
            'answer': `Ленивые запросы (lazy queries) в Django - это объекты QuerySet, которые не выполняются сразу, а
                       только при обращении к результату запроса. Таким образом, вместо выполнения запроса к базе данных
                       сразу после создания QuerySet'а, Django откладывает выполнение запроса до момента, когда это
                       действительно необходимо (например, при доступе к первому элементу запроса). Это позволяет избежать
                       выполнения лишних запросов в случае, когда результат запроса в итоге не будет использован.`},
        6: {'question': 'Что такое QuerySet в Django?',
            'answer': `Объект QuerySet в Django используется для описания запроса к базе данных. Когда мы присваиваем
                       переменной значение из базы данных, то фактически в переменную записывается объект QuerySet,
                       который мы описали, например my_value = MyModel.objects.filter(type='string'). Само значение
                       запишется в переменную только после того, как мы обратимся к этой переменной, т.е. выполнится
                       отложенный запрос к базе данных. Примеры вопросов с техсобесов:<br>
                       1) Сколько запросов к базе данных будет выполнено в этом коде:<br>
                       a = MyModel.objects.all()<br>
                       2) Сколько запросов к базе данных будет выполнено в этой функции?<br>
                       def test():<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;MyModel.object.filter(type="a")<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;MyModel.object.filter(type="b")<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;c = MyModel.object.filter(type="c")<br>
                       <br>
                       На оба вопроса правильный ответ - ноль, так как мы лишь описали запросы к базе данных, выполнятся
                       они лишь когда мы обратимся к тем переменным, в которые их записали.`},
        7: {'question': 'Как в Django написать прямой запрос к базе данных (например Postgres)?',
            'answer': `import psycopg2
                       <br><br>
                       conn = psycopg2.connect(database="mydatabase", user="mydatabaseuser", password="mypassword", host="localhost", port="5432")
                       <br><br>
                       cur = conn.cursor()
                       <br><br>
                       cur.execute("SELECT * FROM mytable")
                       <br><br>
                       conn.close()`},
    },
    'git': {
        1: {'question': 'В чём отличие merge от rebase?',
            'answer': `Отличие между rebase и merge в Git заключается в том, как происходит объединение изменений из
                       разных веток в одну. Merge создает новый коммит, который имеет двух предков - последний коммит в
                       текущей ветке и последний коммит в объединяемой ветке. Rebase же перемещает все изменения из
                       текущей ветки на вершину целевой ветки, что позволяет создать линейную историю коммитов без
                       ветвлений и точек слияния. Это полезно, если вы хотите иметь чистую, простую историю коммитов в
                       ветке, или если вы работаете над веткой, которая долгое время не была обновлена и может содержать
                       конфликты с последней версией целевой ветки.`},
        2: {'question': 'Какие команды git вы использовали в работе?',
            'answer': `- git clone<br>
                       - git add<br>
                       - git commit<br>
                       - git push<br>
                       - git pull<br>
                       - git rebase<br>
                       - git merge<br>
                       - git amend<br>`},
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
            'answer': `Пример создания роутеров для методов /departments и /employees в файле urls.py:<br>
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
            'answer': `- IsAuthenticated<br>
                       - IsAuthenticatedOrReadOnly<br>
                       - ?`},
        5: {'question': 'Что такое встроенные DRF фильтры?',
            'answer': `Встроенные DRF фильтры - это набор классов фильтров, предоставляемых Django REST Framework "из коробки"
                       для фильтрации queryset'ов в представлениях API. Список фильтров:<br>
                       - DjangoFilterBackend<br>
                       - SearchFilter<br>
                       - OrderingFilter<br>
                       - Pagination`},
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
        4: {'question': 'Что такое вебсокеты?', 'answer': 'other answer 4'},
        5: {'question': 'Что такое монолит и микросервисы?', 'answer': 'other answer 5'},
        6: {'question': 'Как вы изучали программирование?', 'answer': 'other answer 6'},
        7: {'question': 'Какие существуют инструменты для оптимизации кода в Django проектах?',
            'answer': `cProfile - это модуль Python, который позволяет профилировать код на уровне функций и строк кода.<br><br>
                       line_profiler - это модуль для профилирования производительности на уровне строк кода.<br><br>
                       Django Debug Toolbar - это инструмент для отслеживания производительности Django-приложений.`},
    },
    'linux': {
        1: {'question': 'Какие основные команды есть в Linux?', 'answer': 'linux answer 1'},
        2: {'question': `Если в оперативной памяти 6 гигабайт, а процесс занимает 4 гигабайта и мы делаем форк процесса,
                         то что произойдёт?`,
            'answer': 'linux answer 2'},
        3: {'question': 'Как посмотреть все процессы?', 'answer': 'linux answer 3'},
    },
    'review': {
        1: {'question': 'первый пример', 'answer': 'ревью первого примера'},
        2: {'question': 'второй пример', 'answer': 'ревью второго примера'},
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