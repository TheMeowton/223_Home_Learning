let canvas = document.getElementById('my_canvas');
let context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 760;
canvas.style.border = '3px dashed yellow';

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*	КОД - УЖАСНАЯ ПОМОЙКА, НО ПОЛНОСТЬЮ МОЙ, И ТАК КАК ЭТО ПЕРВАЯ ИГРА КОТОРУЮ Я ДЕЛАЛ С НУЛЯ
	ЗДЕСЬ КУЧА БАГОВ, ЛАГОВ, НИКАКОЙ ОПТИМИЗАЦИИ ОСОБЕННО ИЗ-ЗА КУЧИ ИФОФ. У МЕНЯ БОЛЬШЕ НЕТ
	СИЛ И ВРЕМЕНИ ДОРАБАТЫВАТЬ И ПОЛИРОВАТЬ ИГРУ, ПОЭТОМУ ОСТАВЛЯЮ КАК ЕСТЬ, НО ИГРА НЕ ЯВЛЯЕТСЯ
	КОНЕЧНЫМ ПРОДУКТОМ ИЛИ ВРОДЕ ТОГО (преподаватель по математике сказала всегда так говорить =)).
	ОШИБКИ ПОНЯЛ, И НА БУДУЩЕЕ ВОЗЬМУ НА ЗАМЕТКУ, ЧТО ЛУЧШЕ СРАЗУ ОПТИМИЗИРОВАТЬ И ДЕЛАТЬ МОДУЛЬНЫЙ,
	НЕЗАВИСИМЫЙ И ОРГАНИЗОВАННЫЙ КОД, КОТОРЫЙ МОЖНО БУДЕТ ХОТЬ СКОЛЬКО МОДИФИЦИРОВАТЬ 
	И ДОРАБАТЫВАТЬ...                                                                                  */
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// КОНТЕЙНЕР
let div = document.querySelector('div');

// ЗАПУСК МЕНЮ
Menu();

// ЗАГРУЗКА МЕНЮ
function Menu(){
// ЛОГО
let logo = new Image();
logo.src = 'Resources/Menu/Game_Logo.png';
logo.onload = () => context.drawImage(logo,110,20);

// НАДПИСЬ ВВЕДИТЕ ВАШЕ ИМЯ
context.fillStyle = 'yellow';
context.font = '24pt serif';
context.fillText('Ваше имя:',230,340);

// ИНПУТ
let input_name = document.createElement("INPUT");
input_name.type = 'text';
input_name.value = 'Anon';
input_name.style = "position:absolute;left:200px;top:350px;";
div.appendChild(input_name);

// КНОПКА НАЧАТЬ
let button_start = document.createElement("BUTTON");
button_start.innerHTML = 'Начать';
button_start.style = "position:absolute;left:120px;top:420px; width: 350px; height: 100px;";
div.appendChild(button_start);


// ВЫБОР КОРАБЛЯ
let choose_ship = new Image();
choose_ship.src = 'Resources/Menu/Choose_Ship.png';
choose_ship.onload = () => context.drawImage(choose_ship,60,510,159,106);

// СТИЛЬ ШРИФТА ДЛЯ СТАТ. КОРАБЛЕЙ
context.font = '7pt serif';

// 1 КОРАБЛЬ
let ship_1 = new Image();
ship_1.src = 'Resources/PlayerShips/playerShip1_blue.png';
ship_1.onload = () => context.drawImage(ship_1,60,580, 66, 50);
context.fillText('ЗД 100',28,590);
context.fillText('СК 100',28,602);
context.fillText('УР 100',28,614);
let radio_1 = document.createElement("INPUT");
radio_1.type = 'radio';
radio_1.name = 'player_ship';
radio_1.style = "position:absolute;left:85px;top:640px; width: 12px; height: 12px";
div.appendChild(radio_1);
let span_1 = document.createElement("SPAN");
span_1.style= "position:absolute;left:60px;top:580px; width: 68px; height: 55px";
div.appendChild(span_1);
span_1.onclick = () => radio_1.checked = true;

// 2 КОРАБЛЬ
let ship_2 = new Image();
ship_2.src = 'Resources/PlayerShips/playerShip2_blue.png';
ship_2.onload = () => context.drawImage(ship_2,170,580, 66, 50);
context.fillText('ЗД 50',138,590);
context.fillText('СК 150',138,602);
context.fillText('УР 50',138,614);
let radio_2 = document.createElement("INPUT");
radio_2.type = 'radio';
radio_2.name = 'player_ship';
radio_2.style = "position:absolute;left:197px;top:640px; width: 12px; height: 12px";
div.appendChild(radio_2);
let span_2 = document.createElement("SPAN");
span_2.style= "position:absolute;left:172px;top:580px; width: 65px; height: 55px";
div.appendChild(span_2);
span_2.onclick = () => radio_2.checked = true;

// 3 КОРАБЛЬ
let ship_3 = new Image();
ship_3.src = 'Resources/PlayerShips/playerShip3_blue.png';
ship_3.onload = () => context.drawImage(ship_3,60,670, 66, 50);
context.fillText('ЗД 150',28,680);
context.fillText('СК 50',28,692);
context.fillText('УР 100',28,704);
let radio_3 = document.createElement("INPUT");
radio_3.type = 'radio';
radio_3.name = 'player_ship';
radio_3.style = "position:absolute;left:85px;top:730px; width: 12px; height: 12px";
div.appendChild(radio_3);
let span_3 = document.createElement("SPAN");
span_3.style= "position:absolute;left:60px;top:668px; width: 70px; height: 55px";
div.appendChild(span_3);
span_3.onclick = () => radio_3.checked = true;

// 4 КОРАБЛЬ
let ship_4 = new Image();
ship_4.src = 'Resources/PlayerShips/playerShip4_blue.png';
ship_4.onload = () => context.drawImage(ship_4,180,668, 50, 50);
context.fillText('ЗД 50',138,678);
context.fillText('СК 50',138,690);
context.fillText('УР 150',138,702);
let radio_4 = document.createElement("INPUT");
radio_4.type = 'radio';
radio_4.name = 'player_ship';
radio_4.style = "position:absolute;left:197px;top:730px; width: 12px; height: 12px";
div.appendChild(radio_4);
let span_4 = document.createElement("SPAN");
span_4.style= "position:absolute;left:180px;top:668px; width: 53px; height: 53px";
div.appendChild(span_4);
span_4.onclick = () => radio_4.checked = true;

// ИНСТРУКЦИЯ
let instruction = new Image();
instruction.src = 'Resources/Menu/instruction.png';
instruction.onload = () => context.drawImage(instruction,250,520,350,233);

// ЗАПУСК ИГРЫ
button_start.onclick = function startGame(){
	button_start.remove();
	logo.remove();
	if (input_name.value != "") player_name = input_name.value;
	input_name.remove();
	radio_1.remove();
	if (radio_2.checked == true) {
		selected_ship = 1;
		player_health *= 0.5;
		player_speed *= 1.5;
		player_damage *= 0.5;
	}
	radio_2.remove();
	if (radio_3.checked == true) {
		selected_ship = 2;
		player_health *= 1.5; 
		player_speed *= 0.5;

	}
	radio_3.remove();
	if (radio_4.checked == true) {
		selected_ship = 3;
		player_health *= 0.5;
		player_speed *= 0.5;
		player_width = 50;
		player_damage *= 1.5;
	}
	radio_4.remove();
	span_1.remove();
	span_2.remove();
	span_3.remove();
	span_4.remove();
	if (game_started_once == false) {
		Start();
		game_started_once = true;
	} else {
		pause = false;
		Start();
	}
	button_start.removeEventListener('click',startGame);	
}
};
// ПЕРЕМЕННАЯ ПРОВЕРЯЮЩАЯ ПЕРВЫЙ ЛИ РАЗ ЗАПУСКАЕТСЯ ИГРА
let game_started_once = false;

