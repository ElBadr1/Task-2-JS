

heightIBW = document.getElementById('heightIBW');
gender = document.getElementById('gender');
in_error = document.getElementById("small");
res_ibw = document.getElementById('ibw');

function calcIBW() {
   var h = +(heightIBW.value);
   var g = gender.value;
   var result = '';
    if(h >= 100 && h <= 250){
      if (g.toLowerCase() =='male') {
        result = 50 + (0.9 * (h - 152));
    } else if (g.toLowerCase() == 'female'){
       result = 45.5 + (0.9 * (h - 152));
    }
    // else{
    //    alert('Please enter your gender');
    //    emptyGender();
    // }
    heightIBW.classList.add('edit:focus');
    heightIBW.classList.remove('error');
    // in_error.classList.add('d-none');
    in_error.innerHTML = '';
    res_ibw.innerHTML =
    `Your ideal Body Weight is :  ${parseFloat(result.toFixed(2))} kg`;
    }
    else{
      heightIBW.classList.remove('edit:focus');
      heightIBW.classList.add('error');
      // in_error.classList.remove('d-none');
      in_error.innerHTML = 'Height must be between 100 and 250 cm!'
      res_ibw.innerHTML = '';
      emptyInputs()
    }
  //  
}

function emptyInputs(){
   heightIBW.value = '';
   heightBMI.value = '';
   heightCal.value = '';
   weight.value = '';
   weightCal.value = '';
   res_bmi.innerHTML = '';
   res_ibw.innerHTML = '';
   res_calories.innerHTML = '';
}

function emptyAge(){
   ageCal.value = '';
}

function emptyGender(){
  gender.value = '';
  genderCal.value = '';
}

function emptyActivity(){
  activityLevel.value = '';
}

heightBMI = document.getElementById('heightBMI');
weight = document.getElementById('weight');
ibw_height_error = document.getElementById("h-error");
ibw_weight_error = document.getElementById("w-error");
res_bmi = document.getElementById('bmi');



// function check(){
//   var h = +(heightBMI.value);
//    var w = +(weight.value);
//    if(h > 100 && h <= 250){
//      ibw_height.classList.add('edit:focus');
//      ibw_height.classList.remove('error');
//      ibw_height_error.classList.add('d-none');
//    }
//    else{
//      ibw_height.classList.remove('edit:focus');
//      ibw_height.classList.add('error');
//      ibw_height_error.classList.remove('d-none');
//      ibw_height_error.innerHTML = 'Height must be between 100 and 250 cm!'
//      emptyInputs()
//    }
//    if(w > 50){
//      ibw_weight.classList.add('edit:focus');
//      ibw_weight.classList.remove('error');
//      ibw_weight_error.classList.add('d-none');
//    }
//    else{
//      ibw_weight.classList.remove('edit:focus');
//      ibw_weight.classList.add('error');
//      ibw_weight_error.classList.remove('d-none');
//      ibw_weight_error.innerHTML = 'Weight must be grater than 50!'
//      emptyInputs()
//    }
//    return { h , w }
// }
function calcBMI() {
   var h = +(heightBMI.value);
   var w = +(weight.value);
  // var userInputs = check();
  //  if(!userInputs){
  //   ibw_weight_error;
  //   ibw_height_error;
  //  }
  // var h = userInputs.h;
  // var w = userInputs.w;
  var result = '';
   if(h > 100 && h <= 250 && w > 50){
      var bmi = w / (h * h / 10000);
      if(bmi < 18.5){
        result = 'Underweight';
      }
      else if(bmi >= 18.5 && bmi < 25){
        result = 'Normal';
      }
      else if(bmi >= 25 && bmi < 30){
        result = 'Overweight';
      }
      else{
        result = 'Obese';
      }
      res_bmi.innerHTML =
       `Your Body Mass Index (BMI) = ${parseFloat(bmi.toFixed(2))} ,
        Category is : ${result}`;
    }
    else{
      res_bmi.innerHTML = '';
      alert('Height must between 100 and 250 cm!, and Weight must be grater than 50!');
      emptyInputs()
    }
}

