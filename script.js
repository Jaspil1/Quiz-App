//required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector(".header .time_line");

const option_list = document.querySelector(".option_list");

//Start quiz button
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

//exit button
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

//exit button
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 15;
let widthValue = 0;
let startTimerLine

const next_btn = quiz_box.querySelector(".next_btn");

//next_btn click
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    }
    else{
        console.log("Questions completed");
    }
}

//questions option array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    
    let que_tag = '<span>' + questions[index].Number + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].Options[0] + '<span></span></div>'
                     +'<div class="option">' + questions[index].Options[1] + '<span></span></div>'
                     +'<div class="option">' + questions[index].Options[2] + '<span></span></div>'
                     +'<div class="option">' + questions[index].Options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionselected(this)");
        
    }
}

let tickIcon =  '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionselected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answers is incorrect then automatically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
    }
}    

     
    
    //if user selected disable option
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled")
        
    }
}



function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;

}


function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time <9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}



//question list
let questions = [
    {
        Number: 1,
        question: "What's 3+1?",
        answer: "Is 4",
        Options:[
            "Is 9",
            "Is 7",
            "Is 4",
            "Is 2",
        ]
    },
    {
        Number: 2,
        question: "What's 6+3?",
        answer: "Is 9",
        Options:[
            "Is 9",
            "Is 7",
            "Is 4",
            "Is 2",
        ]
    },
    {
        Number: 3,
        question: "What's 4+3?",
        answer: "Is 7",
        Options:[
            "Is 9",
            "Is 7",
            "Is 4",
            "Is 2",
        ]
    },
    {
        Number: 4,
        question: "What's 1+1?",
        answer: "Is 2",
        Options:[
            "Is 9",
            "Is 7",
            "Is 4",
            "Is 2",
        ]
    },
    {
        Number: 5,
        question: "What's 8+1?",
        answer: "Is 9",
        Options:[
            "Is 9",
            "Is 7",
            "Is 4",
            "Is 2",
        ]
    },
]