// РЕСУРС МУЗЫКИ ИГРЫ
let gameMusic = document.createElement('audio');
gameMusic.src = "Resources/Audios/GameMusic.mp3";
gameMusic.volume = 0.1;
gameMusic.loop = true;

// ПЕРЕМЕННАЯ ХРАНЯЩАЯ СОСТОЯНИЕ ПАУЗЫ
let pause = false;

// ПЕРЕМЕННЫЕ СВЯЗАННЫЕ С ИГРОКОМ
let player_name = "Anon";
let selected_ship = 0;
let player_health = 270;
let player_speed = 5;
let player_damage = 100;
let player_width = 66;
let player_height = 50;
let player_x = canvas.width/2-player_width/2;
let player_y = canvas.height/2+240;

// КОЛ-ВО ЖИЗНЕЙ
let healthBar = 0;

// ПЕРЕМЕННЫЕ СВЯЗАННЫЕ С ВРАГАМИ
let enemy_x = 80;
let enemy_y = 20;
let enemy_width = 53;
let enemy_height = 40;
let new_enemy_x = enemy_x;
let new_enemy_y = enemy_y;
let enemy_speed = 1; 

// РЕСУРС КОРАБЛЕЙ ВРАГОВ
let enemy = new Image();
enemy.src = "Resources/Enemy/Enemy1.png";

// РЕСУРС РАКЕТЫ ВРАГОВ
let enemy_bullet = new Image();
enemy_bullet.src = "Resources/Enemy/enemy_rocket.png";

// РЕСУРС ЛАЗЕР ИГРОКА
let player_bullet = new Image();
player_bullet.src = "Resources/PlayerShips/player_laser.png";

// РЕСУРС ВЗРЫВА ВРАГА
let blow = document.createElement('img');
blow.src = "Resources/Gifs/blow.gif";

// РЕСУРС ВЗРЫВА РАКЕТЫ ВРАГА
let enemy_rocket_blow = document.createElement('img');
enemy_rocket_blow.src = "Resources/Gifs/enemy_rocket_blow.gif";

// РЕСУРС ВЗРЫВА ИГРОКА
let blowPlayer = document.createElement('img');
blowPlayer.src = 'Resources/Gifs/playerDead.gif';

// РЕСУРС ПОПАДАНИЯ ИГРОКА
let laser_hit = document.createElement('img');
laser_hit.src = 'Resources/Gifs/laser_hit.gif';

// РЕСУРС ЗВУКА ВЫСТРЕЛА ИГРОКА
let playerShotSound = [];
for (let i = 0; i < 2; i++){ 
playerShotSound[i] = document.createElement('audio');
playerShotSound[i].src = "Resources/Audios/PlayerShotSound.wav";
playerShotSound[i].volume = 0.05;
}
// СОЗДАНИЕ ВРАГОВ
let enemies = [];
while (enemies.length < 28){
	enemies.push(enemy);
}
// ЗДОРОВЬЕ ВРАГОВ
let enemies_health = [];
for (let i = 0; i < enemies.length; i++){
	enemies_health.push(150);
}
// КАКОЙ СЕЙЧАС ВРАГ
let current_enemy = 0;

// СКОЛЬКО УБИТО ВРАГОВ
let dead_enemies = 0;

// РАКЕТЫ ВРАГОВ
let enemy_bullets = [];

// ВЕРОЯТНОСТЬ ВЫСТРЕЛА ВРАГА
let enemy_fire_chance = 0.9967; 

// ЛАЗЕР ИГРОКА
let player_bullets = [];

// ВРЕМЯ (ДЛЯ ЗАДЕРЖКИ ВЫСТРЕЛА)
let time = 0;

// ЗВЁЗДЫ НА ФОНЕ
let stars = [];

// ОЧКИ
let score = 0;

// ХРАНЕНИЕ ЗНАЧЕНИЙ ОБРАБОТЧИКА СОБЫТИЙ
let pressed_key = {};

