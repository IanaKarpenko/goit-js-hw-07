/*Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и 
изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
 */


console.log('------------------task7 start-------------------');

const refs = {
  spanTextElement: document.querySelector("span#text"),
  inputRangeElement: document.querySelector("input#font-size-control"),
}

refs.inputRangeElement.addEventListener("input", inputRamngeElementInputHandler);

function inputRamngeElementInputHandler(event) {
  refs.spanTextElement.setAttribute("style", `font-size:${event.currentTarget.value*2}%`); // вопрос к ментору - увеличивала в процентах, 
}                                                                                          // но в задании неясно, как надо было :)

console.log('------------------task7 end---------------------');