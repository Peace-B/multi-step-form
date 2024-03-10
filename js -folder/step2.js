const myArcade = document.querySelector("#arcade")
const myAdvance = document.querySelector("#advance")
const myPro = document.querySelector("#pro")
const myArcadePrice = document.querySelector("#arcadePrice")
const myAdvancePrice = document.querySelector("#advancePrice")
const myProPrice = document.querySelector("#proPrice")
const togglebtn = document.querySelector("#flexSwitchCheckChecked")
const advancePlan = document.querySelector("#advance-plan")
const arcadePlan = document.querySelector("#arcade-plan")
const proPlan = document.querySelector("#pro-plan")

console.log(togglebtn.checked)

arcadePlan.addEventListener("click", function() {
    localStorage.setItem("plan", "arcade");
})

advancePlan.addEventListener("click", function() {
    localStorage.setItem("plan", "advanced");
})

proPlan.addEventListener("click", function() {
    localStorage.setItem("plan", "pro");
})




// function to update price
function updatedPrice() {
    const isYearly = togglebtn.checked
    console.log(isYearly);

    // 

localStorage.setItem("yearly", isYearly)


    //update prices for each plan
    myArcadePrice.innerHTML = isYearly ? "$90/yr" : "$9/mo"
    myAdvancePrice.innerHTML = isYearly ? "$120/yr" : "$12/mo"
    myProPrice.innerHTML = isYearly ? "$150/yr" : "$15/mo"

    //update plan message
    myArcade.innerHTML = isYearly ? "Two months free" : ""
    myAdvance.innerHTML = isYearly ? "Two months free" : ""
    myPro.innerHTML = isYearly ? "Two months free" : ""
}

updatedPrice()

//function to toggle monthly/year
togglebtn.addEventListener("change", updatedPrice)


// update paragraph
 
// const goBack = document.querySelector9("#goBack")
goBack.addEventListener("click", function() {
    //retrieve local storage data
    const data = localStorage.getItem("formData");
    const parsedData = JSON.parse(data)

})
// const data = localStorage.getItem("formData")
// console.log(data);
// const parsedData = JSON.parse(data)
// console.log(parsedData)
 