/*Задание 8
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько 
указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
 */

console.log('------------------task8 start-------------------');

const refs = {
  inputElement: document.querySelector("input"),
  renderButtonElement: document.querySelector('[data-action="render"]'),
  destroyButtonElement: document.querySelector('[data-action="destroy"]'),
  boxesContainer: document.querySelector("#boxes"),
}

console.log(refs.renderButtonElement);

let amount = 0;       // комментарий для ментора - зачем извращаться с amount, если значение текущее можно
                      // достать из inputElement? Это чтобы проверить, умеем ли мы передавать параметры в коллбэк?

refs.inputElement.addEventListener('blur', function () {    // вопрос относящийся к вопросу выше, пришлось писать бестолковую
  amount = refs.inputElement.value;                         // функцию, которая трекает в наш amount текущее значение input
});                                                         // зачем нам лишний listener? :)

refs.renderButtonElement.addEventListener('click', () => createBoxes(amount));
refs.destroyButtonElement.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let newChildrenList = "";
  for (let i = 0; i < amount; i++)
  {
      const boxesContainerChildrenQuantity = refs.boxesContainer.querySelectorAll("div").length; //current children quantity
      const lastChildParameters = 20 + 10 * boxesContainerChildrenQuantity; //last container's params
      newChildrenList += `<div style="width: ${lastChildParameters+10*(i+1)}px; height: ${lastChildParameters+10*(i+1)}px; background-color: #${Math.round(255.0 * Math.random()).toString(16) + Math.round(255.0 * Math.random()).toString(16) + Math.round(255.0 * Math.random()).toString(16)};"></div>`;
  }
    refs.boxesContainer.insertAdjacentHTML('beforeend', newChildrenList);
}

function destroyBoxes(event) {
  refs.boxesContainer.innerHTML = "";
}

console.log('------------------task8 end---------------------');