'use strict'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let content=document.getElementById('content');
let table=document.createElement('table');
content.appendChild(table);


let names=['Id','Name','Mobile','Email','Age','Tuition'];
let arrOfObj=[];
let count=0;
let min=18;
let max=24;
let total=0;
function Student(email,mobile,tuition){
this.email=email;
this.mobile=mobile;
this.tuition=tuition;
this.age=this.getAge;
arrOfObj.push(this);
}


function header(){
let tr1=document.createElement('tr');
table.appendChild(tr1);
let th1;
for(let i=0; i<names.length;i++){
th1=document.createElement('th');
tr1.appendChild(th1);
th1.textContent=names[i];

}

}
header();


Student.prototype.getAge = function(){
    
return this.age=(getRandomIntInclusive(min,max));
}

Student.prototype.render = function(){
    count++;
let tr2=document.createElement('tr');
table.appendChild(tr2);
let td1=document.createElement('td');
tr2.appendChild(td1);
td1.textContent=count;

let emailInput=document.getElementById('email');
  this.email=emailInput.value;

  let mobileInput=document.getElementById('mobile');
  this.mobile=mobileInput.value;

  let tuitionInput=document.getElementById('tuition');
  this.tuition=tuitionInput.value;

  
this.name=this.email.split(' ');
  let td2=document.createElement('td');
tr2.appendChild(td2);
td2.textContent=this.name[0];

let td4=document.createElement('td');
tr2.appendChild(td4);
td4.textContent=this.mobile;

let td3=document.createElement('td');
tr2.appendChild(td3);
td3.textContent=this.email;



let td5=document.createElement('td');
tr2.appendChild(td5);
td5.textContent=this.age;

let td6=document.createElement('td');
tr2.appendChild(td6);
td6.textContent=this.tuition;
total+=this.tuition;


console.log(this.email);

}

function footer(){


    let total=document.getElementById('total');
    total.textContent=`'Total': ${total}.`

}

let form=document.getElementById('student');
form.addEventListener('submit',clickHere);

function clickHere(event){
    event.preventDefault() 

    let email=event.target.name.value;
    let mobile=event.target.name.value;
    let tuition=event.target.name.value;

    let newStudent= new Student(email,mobile,tuition);
    newStudent.render();
    newStudent.getAge();
   

    setStudent();
    form.removeEventListener('submit',clickHere);
}


function setStudent(){
let save=JSON.stringify(arrOfObj);
localStorage.setItem('saveAll',save);

}

function getStudent(){
    let info=localStorage.getItem('saveAll');
    let saveInfo=JSON.parse(info);
    if(saveInfo){
        arrOfObj=saveInfo;
    }
    else{
        arrOfObj=[];
    }

}
getStudent();