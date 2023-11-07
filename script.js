const h = document.querySelectorAll('.h');
const m = document.querySelectorAll('.m');
const s = document.querySelectorAll('.s');
const meri = document.querySelectorAll('.meridian span')
const btntoggle = document.getElementById('btn')

function livetime(){
    var time = new Date();

    hrs = time.getHours();
    min = time.getMinutes();
    sec = time.getSeconds();

    if(hrs>=12){
        hrs=hrs-12;
        meri[0].style.display = 'none'
    }
    else{
        if(hrs==0){
            hrs = 12;
        }
        meri[1].style.display = 'none'
    }

    hrs = hrs<10?'0'+hrs:hrs;
    min = min<10?'0'+min:min;
    sec = sec<10?'0'+sec:sec;

    hrs = hrs.toString();
    min = min.toString();
    sec = sec.toString();

    h[0].innerHTML = hrs[0];
    h[1].innerHTML = hrs[1];
    m[0].innerHTML = min[0];
    m[1].innerHTML = min[1];
    s[0].innerHTML = sec[0];
    s[1].innerHTML = sec[1];
}

setInterval(livetime,1000)

btntoggle.addEventListener('click', theme);

function theme(){
    const cont = document.getElementById('container');
    cont.classList.toggle('dark')
}