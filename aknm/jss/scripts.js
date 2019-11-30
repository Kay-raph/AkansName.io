var male=["You were born Sunday and your name is Kwasi", "You were born Monday and your name Kwadwo", "You were on Tuesday and your name is Kwabena", "You were born on Wednesday and your name is Kwaku", "You were born on Thursday and your name is Yaw", "You were born on Friday and your name is Kofi", "You were born on Saturday and your name is Kwame"];
var female=["You were born on Sunday and your name is Akosua", "You were born on Monday and your name is Adwoa", "Your were born on Tuesday and your name is Abena", "You were born Wednesday and your name is Akua", "You were born on Thursday and your name is Yaa", "You were born on Friday and your name is Afua", "You were born on Saturday and your name is Ama"];
//var day=(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7
//var month_name = function(dt)//{
//mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
 // return mlist[dt.getMonth()];
//};//

//calling functions
function getName(){
var year=parseInt(document.getElementById("year").value);
var month =parseInt(document.getElementById("month").value);
var day=parseInt(document.getElementById("day").value);
var male = document.getElementById("male");
var female = document.getElementById("female");

//validation
if(day<=0||day>31)
alert("Please enter a valid day");
else if(month<0||month>12)
alert("Please Enter a valid month");

var day = new Date(year + "/" + month + "/" + day);

var birthDay=day.getDay();
if(male.checked==true){
   alert("You were born on a" + daysOfWeek[birthDay] + " and your AKan name is " + maleNames[birthDay])
}
else if(female.checked==true){
   alert("You were born on a " + daysOfWeek[birthDay] + "and your Akan name is " + femaleNames[birthDay])
}

