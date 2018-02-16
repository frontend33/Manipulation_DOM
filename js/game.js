// Захватываем все элементы с классом .pool 
var pools=document.querySelectorAll('.pool');
// В классе pool ищем элементы .el
var blocks=document.querySelectorAll('.el');
// Можем удалить наш дочерний элемент
pools[0].removeChild(blocks[0]);
// Даже после удаления с DOM дерева в памяти элемент остается и им можно манипулировать
// Для переноса не обязательно удалять наш элемент можно сразу перенести 
// т.к один и тот же элемент не может хранится в нескольких родителях одновременно
// Добавляем наш дочерний элемент родителя в новый div
// Причем в начале элемент с индексом[1], потом с индексом[0]
pools[2].appendChild(blocks[1]);
pools[2].appendChild(blocks[0]);

// Если я хочу вставить блок между блоками blocks[1] и blocks[0] я использую точечную вставку
pools[2].insertBefore(blocks[3],blocks[0]);
// Если задать второй элемент как null то он выкинет его в конец
// pools[2].insertBefore(blocks[3],null);
// Можно заменять блоки,заменим 4 блок и кинем его в конец
var replaced=pools[0].replaceChild(blocks[2],blocks[4]);
pools[0].appendChild(replaced);
// Можно скопировать элемент пишем куда копировать ,какой_блок_скопировать.cloneNode()
pools[1].appendChild(blocks[0].cloneNode());

