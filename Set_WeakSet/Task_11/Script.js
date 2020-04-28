// Задача 11
/* Условие:  Даны абзацы и кнопка. Пользователь кликает на эти абзацы в произвольном порядке. 
Сделайте так, чтобы по нажатию на кнопку в конец каждого абзаца, на который был совершен клик, был добавлен восклицательный знак. */
let set = new Set;
let ps = document.querySelectorAll('div p');
for (let p of ps) p.addEventListener('click', function(){ set.add(this); });
function AddSign() { for (let elem of set) elem.innerHTML += "!"; set.clear(); }