// РЕСУРС АВАТАР ИГРОКА
let Avatars = ['Resources/PlayerAvatars/playerAvatar1_blue.png', 'Resources/PlayerAvatars/playerAvatar2_blue.png', 'Resources/PlayerAvatars/playerAvatar3_blue.png', 'Resources/PlayerAvatars/playerAvatar4_blue.png'];
let Avatar = new Image();

// РЕСУРС КОРАБЛЬ ИГРОКА
let Ships = ['Resources/PlayerShips/playerShip1_blue.png', 'Resources/PlayerShips/playerShip2_blue.png', 'Resources/PlayerShips/playerShip3_blue.png', 'Resources/PlayerShips/playerShip4_blue.png']
let player_ship = new Image();

// ПЕРЕМЕННАЯ КУДА БУДЕТ ЗАПИСАНА ФУНКЦИЯ ОБНОВЛЕНИЯ ИГРЫ
let GameUpdate;

// ВХОД В ИГРУ
function Start(){
// ВКЛЮЧЕНИЕ МУЗЫКИ
gameMusic.play();
// Кнопка паузы
pause_button();
clearInterval(playtime);
seconds = 0;
minutes = 5;
startEndTimer();
GameUpdate = requestAnimationFrame(function setup(){
if (pause == false){
// ДВИЖЕНИЕ ИГРОКА
if (pressed_key[68] && player_x < canvas.width-player_width-7){
	player_x += player_speed;
}
if (pressed_key[65] && player_x > 7){
	player_x += -player_speed;
}
// ВЫСТРЕЛ ИГРОКА
if (pressed_key[32]){
	if (time == 0 && player_health > 0){
	player_bullets.push([player_x+player_width/2-3,player_y-6]);
	fire_delay();
}
}
// ОЧИСТКА
context.clearRect(0,0,canvas.width,canvas.height); 

// ЗВЁЗДЫ НА ФОНЕ
createStars(); 
updateStars(); 
refreshStars(); 
drawStars();


// РАКЕТЫ ВРАГОВ
enemyBulletsUpdate();
// ВЫСТРЕЛЫ ИГРОКА
playerBulletsUpdate();

if (dead_enemies != enemies.length){
// ПРОВЕРКА НА ЖИВНОСТЬ КОЛОН ВРАГОВ НУ КАК ЭТО ЕЩЁ МОЖНО НАЗВАТЬ =(
CheckEnemyColumns(dead_enemies_in_columns);

// ВРАГИ
DrawEnemies(enemies);

// ПЕРЕМЕЩЕНИЕ ВРАГОВ
setNextCoordinatesOfEnemies(new_enemy_x,new_enemy_y);
} else { 
	gameMusic.pause();
	boss_theme.play();
	drawBOSS();
	bossHealthBar();
	bossHealth();
	// ОБНОВЛЕНИЕ БОМБ БОССА
	bossBombsUpdate();
	bossShotsUpdate();
}

// ЛИНИЯ
context.beginPath();
context.setLineDash([5, 5]);
context.moveTo(2, 700);
context.lineTo(600, 700);
context.strokeStyle = 'yellow';
context.stroke();

// СЧЁТ
Score();

// ВРЕМЯ ИГРЫ
PlayTime();
// ПЛАШКА ЗДОРОВЬЯ
HealthBar();

if (player_health > 0){
// ИГРОК
Player(player_ship,player_x,player_y,player_width,player_height);
// ЗДОРОВЬЕ ИГРОКА
Health();
} else {
		CheckGame('player_dead');
		pause = true;
		blowPlayer.style = "position:absolute;left:" + (player_x-70) + "px;top:" + (player_y-100) + "px; width: 200px; height: 200px";
		div.appendChild(blowPlayer);
		setTimeout(function(){ 
		blowPlayer.remove();
		blowPlayer = document.createElement('img');
		blowPlayer.src = 'Resources/Gifs/playerDead.gif';
		},1100);
}
// АВАТАРКА ИГРОКА
Avatar.src = Avatars[selected_ship];
context.drawImage(Avatar,8,718);
// НИК ИГРОКА
context.fillStyle = 'DarkOrange';
context.font = '24pt serif';
context.fillText(player_name, 48,740);

} // КОНЕЦ ПРОВЕРКИ ПАУЗЫ

GameUpdate = requestAnimationFrame(setup);

}); // КОНЕЦ СЭТАПА
}

// ПЛАШКА ЗДОРОВЬЯ
let HealthBar = function(){
	if (healthBar == 0) healthBar = player_health;
	context.fillStyle = 'darkred';
	context.fillRect(45,714,healthBar,34);
}

// ЗДОРОВЬЕ
let Health = function(){
	context.fillStyle = 'yellow';
	context.fillRect(45,714,player_health,34);
} 

// СЧЁТ
let Score = function(){
	context.fillStyle = 'yellow';
	context.font = '23pt serif';
	context.fillText('Счёт: ' + score,455,740);
}
// СЕКУНДЫ И МИНУТЫ ДЛЯ ПОДСЧЁТА ВРЕМЕНИ ИГРЫ
let seconds = 0;
let minutes = 5;
// ПЕРЕМЕННАЯ ДЛЯ ЗАПИСИ ФУНКЦИИ ТАЙМЕРА
let playtime;
// ТАЙМЕР ВРЕМЕНИ ДО КОНЦА ИГРЫ
function startEndTimer(){
playtime = setInterval(function(){
	if (pause == false){
	if (seconds == 0 && minutes != 0) {
		seconds = 60;
		minutes--;
	}
	seconds--;
} else {
	clearInterval(playtime);
}
},1000);
}
// ДОБАВЛЕНИЕ НУЛЯ К ВРЕМЕНИ ЕСЛИ ОНО МЕНЬШЕ 10
let addZero = function(time){
	if (time < 10) return ('0' + time);
	else return time;
}

// ВРЕМЯ ИГРЫ
let PlayTime = function(){
	context.fillStyle = 'yellow';
	context.font = '14pt serif';
	if (minutes == 0 && seconds == 0) player_health = 0;
	context.fillText('Осталось: ' + addZero(minutes) +':'+ addZero(seconds),canvas.width/2-58,18);

}

