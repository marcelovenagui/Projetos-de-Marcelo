let sec = 0
let min = 0 
let hr = 0
let interval

function twodigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    watch()
    interval = setInterval(watch, 1000)
}


function pause(){
    clearInterval(interval)
}


function clean(){
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('watch').innerText = '00:00:00'
}

function watch(){
    sec++
    document.getElementById('watch').innerText = twodigits(hr)+':'+twodigits(min) +':' + twodigits(sec)
    
    if(sec == 60){
        min++
        sec = 0
        if(min==60){
            min=0
            hr++
        }
    }
}