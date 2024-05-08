const male=document.getElementById("gender1");
const female=document.getElementById("gender2");

const height=document.getElementById("height");
const weight=document.getElementById("weight");
const age=document.getElementById("age");

const display=document.getElementById("display");
const result=document.getElementById("bmi-result")


// bmi formula


function bmicalculater(){
    let bmi=(weight.value/(height.value**2));
    display.value= bmi;
    if(age.value>2 && age.value<=120){
        if(bmi<18.5) result.innerText="Underweight";
        if(bmi>18.5 && bmi<=24.9) result.innerText="Normal";
        if(bmi>25 && bmi<=29.9) result.innerText="Overweight";
        if(bmi>30 && bmi<=34.9) result.innerText="Obesity class I";
        if(bmi>35 && bmi<=39.9) result.innerText="Obesity class II";
        if(bmi>40) result.innerText="Obesity class III";
    }
    
    
}


// function result(){

//     if(age.value>2 && age.value<=120){
//         if(bmi<18.5) result.innerText="Underweight";
//         if(bmi>18.5 && bmi<=24.9) result.innerText="Normal";
//         if(bmi>25 && bmi<=29.9) result.innerText="Overweight";
//         if(bmi>30 && bmi<=34.9) result.innerText="Obesity class I";
//         if(bmi>35 && bmi<=39.9) result.innerText="Obesity class II";
//         if(bmi>40) result.innerText="Obesity class III";
//     }
// }

// javascripts objects

const arr=[2,4,6,95,56,8];

  let [one, two]=arr;
  console.log(one,two);