// ИГРОК
let Player = function(ship,x,y,width,height){
	player_ship.src = Ships[selected_ship];
	context.drawImage(ship,x,y,width,height);
}



// ОБРАБОТЧИК НАЖАТИЯ
onkeydown = onkeyup = function(event){
	pressed_key[event.keyCode] = event.type == 'keydown';
}

// СОЗДАНИЕ ЗВЁЗД
function createStars() { 
  if(stars.length < 100) { 
    stars.push({ 
      x: Math.random()*canvas.width, 
      y: 0, 
      speed: 2+Math.random()*5, 
      radius: 0.1+Math.random()*1, 
      color: "yellow", 
    }); 
  } 
}
// ОБНОВЛЕНИЕ ЗВЁЗД
function updateStars() { 
  for(let i in stars) { 
    let star = stars[i]; 
    star.y += star.speed; 
  } 
}
// СБРОС ЗВЁЗД
function refreshStars() { 
  for(let i in stars) { 
    let star = stars[i]; 
    if(star.y > canvas.height-60) { 
      star.y = 0; 
    } 
  } 
}
// РИСОВАНИЕ ЗВЁЗД
function drawStars() { 
  let context = canvas.getContext('2d'); 
  for(let i in stars) { 
    let star = stars[i]; 
    context.beginPath(); 
    context.arc(star.x,star.y, star.radius, 0, Math.PI*2); 
    context.closePath(); 
    context.fillStyle = star.color; 
    context.fill(); 
  } 
}

// МАКСИМАЛЬНЫЙ И МИНИМАЛЬНЫЙ Х ДЛЯ ВРАГОВ
let max_enemy_x = 170;
let min_enemy_x = 0;
// МАССИВ ДЛЯ ОПРЕДЕЛЕНИЯ УБИТОГО СТОЛБЦА ВРАГОВ
let dead_enemies_in_columns = [0,0,0,0,0,0,0];
function CheckEnemyColumns(array){
		// 7 СТОЛБЕЦ
		if (array[6] == 4) {
			max_enemy_x += enemy_width+7;
			array[6] = 'dead';
		}
		// 6 СТОЛБЕЦ
		if (array[5] == 4 && array[6] == 'dead') {
			max_enemy_x += enemy_width+10;
			array[5] = 'dead';
		}
		if (array[5] == 4 && array[4] == 'dead' && array[3] == 'dead' && array[2] == 'dead' && array[1] == 'dead' && array[0] == 'dead')
		{
			min_enemy_x += -enemy_width-10;
			array[5] = 'dead';	
		}
		// 5 СТОЛБЕЦ
		if (array[4] == 4 && array[5] == 'dead') {
			max_enemy_x += enemy_width+10;
			array[4] = 'dead';
		}
		if (array[4] == 4 && array[3] == 'dead' && array[2] == 'dead' && array[1] == 'dead' && array[0] == 'dead')
		{
			min_enemy_x += -enemy_width-10;
			array[4] = 'dead';	
		}
		// 3 СТОЛБЕЦ
		if (array[2] == 4 && array[1] == 'dead') {
			min_enemy_x += -enemy_width-10;
			array[2] = 'dead';
		}
		if (array[2] == 4 && array[3] == 'dead' && array[4] == 'dead' && array[5] == 'dead' && array[6] == 'dead')
		{
			max_enemy_x += enemy_width+10;
			array[2] = 'dead';	
		}
		// 2 СТОЛБЕЦ
		if (array[1] == 4 && array[0] == 'dead') {
			min_enemy_x += -enemy_width-10;
			array[1] = 'dead';
		}
		if (array[1] == 4 && array[2] == 'dead' && array[3] == 'dead' && array[4] == 'dead' && array[5] == 'dead' && array[6] == 'dead')
		{
			max_enemy_x += enemy_width+10;
			array[1] = 'dead';	
		}
		// 1 СТОЛБЕЦ
		if (array[0] == 4) {
			min_enemy_x += -enemy_width-7;
			array[0] = 'dead';
		}
		// 4 СТОЛБЕЦ
		if (array[3] == 4 && array[0] == 'dead' && array[1] == 'dead' && array[2] == 'dead' && array[4] != 'dead'){
			min_enemy_x += -enemy_width-10;
			array[3] = 'dead';
		}
		if (array[3] == 4 && array[2] != 'dead' && array[4] == 'dead' && array[5] == 'dead' && array[6] == 'dead'){
			max_enemy_x += enemy_width+10;
			array[3] = 'dead';
		}
}

// МАССИВ ЗВУКОВ ВЗРЫВА ВРАГА
let kill_enemy = [];

// МАССИВ ХРАНЕНИЯ ЗВУКОВ ВЗРЫВА ВРАГА)
let kills_enemies = [];
for (let i = 0; i < enemies.length; i++){
	// ЗВУК ВЗРЫВА ВРАГА
	kill_enemy[i] = document.createElement('audio');
	kill_enemy[i].src = "Resources/Audios/kill_enemy.wav";
	kill_enemy[i].volume = 0.2;
}

