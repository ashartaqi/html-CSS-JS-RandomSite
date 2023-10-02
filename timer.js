// variables
let timer_hours = document.getElementById('timer-hours')
let timer_minutes = document.getElementById('timer-minutes')
let timer_seconds = document.getElementById('timer-seconds')
let start_timer_btn = document.getElementById('start-timer')
let stop_timer_btn = document.getElementById('stop-timer')
let reset_timer_btn = document.getElementById('reset-button')
let i = 0
let j = 0
let h = 0
let timer_start_secondss = null
let timer_start_minutes = null
let timer_start_hours = null

//functions
function timer_working_seconds() {
    if(i<60){
        i++
        if(i<10){
            timer_seconds.innerText = '0' + i.toString() 
        }
        else{
            timer_seconds.innerText = i
        }
    }
    else{
        i = 0
    }
}
function timer_working_minutes() {
    if(j<60){
        j++
        if(j<10){
            timer_minutes.innerText = '0' + j.toString() 
        }
        else{
            timer_minutes.innerText = j
        }
    }
    else{
        j = 0
    }
}
function timer_working_hours() {
    if(h<10){
        timer_hours.innerText = '0' + h.toString()
        h++ 
    }
    else{
        timer_hours.innerText = h
        h++
    }
}
function timer_starter(){
    timer_start_seconds = setInterval(timer_working_seconds,1000)
    timer_start_minutes = setInterval(timer_working_minutes,60000)
}
function timer_stopper(){
    clearTimeout(timer_start_seconds)
    clearTimeout(timer_start_minutes)
}
function timer_reset(){
    timer_stopper()
    timer_num_reseter()
    timer_seconds.innerText = '00'
    timer_minutes.innerText = '00'
    
}
function timer_num_reseter(){
    i = 0
    j = 0
}

//adding functionalities
start_timer_btn.addEventListener('click', timer_starter)
stop_timer_btn.addEventListener('click',timer_stopper)
reset_timer_btn.addEventListener('click',timer_reset)