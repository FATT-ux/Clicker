const mainImg = document.getElementById('IMG');
const COUNT = document.getElementById('count');
const buff = document.getElementById('buffId');

let buffActive = false;
let count = 0;
mainImg.addEventListener('click', function(){  
    if(buffActive == false){
    count ++;
    COUNT.innerText = count;
    } else{
        count = count + 2;
        COUNT.innerHTML = count;
    }

    if (count >= 100){
        mainImg.src = './images/rich-cat.jpeg'
    } 
});

buff.addEventListener('click', function() { 
    if(count < 30){
        alert('У вас нету 30 кликов');
        return
    } else{
        buffActive = true;
        buff.remove();
        alert('Бафф активен')
    }
});