// ДВИЖЕНИЕ ВРАГОВ
function DrawEnemies(array){
		for (let i = 0; i < array.length/7; i++){
		for (let j = 0; j < 7;j++){
		for (let p_bullet = 0; p_bullet < player_bullets.length; p_bullet++){
			if (player_bullets[p_bullet][1] != 0){
				if (player_bullets[p_bullet][0] >= enemy_x && player_bullets[p_bullet][0] <= enemy_x+enemy_width
					&& player_bullets[p_bullet][1] >= enemy_y && player_bullets[p_bullet][1] <= enemy_y+enemy_height-10){
					if (enemies_health[current_enemy] > 0){
					enemies_health[current_enemy] += -player_damage;
					if (enemies_health[current_enemy] <= 0) {
						enemy_speed *= 1.04;
						dead_enemies++;
						score+=50;
						dead_enemies_in_columns[j]++;
						kill_enemy[current_enemy].play();
						blow.style = "position:absolute;left:" + (enemy_x) + "px;top:" + (enemy_y) + "px; width: 50px; height: 50px";
						div.appendChild(blow);
						setTimeout(function(){ 
							blow.remove();
							blow = document.createElement('img');
							blow.src = 'Resources/Gifs/blow.gif';
						},380);
					};
					laser_hit.style = "position:absolute;left:" + (player_bullets[p_bullet][0]) + "px;top:" + (player_bullets[p_bullet][1]-15) + "px; width: 30px; height: 30px";
					div.appendChild(laser_hit);
					setTimeout(function(){ 
							laser_hit.remove();
							laser_hit = document.createElement('img');
							laser_hit.src = 'Resources/Gifs/laser_hit.gif';
					},200);
					player_bullets[p_bullet][1] = 0;
				}
			}
		}
	}
		if (enemies_health[current_enemy] > 0){
			if (enemy_y > (player_y-player_height+15)) player_health = 0;
		context.drawImage(array[i],enemy_x,enemy_y,enemy_width,enemy_height);
		let fire = Math.random();
		if (fire > enemy_fire_chance){
			enemy_bullets.push([enemy_x+enemy_width/2,enemy_y+enemy_height/2]);
		}
		}
		current_enemy++;
		enemy_x += enemy_width+10;
		}
		enemy_y += enemy_height+10;
		enemy_x = new_enemy_x;
	
	}
	current_enemy = 0;
	if (new_enemy_x >= max_enemy_x || new_enemy_x <= min_enemy_x) {
		enemy_speed = -enemy_speed;
		new_enemy_y+=10;
	}
	new_enemy_x += enemy_speed;
} 
// СЛЕДУЮЩИЙ ШАГ ВРАГОВ
function setNextCoordinatesOfEnemies(x,y){
	enemy_x = x;
	enemy_y = y;
}
// РАКЕТЫ ВРАГОВ
function enemyBulletsUpdate(){
	for (let i = 0; i < enemy_bullets.length; i++){
		if (enemy_bullets[i][1] < 685) {
		context.drawImage(enemy_bullet,enemy_bullets[i][0],enemy_bullets[i][1],7,21);
		enemy_bullets[i][1]+= 8;
			if (enemy_bullets[i][0] >= player_x && enemy_bullets[i][0] <= player_x+player_width
			&& enemy_bullets[i][1] >= player_y && enemy_bullets[i][1] <= player_y+player_height){
				if (player_health > 0){
					enemy_rocket_blow.style = "position:absolute;left:" + (enemy_bullets[i][0]-20) + "px;top:" + (enemy_bullets[i][1]) + "px; width: 50px; height: 50px";
						div.appendChild(enemy_rocket_blow);
						setTimeout(function(){ 
							enemy_rocket_blow.remove();
							enemy_rocket_blow = document.createElement('img');
							enemy_rocket_blow.src = 'Resources/Gifs/enemy_rocket_blow.gif';
					},400);
					player_health -= 135;
					enemy_bullets[i][1]+=685;
				}
			}
		}
	}
}


// ВЫСТРЕЛЫ ИГРОКА
function playerBulletsUpdate(){
	for (let i = 0; i < player_bullets.length; i++){
		if (player_bullets[i][1] > 0){
			context.drawImage(player_bullet,player_bullets[i][0],player_bullets[i][1],6,17);			
			player_bullets[i][1]-= 4;
		}
	}
}

// ЗАДЕРЖКА ВЫСТРЕЛА ИГРОКА
function fire_delay(){
	playerShotSound[0].play();
	if (playerShotSound[0].currentTime != 0) playerShotSound[1].play();
	let timer = setInterval(function(){
		time++;
		if (time == 95){
			time = 0;
		clearInterval(timer);
	}
	},0);

}

// РЕСУРСЫ ДЛЯ КНОПКИ ПАУЗЫ
let pause_btn = document.createElement('img');
pause_btn.src = "Resources/Buttons/Pause.png";
// ЭВЕНТЫ НА КНОПКУ ПАУЗЫ
pause_btn.addEventListener('click', function togglePause(){
		if (pause == false){
			pause_btn.src = "Resources/Buttons/Play.png";
			clearInterval(playtime);
			pause = true;
		} 
		else {
			pause = false;
			clearInterval(playtime);
			startEndTimer();
			pause_btn.src = "Resources/Buttons/Pause.png";
		}
	});
	pause_btn.addEventListener('mouseover', function(){
		if (pause == false){
			pause_btn.src = "Resources/Buttons/PauseHover.png";
		} 
		else {
			pause_btn.src = "Resources/Buttons/PlayHover.png";
		}
	});
	pause_btn.addEventListener('mouseleave', function(){
		if (pause == false){
			pause_btn.src = "Resources/Buttons/Pause.png";
		} 
		else {
			pause_btn.src = "Resources/Buttons/Play.png";
		}
	});	



// БЛЮР И ФОКУС ВКЛАДКИ С ИГРОЙ
window.addEventListener('blur', function(){
	if (pause == false){
			pause_btn.src = "Resources/Buttons/Play.png";
			clearInterval(playtime);
			pause = true;
			pressed_key = {};
		} 
});

window.addEventListener('focus', function(){
	if (pause == true){
			pause = false;
			clearInterval(playtime);
			startEndTimer();
			pause_btn.src = "Resources/Buttons/Pause.png";
		}
});

// КНОПКА ПАУЗЫ
function pause_button(){
	pause_btn.style= "position:absolute;left:" + (canvas.width-30) + "px;top:6px; width: 30px; height: 30px";
	div.appendChild(pause_btn);
}


