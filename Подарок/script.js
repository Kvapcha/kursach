//Автоввод текста 
var i = 0;
var txt = 'Микро справочка разработчика. Изначально это должен был быть подарок , но пока это единственный сайт где мной использвался Bootstrap 4 и думаю я обязан был его выложить в свой гитхаб. ';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}