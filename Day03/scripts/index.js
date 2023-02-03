let btn = document.getElementById("btNew")
let input = document.getElementById("inputJob")
btn.addEventListener('click',AddNew) //bắt lấy sự kiện nhấp chuột
console.log(btn)

function AddNew(){
    let jobList = document.getElementById("job-list")
    let job = document.createElement('li')
    job.innerHTML= input.value //thêm giá trị cho li mới
    jobList.appendChild(job) //đưa text ("job") mới từ li vào job-list
    input.value = "";
}
//document.getElementById("btNew").addEventListener("click", AddNew)

let Subbtn = document.getElementById("submitBtn")
console.log(Subbtn)
let getValue = document.getElementById("chieuDai")
console.log(getValue)

function f(n){
    if(n == 1){
        return 1
    }
    else if(n == 2)
    {
        return 2
    }
    else{
        return f(n-1) + f(n - 2)
    }
    /*if(n == 1){
        return 1
    }
    else if(n == 2)
    {
        return 3
    }
    else{
        return f(n-1) + 2*(f(n - 2))
    }*/
}
function getAnswer(){
    let x = parseInt(getValue.value)
    console.log(x)
    let answer = document.getElementById("Answer")
    answer.innerHTML = f(x)
}
Subbtn.addEventListener('click', getAnswer)

/*f(n) la so cach xep 1 duong 2 x N 
xet duong: 2 x (N+2) <=> f(N + 2)*/