// РЕСУРС ПЛАШКА ИГРА ОКОНЧЕНА
let GameOver = new Image();
GameOver.src = "Resources/GameEndStuff/GameOver.png";
// РЕСУРС ПЛАШКА ПОБЕДА
let GameWin = new Image();
GameWin.src = "Resources/GameEndStuff/Win.png";
// РЕСУРС КНОПКА РЕСТАРТА
let restart_btn = document.createElement('img');
restart_btn.src = "Resources/Buttons/Restart.png"; 
// СОБЫТИЯ НА КНОПКУ РЕСТАРТА
restart_btn.addEventListener('click', Restart);
restart_btn.addEventListener('mouseover', () => restart_btn.src = "Resources/Buttons/RestartHover.png");
restart_btn.addEventListener('mouseleave', () => restart_btn.src = "Resources/Buttons/Restart.png");


// РЕСУРС КНОПКА МЕНЮ
let menu_btn = document.createElement('img');
menu_btn.src = "Resources/Buttons/Menu.png";
// СОБЫТИЯ НА КНОПКУ МЕНЮ
menu_btn.addEventListener('click', toMenu);
menu_btn.addEventListener('mouseover', () => menu_btn.src = "Resources/Buttons/MenuHover.png");
menu_btn.addEventListener('mouseleave', () => menu_btn.src = "Resources/Buttons/Menu.png");



// РЕСУРС ЗВУКА ПОБЕДЫ
let winSound = document.createElement('audio');
winSound.src = 'Resources/Audios/GameWin.wav';
winSound.volume = 0.3;

// РЕСУРС ЗВУКА ПОБЕДЫ
let gameOverSound = document.createElement('audio');
gameOverSound.src = 'Resources/Audios/GameOverSound.wav';
gameOverSound.volume = 0.3;

// РЕСУРС ЗВУКА СМЕРТИ ИГРОКА
let playerDeadSound = [];
for (let i = 0; i < 2; i++){
playerDeadSound[i] = document.createElement('audio');
playerDeadSound[i].src = "Resources/Audios/PlayerDeadSound.wav";
playerDeadSound[i].volume = 0.1;
}
// ПРОВЕРКА СОСТОЯНИЯ ИГРЫ
function CheckGame(state){
	restart_btn.style= "position:absolute;left:" + (canvas.width/2-100) + "px;top:" + (canvas.height/2-5) + "px;width:80px;height:80px;";
	div.appendChild(restart_btn);

	menu_btn.style= "position:absolute;left:" + (canvas.width/2-25) + "px;top:" + (canvas.height/2-5) + "px;width:160px;height:80px;";
	div.appendChild(menu_btn);

	if (state == 'player_dead'){
	context.drawImage(GameOver, canvas.width/2-200, canvas.height/2-100);
	playerDeadSound[0].play();
	if (playerDeadSound[0].currentTime != 0) playerDeadSound[1].play();
	gameOverSound.play();
	if (boss_in_game == true) setTimeout(() => boss_when_player_dead.play(),1000);
	}
	if (state == 'player_win'){
	context.drawImage(GameWin, canvas.width/2-200, canvas.height/2-100);
	winSound.play();
	}
	pause_btn.src = "Resources/Buttons/Pause.png";
	pause_btn.remove();
}

// РЕСТАРТ ИГРЫ
function Restart(){
	refreshGame();
	boss_theme.pause();
	let healthes = {0: 1,1: 0.5,2: 1.5,3: 0.5}
	player_health = 270 * healthes[selected_ship];

	if (selected_ship != 3) {
	player_width = 66;} else{
		player_width = 50;
	}
	pause_button();
	pause = false;
	clearInterval(playtime);
	startEndTimer();
}

// ПЕРЕХОД ОБРАТНО В МЕНЮ
function toMenu(){
	refreshGame();
	gameMusic.pause();
	boss_theme.pause();
	selected_ship = 0;
	player_name = 'Anon';
	player_health = 270;
	player_width = 66;
	player_speed = 5;
	player_damage = 100;
	cancelAnimationFrame(GameUpdate);
	Menu();
}

// >>>>>>>>>>>>>> ЗАНУЛЕНИЕ ВСЕХ ЗНАЧИМЫХ ПЕРЕМЕННЫХ <<<<<<<<<<<<
function refreshGame(){
	// УДАЛЕНИЕ КНОПКИ РЕСТАРТ И МЕНЮ
	restart_btn.src="Resources/Buttons/Restart.png";
	restart_btn.remove();
	menu_btn.src="Resources/Buttons/Menu.png";
	menu_btn.remove();

	// ОЧИСТКА КАНВАСА
	context.clearRect(0,0,canvas.width,canvas.height);
	// ОЧИСТКА ОТ БОМБ БОССА (КОСТЫЛЬ)
	let bombs = document.querySelectorAll('img');
	for (let i = 0; i < bombs.length;i++){
		bombs[i].remove();
	}
	// ПЕРЕМЕННЫЕ СВЯЗАННЫЕ С ИГРОКОМ
	healthBar = 0;
	player_x = canvas.width/2-player_width/2;
	player_y = canvas.height/2+240;
	// ПЕРЕМЕННЫЕ СВЯЗАННЫЕ С ВРАГАМИ
	enemy_x = 80;
	enemy_y = 20;
	enemy_width = 53;
	enemy_height = 40;
	new_enemy_x = enemy_x;
	new_enemy_y = enemy_y;
	enemy_speed = 1;
	// СОЗДАНИЕ ВРАГОВ
	enemies = [];
	while (enemies.length < 28){
		enemies.push(enemy);
	}
	// ЗДОРОВЬЕ ВРАГОВ
	enemies_health = [];
	for (let i = 0; i < enemies.length; i++){
		enemies_health.push(150);
	}
	// КАКОЙ СЕЙЧАС ВРАГ
	current_enemy = 0;
	// ВРАГОВ УБИТО
	dead_enemies = 0;
	// МАКСИМАЛЬНЫЙ И МИНИМАЛЬНЫЙ Х ДЛЯ ВРАГОВ
	max_enemy_x = 170;
	min_enemy_x = 0;
	// МАССИВ ДЛЯ ОПРЕДЕЛЕНИЯ УБИТОГО СТОЛБЦА ВРАГОВ
	dead_enemies_in_columns = [0,0,0,0,0,0,0];
	// РАКЕТЫ ВРАГОВ
	enemy_bullets = [];
	// ЛАЗЕР ИГРОКА
	player_bullets = [];
	// ЗВЁЗДЫ НА ФОНЕ
	stars = [];
	// ОЧКИ
	score = 0;
	// СЕКУНДЫ И МИНУТЫ ДЛЯ ПОДСЧЁТА ВРЕМЕНИ ИГРЫ
	seconds = 0;
	minutes = 5;

	// ОТКАТ МУЗЫКИ
	gameMusic.currentTime = 0;
	boss_theme.currentTime = 0;
	// ПЕРЕМЕННЫЕ БОССА
	boss_in_game = false;
	boss_dir = 1;
	boss_health = 0;
	boss_health_bar = 1;
	boss_x = -2200;
	boss_y = 70;
	boss_in_game = false;
	boss_dir = 1;
	boss_first_show = false;
	boss_bombs = [];
	boss_fire_chance = 0;
	boss_can_fire = true;
	boss_shots = [];
	machinegun_ready = false;
	frazi_bossa = [0,0,0];
	}

