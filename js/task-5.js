/* Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение 
в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/

console.log('------------------task5 start-------------------');

const refs = {
  inputElement: document.querySelector("input#name-input"),
  spanNameOutputElem: document.querySelector("span#name-output"),
}

refs.inputElement.addEventListener('input', inputElementKeyPressHandler);

function inputElementKeyPressHandler(event) {
  if (event.currentTarget.value === "") {
    refs.spanNameOutputElem.textContent = "незнакомец";
  } else {
    refs.spanNameOutputElem.textContent = event.currentTarget.value;
  }
}

console.log('------------------task5 end---------------------');