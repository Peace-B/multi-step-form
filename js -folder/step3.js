const online = document.querySelector("#online")
const storage = document.querySelector("#storage")
const profile = document.querySelector("#profile")
const myCheckbox1 = document.querySelector("#mycheckbox1")
const myCheckbox2 = document.querySelector("#mycheckbox2")
const myCheckbox3 = document.querySelector("#mycheckbox3")

// retrieve the data from local storage
const data = localStorage.getItem("yearly")
const isYearly = JSON.parse(data)
console.log(isYearly)

// update prices based on the plan
online.innerHTML = isYearly ? "$10/yr" : "$1/mo"
storage.innerHTML = isYearly ? "$20/yr" : "$2/mo"
profile.innerHTML = isYearly ? "$20/yr" : "$2/mo"

function updatedPlan1(){
    const isUpdatedArcade = myCheckbox1.checked
    localStorage.setItem("check1", JSON.stringify(isUpdatedArcade))
}
const onData = JSON.parse(localStorage.getItem("check1"))
if(onData == true){
    myCheckbox1.checked = true;
}else {
    myCheckbox1.checked = false;
};
updatedPlan1();


function updatedPlan2(){
    const isUpdatedAdvanced = myCheckbox2.checked
    localStorage.setItem("check2", JSON.stringify(isUpdatedAdvanced))
}
const onData2 = JSON.parse(localStorage.getItem("check2"))

if(onData2 == true){
    myCheckbox2.checked = true;
}else {
    myCheckbox2.checked = false;
};
updatedPlan2();
 
function updatedPlan3(){
    const isUpdatedpro = myCheckbox3.checked
    localStorage.setItem("check3", JSON.stringify(isUpdatedpro))
}
const onData3 = JSON.parse(localStorage.getItem("check3"))

if(onData2 == true){
    myCheckbox3.checked = true;
}else {
    myCheckbox3.checked = false;
}
updatedPlan3()

myCheckbox1.addEventListener("click", updatedPlan1);
myCheckbox2.addEventListener("click", updatedPlan2);
myCheckbox3.addEventListener("click", updatedPlan3);