let boss = new Image();
boss.src = "Resources/Enemy/BOSS.png";
// ФРАЗЫ БОССА
let kirov_reporting = document.createElement('audio');
kirov_reporting.src = "Resources/Audios/kirov_reporting.mp3";
kirov_reporting.volume = 1;
let boss_join_game = document.createElement('audio');
boss_join_game.src = "Resources/Audios/boss_in_game.mp3";
boss_join_game.volume = 1;
let boss_when_player_dead = document.createElement('audio');
boss_when_player_dead.src = "Resources/Audios/boss_when_player_dead.mp3";
boss_when_player_dead.volume = 1;
let boss_fraza1 = document.createElement('audio');
boss_fraza1.src = "Resources/Audios/boss_fraza1.mp3";
boss_fraza1.volume = 1;
let boss_fraza2 = document.createElement('audio');
boss_fraza2.src = "Resources/Audios/boss_fraza2.mp3";
boss_fraza2.volume = 1;
let boss_fraza3 = document.createElement('audio');
boss_fraza3.src = "Resources/Audios/boss_fraza3.mp3";
boss_fraza3.volume = 1;
let boss_fraza4 = document.createElement('audio');
boss_fraza4.src = "Resources/Audios/boss_fraza4.mp3";
boss_fraza4.volume = 1;
let boss_fraza5 = document.createElement('audio');
boss_fraza5.src = "Resources/Audios/boss_fraza5.mp3";
boss_fraza5.volume = 1;
let boss_fraza6 = document.createElement('audio');
boss_fraza6.src = "Resources/Audios/boss_fraza6.mp3";
boss_fraza6.volume = 1;

let frazi_bossa = [0,0,0];


let boss_x = -2200;
let boss_y = 70;
let boss_in_game = false;
let boss_dir = 1;
let boss_first_show = false;
function drawBOSS(){
	context.drawImage(boss, boss_x,boss_y,600,200);
	if (boss_health > 500/2 || boss_in_game != true || boss_first_show != true){
	if (boss_in_game != true){
		boss_x+=boss_dir;
		if (boss_x == -600) {
			kirov_reporting.play();
			boss_in_game = true;
		}
	}
	if (boss_x < -100 && boss_in_game == true && boss_first_show != true){
		boss_x+=boss_dir;
		if (boss_x == -300) boss_join_game.play(); 
	}
	if (boss_x < 0 && boss_x >= -100 && boss_first_show != true){
		boss_x+=boss_dir*0.5;

	}
	if (boss_x >= -1 && boss_first_show != true){
		boss_first_show = true;
	}
	if (boss_in_game == true && boss_first_show == true){
		if (boss_x > -170 && boss_x < 380){
			boss_fire_chance = Math.random();
			if (boss_fire_chance > 0.95 && boss_can_fire == true) {
				bossBombGo();
				boss_can_fire = false;
				setTimeout(() => boss_can_fire = true, 1500);
			}
		}
		if (boss_x < -300 || boss_x > 400){
		boss_dir = - boss_dir;
		}
		boss_x+=boss_dir;
	}
	}
	if (boss_health <= 500/2 && boss_in_game == true && boss_first_show == true){
		if (frazi_bossa[0] == 0) {boss_fraza1.play();frazi_bossa[0] = 1;}
		if (boss_health < 150 && frazi_bossa[1] == 0) {boss_fraza5.play(); frazi_bossa[1] = 1;}
		if (boss_health < 20 && frazi_bossa[2] == 0) {boss_fraza6.play(); frazi_bossa[2] = 1;}
		boss_dir = 1;
		if (boss_x <= 640){
			boss_x+=boss_dir*2;
			if (boss_x >= -640 && boss_x < 100 && machinegun_ready == true) {
				bossMachineGun();
				machinegun_ready = false;
				setTimeout(() => machinegun_ready = true, 700);
			}
		}
		if (boss_x > -180 && boss_x < 380){
			boss_fire_chance = Math.random();
			if (boss_fire_chance > 0.99 && boss_can_fire == true) {
				bossBombGo();
				boss_can_fire = false;
				setTimeout(() => boss_can_fire = true, 1000);
			} 
		}
		if (boss_x >= 640){
			boss_x=-640;
			let rand_y = Math.floor(Math.random() * 50); 
			boss_y+=rand_y;
			machinegun_ready = true;
		}
		if ((boss_y+200) >= player_y && boss_x >= (player_x-580)) player_health = 0;
	}
	for (let p_bullet = 0; p_bullet < player_bullets.length; p_bullet++){
				if(player_bullets[p_bullet][1] < canvas.height){
				if (player_bullets[p_bullet][0] >= boss_x && player_bullets[p_bullet][0] <= boss_x+600
					&& player_bullets[p_bullet][1] >= boss_y && player_bullets[p_bullet][1] <= boss_y+100)
				{ 
					if (boss_health > 0){
					boss_health-=3; 
					laser_hit.style = "position:absolute;left:" + (player_bullets[p_bullet][0]) + "px;top:" + (player_bullets[p_bullet][1]-15) + "px; width: 30px; height: 30px";
					div.appendChild(laser_hit);
					setTimeout(function(){ 
							laser_hit.remove();
							laser_hit = document.createElement('img');
							laser_hit.src = 'Resources/Gifs/laser_hit.gif';
					},200);
					player_bullets[p_bullet][1] = 0;
				}
				else boss_health = 0;
			}
		}
	}
	if (boss_health <= 0 && boss_in_game == true){
		score+=5000;
		CheckGame('player_win');
		boss_theme.pause();
		let boss_dead = document.createElement('img');
		boss_dead.src = "Resources/Gifs/BOSS_BLOW.gif";
		div.appendChild(boss_dead);
		boss_dead.style = "position: absolute; left: " + boss_x + "px; top: " + boss_y + "px; width: 600px; height: 200px;";
		setTimeout(() => boss_dead.remove(),2000);
		pause = true;
	}
}
let boss_health_bar = 1;
function bossHealthBar(){
	context.fillStyle = "darkred";
	context.fillRect(50,25,boss_health_bar,20);
	if(boss_health_bar < 498) boss_health_bar+=1;
}
let boss_health = 0;
function bossHealth(){
	context.fillStyle = "yellow";
	context.fillRect(50,25,boss_health,20);
	if (boss_health < 498 && boss_in_game != true) boss_health+=0.5;
}

