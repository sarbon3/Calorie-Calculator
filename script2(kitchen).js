const button = document.querySelector(".btn");
button.addEventListener('click', calculateCal);


let gender = document.querySelector(".gender");
const btnChooseGender = document.querySelector(".chooseGender");
btnChooseGender.addEventListener("click",showGender);
function showGender(e){
    e.preventDefault();
    gender.style.display = "block";
}

let activity = document.querySelector(".activity");
const btnAddActivity = document.querySelector(".addActivity");
btnAddActivity.addEventListener('click',chooseActivity);
function chooseActivity(e){
    e.preventDefault();
    activity.style.display = "block";
}

function calculateCal (){
    //e.preventDefault();
    const height = document.querySelector(".height").value;
    const weight = document.querySelector('.weight').value;
    const age = document.querySelector(".age").value;

    let genderOne = "мужской";
    let genderTwo = "женский";


    let calculateForManUsualCal = ((9.99*weight) + (6.25*height)-(4.92*age)+5)*activity.value;
    let calculateForManDeficit = calculateForManUsualCal - (calculateForManUsualCal*0.15);
    let calculateForManProficit = calculateForManUsualCal+ (calculateForManUsualCal*0.15);

    calculateForManUsualCal = calculateForManUsualCal.toFixed();
    calculateForManDeficit = calculateForManDeficit.toFixed();
    calculateForManProficit = calculateForManProficit.toFixed();

    let calculateForWomUsualCal = ((9.99*weight) + (6.25*height)-(4.92*age)-161)*activity.value;
    let calculateForWomDeficit = calculateForWomUsualCal - (calculateForWomUsualCal*0.15);
    let calculateForWomProficit = calculateForWomUsualCal+ (calculateForWomUsualCal*0.15);

    calculateForWomUsualCal = calculateForWomUsualCal.toFixed();
    calculateForWomDeficit = calculateForWomDeficit.toFixed();
    calculateForWomProficit = calculateForWomProficit.toFixed();

    if ( height === "" || weight === "" || age === "" || gender === "" || activity === ""){
        alert("Заполните строки");
    }
    if(gender.value === genderOne){
        document.querySelector(".usualCal").textContent = calculateForManUsualCal;
        document.querySelector(".deficit").textContent = calculateForManDeficit;
        document.querySelector(".proficit").textContent = calculateForManProficit;
    }
    if(gender.value === genderTwo){
        document.querySelector(".usualCal").textContent = calculateForWomUsualCal;
        document.querySelector(".deficit").textContent = calculateForWomDeficit;
        document.querySelector(".proficit").textContent = calculateForWomProficit;
    }
}    