weightCal =  document.getElementById('weightCal');
heightCal = document.getElementById('heightCal');
ageCal = document.getElementById('ageCal');
genderCal = document.getElementById('genderCal');
activityLevel = document.getElementById('activityLevel');
a_error = document.getElementById('a_error');
w_error = document.getElementById('w-error');
h_error = document.getElementById('h-error');
res_calories = document.getElementById('calories');


function calcCalories() {
   var h = +(heightCal.value);
   var w = +(weightCal.value);
   var a = +(ageCal.value);
   var g = genderCal.value;
   var al = activityLevel.value;
  if(h > 100 && h <= 250 && w > 50){
      heightCal.classList.add('edit:focus');
      weightCal.classList.add('edit:focus');
      heightCal.classList.remove('error');
      weightCal.classList.remove('error');
      h_error.innerHTML = '';
      w_error.innerHTML = '';
    var calories = 0;
    if(a >= 18 && a <= 100){
      if(g.toLowerCase() =='male'){
        calories = (10 * w) + (6.25 * h) - (5 * a) + 5;
      } else if (g.toLowerCase() == 'female'){
        calories = (10 * w) + (6.25 * h) - (5 * a) - 161;
      }
      // else{
      //    alert('Please enter your gender');
      //    emptyGender();
      // }
      if(al.toLowerCase() == 'sedentary'){
        calories *= 1.2;
      }
      else if(al.toLowerCase() == 'lightly active'){
        calories *= 1.375;
      }
      else if(al.toLowerCase() == 'moderately active'){
        calories *= 1.55;
      }
      else if(al.toLowerCase() == 'very active'){
        calories *= 1.725;
      }
      else if(al.toLowerCase() == 'super active'){
        calories *= 1.9;
      }
      // else{
      //    alert('Please enter your activity level');
      //    emptyActivity();
      // }

      ageCal.classList.add('edit:focus');
      ageCal.classList.remove('error');
      // a_error.classList.add('d-none');
      a_error.innerHTML = '';
      res_calories.innerHTML = `
      Your Calories that you need is :  ${parseFloat(calories.toFixed(2))} Calories.`
    }
    else{
      ageCal.classList.remove('edit:focus');
      ageCal.classList.add('error');
      // a_error.classList.remove('d-none');
      a_error.innerHTML = 'Age must be between 18 and 100!';
      res_calories.innerHTML = '';
      // alert('Age must be grater than 18 and less than 100!');
      emptyAge();
    }
    
  }
  else{
      heightCal.classList.remove('edit:focus');  
      weightCal.classList.remove('edit:focus');
      heightCal.classList.add('error');
      weightCal.classList.add('error');
      h_error.innerHTML = 'Height must be between 100 and 250 cm!';
      w_error.innerHTML = 'Weight must be grater than 50!';
      res_calories.innerHTML = '';
    // alert('Height must between 100 and 250 cm!, and Weight must be grater than 50!');
    emptyInputs();
  }    
}



datePDD = document.getElementById('datePDD');
date_error = document.getElementById('date_error');
var dueDate;

function calcDueDate() {
  // Convert the LMP date to a Date object
  var lmp = new Date(datePDD.value);
  if(!datePDD.value || datePDD.value.trim() === ""){
    //  alert('Please enter a valid date!');
     date_error.classList.remove('d-none');
     date_error.innerHTML = 'Please enter a valid date!'
     emptyInputs();
  }
  else{
    // Add 280 days (40 weeks)  to the LMP date
    dueDate = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000);
   // Format the due date as a string (e.g., "YYYY-MM-DD")
    var year = dueDate.getFullYear();
    var month = String(dueDate.getMonth() + 1).padStart(2, '0');
    var day = String(dueDate.getDate()).padStart(2, '0');
    
    dueDate = `${day}-${month}-${year}`;
    date_error.classList.add('d-none');
    document.getElementById('pdd').innerHTML =
      `Your Pregnancy Due Date is : ${dueDate}`;
  }
}

