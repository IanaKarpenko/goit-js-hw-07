/* Задание 6
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

console.log('------------------task6 start-------------------');

const inputElement = document.querySelector("#validation-input");
console.log(inputElement);

inputElement.addEventListener('blur', inputElementChange);

function inputElementChange(event) {
  if (event.currentTarget.value.length === 6) {
    inputElement.classList.contains("invalid") ?
      inputElement.classList.replace("invalid", "valid")
      : inputElement.classList.add("valid");
  } else {
    inputElement.classList.contains("valid") ?
      inputElement.classList.replace("valid", "invalid")
      : inputElement.classList.add("invalid");
  }
}

console.log('------------------task6 end---------------------');