let boss_bombs = [];

// ПЕРЕМЕННАЯ ДЛЯ ВЗРЫВА БОМБЫ
let bomb_boom = document.createElement('img');
bomb_boom.src = "Resources/Gifs/BOSS_BOMB_BOOM.gif";
let bomb_boom2 = document.createElement('img');
bomb_boom2.src = "Resources/Gifs/BOSS_BOMB_BOOM.gif";
let current_boom = 0;
function bossBombsUpdate(){ 
	for (let bomb = 0; bomb < boss_bombs.length; bomb++){
	if (boss_bombs[bomb][0] != 'dead_bomb'){
	boss_bombs[bomb][0].style="position: absolute; left: " + boss_bombs[bomb][1] + "px; top: " + boss_bombs[bomb][2] + "px; width: 40px; height: 164px;";
	div.appendChild(boss_bombs[bomb][0]);
	boss_bombs[bomb][2]+=2;
	if (boss_bombs[bomb][2] >= 540 || boss_bombs[bomb][1]+20 >= player_x && boss_bombs[bomb][1]+20 <= (player_x+player_width) && boss_bombs[bomb][2]+150 >= player_y && boss_bombs[bomb][2]+150 <= (player_y+player_height)){
		if (boss_bombs[bomb][2] >= 470 && boss_bombs[bomb][2] <= 530) {
			player_health+=-135;
		}
		checkBOOM(boss_bombs[bomb][1],boss_bombs[bomb][2]);
		if (current_boom == 0){
		div.appendChild(bomb_boom);
		bomb_boom.style = "position: absolute; left: "+ (boss_bombs[bomb][1]) +"px; top:"+ (boss_bombs[bomb][2]+80) +"px; width: 80px; height; 80px;";
		setTimeout(function(){
			bomb_boom.remove();
			bomb_boom = document.createElement('img');
			bomb_boom.src = "Resources/Gifs/BOSS_BOMB_BOOM.gif";
		},1000);
		current_boom = 1;
		} else { 
		div.appendChild(bomb_boom2);
		bomb_boom2.style = "position: absolute; left: "+ (boss_bombs[bomb][1]) +"px; top:"+ (boss_bombs[bomb][2]+80) +"px; width: 80px; height; 80px;";
		setTimeout(function(){
			bomb_boom2.remove();
			bomb_boom2 = document.createElement('img');
			bomb_boom2.src = "Resources/Gifs/BOSS_BOMB_BOOM.gif";
		},1000);
		current_boom = 0;			
		}
		boss_bombs[bomb][0].remove();
		boss_bombs[bomb][0] = 'dead_bomb';
		}
	}
}
}
let boss_fire_chance = 0;
let boss_can_fire = true;
function bossBombGo(){
	let bossBomb = document.createElement('img');
	bossBomb.src = "Resources/Gifs/BOSS_BOMB.gif";
	boss_bombs.push([bossBomb,boss_x+170,boss_y+40]);
	if (boss_bombs.length == 8) boss_fraza2.play();
	if (boss_bombs.length == 14) boss_fraza4.play();
	if (boss_bombs.length == 30) boss_fraza3.play();
}
function checkBOOM(x,y){ // РАБОТАЕТ УЖАСНО, НЕТ СИЛ И ВРЕМЕНИ ФИКСИТЬ
if (x+20 >= player_x && x+20 <= player_x+player_width && y+100 >= player_y && y+100 <= player_y+player_height){
	player_health+= -135;
}
}
let boss_shot = new Image();
boss_shot.src = "Resources/Enemy/BOSS_SHOT.png";

let boss_shots = [];
let machinegun_ready = false;
function bossShotsUpdate(){
	for (let shot = 0; shot < boss_shots.length; shot++){
	if (boss_shots[shot][1] < canvas.height-80){
	context.drawImage(boss_shot,boss_shots[shot][0],boss_shots[shot][1]);
	boss_shots[shot][0]+=4;
	boss_shots[shot][1]+=6;
	if (boss_shots[shot][0]+30 >= player_x && boss_shots[shot][0]+30 <= player_x+player_width && boss_shots[shot][1] >= player_y && boss_shots[shot][1] <= player_y+player_height){
		player_health += -135
	}
	}
}
}
function bossMachineGun(){
boss_shots.push([boss_x+400,boss_y+150]);
}

// РЕСУРС МУЗЫКА БОССА
let boss_theme = document.createElement('audio');
boss_theme.src = "Resources/Audios/BOSS_THEME.mp3";
boss_theme.volume = 0.4;
boss_theme.loop = true;
