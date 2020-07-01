## Step form: React [Live Demo](https://tereshka.github.io/step-form)

Create a step form with React styled by bootstrap
- 1 step: basic information
- 2 step: constact information
- 3 step: loading avatar iamge
- 4 step: overview of input data


## Задание. Форма

Сделать Fork этого репозитория

Форма с 4 шагами: 3 шага заполнения данных, последний шаг - отображение заполненныx данных

- Шаг 1 (Basic)

| Поля            | Тип инпута | Валидация                     |
| --------------- | ---------- | ----------------------------- |
| firstname       | text       | Must be 5 characters or more  |
| lastname        | text       | Must be 5 characters or more  |
| password        | password   | Must be 6 characters or more  |
| repeatPassword  | password   | Must be equal password        |
| gender          | radio      | Required                      |

- Шаг 2 (Contacts)

| Поля            | Тип инпута | Валидация                     |
| --------------- | ---------- | ----------------------------- |
| email           | text       | Invalid email address         |
| mobile          | text       | Invalid mobile                |
| country         | select     | Required                      |
| city            | select     | Required                      |

* При выборе опредленной страны должны отображаться список городов только этой страны, связь по id

- Шаг 3 (Avatar)

| Поля            | Тип инпута | Валидация                     |
| --------------- | ---------- | ----------------------------- |
| avatar           | file      | Required                      |

* После загрузки аватара пользователя должно показывать его превью ("img src='base64'")

* На каждом шаге (кроме 4-го шага) должны отображаться кнопки Назад - Вперед
* При нажатии на кнопку Вперед должна проходить валидация:
  - если валидно, показывать поля следующего шага
  - если невалидно, показываться ошибки под полями и подсвечивать border
  
* При нажатии на кнопку Назад должен отображаться предыдущий шаг

* Последний 4 шаг это отображение всех полей, которые ввел пользователь


На выходе должно получиться как в примере https://reactwarriors.github.io/reactwarriors-stage-2/
