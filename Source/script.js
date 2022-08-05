"use strict";

//Variables: 

const circle = document.getElementById('circle')
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circle4 = document.getElementById('circle4');
const circle5 = document.getElementById('circle5');

const mainDiv1 = document.querySelector('.main-div1');
const mainDiv2 = document.querySelector('.main-div2');

const disablePage = document.querySelector('.disable-whole');

// Second Page:
const button = document.querySelector('.button');
const literalP = document.getElementById('you-selected');
let currentRate;

const checkIfSelected = function(){
  if(circle.classList.contains('selected')){
        circle2.classList.remove('selected');
        circle2.classList.add('hoverop');
        circle3.classList.remove('selected');
        circle3.classList.add('hoverop');
        circle4.classList.remove('selected');
        circle4.classList.add('hoverop');
        circle5.classList.remove('selected');
        circle5.classList.add('hoverop');
  }
  }

  const checkIfSelected2 = function(){
    if(circle2.classList.contains('selected')){
          circle.classList.remove('selected');
          circle.classList.add('hoverop');
          circle3.classList.remove('selected');
          circle3.classList.add('hoverop');
          circle4.classList.remove('selected');
          circle4.classList.add('hoverop');
          circle5.classList.remove('selected');
          circle5.classList.add('hoverop');
    }
  }

  const checkIfSelected3 = function(){
    if(circle3.classList.contains('selected')){
          circle.classList.remove('selected');
          circle.classList.add('hoverop');
          circle2.classList.remove('selected');
          circle2.classList.add('hoverop');
          circle4.classList.remove('selected');
          circle4.classList.add('hoverop');
          circle5.classList.remove('selected');
          circle5.classList.add('hoverop');
    }
  }

  const checkIfSelected4 = function(){
    if(circle4.classList.contains('selected')){
          circle.classList.remove('selected');
          circle.classList.add('hoverop');
          circle2.classList.remove('selected');
          circle2.classList.add('hoverop');
          circle3.classList.remove('selected');
          circle3.classList.add('hoverop');
          circle5.classList.remove('selected');
          circle5.classList.add('hoverop');
    }
  }

  const checkIfSelected5 = function(){
    if(circle5.classList.contains('selected')){
          circle.classList.remove('selected');
          circle.classList.add('hoverop');
          circle2.classList.remove('selected');
          circle2.classList.add('hoverop');
          circle3.classList.remove('selected');
          circle3.classList.add('hoverop');
          circle4.classList.remove('selected');
          circle4.classList.add('hoverop');
    }
  }


circle.addEventListener('click', function(){
   circle.classList.add('selected');
   circle.classList.remove('hoverop');
   checkIfSelected();
   currentRate = 1;
   
 });
circle2.addEventListener('click', function(){
  circle2.classList.add('selected');
  circle2.classList.remove('hoverop');
  checkIfSelected2();
  currentRate = 2;
  

});
circle3.addEventListener('click', function(){
   circle3.classList.add('selected');
  circle3.classList.remove('hoverop');
  checkIfSelected3();
  currentRate = 3;
  

 });
 circle4.addEventListener('click', function(){
   circle4.classList.add('selected');
   circle4.classList.remove('hoverop');
   checkIfSelected4();
   currentRate = 4;
   

 });
 circle5.addEventListener('click', function(){
   circle5.classList.add('selected');
   circle5.classList.remove('hoverop');
   checkIfSelected5();
   currentRate = 5;
  
 });

 button.addEventListener('click', function(){
  mainDiv2.classList.remove('disable-page');
  mainDiv1.classList.add('disable-page');
  literalP.innerHTML = `You selected ${currentRate} out of 5`;

 });

 const noBack = function(){
  window.onbeforeunload = function() { return "Your work will be lost."; };

 };

//  if(performance.navigation.type == performance.navigation.TYPE_RELOAD){
//   mainDiv1.classList.add('disable-whole');
//   mainDiv2.classList.add('disable-whole');
//  } 









 





