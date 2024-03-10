// const arcade = document.querySelector("#arcade")
const online = document.querySelector("#online")
const storage = document.querySelector("#storage")
const profile = document.querySelector("#profile")
const total = document.querySelector("#total")
const per = document.querySelector("#per")
const service = document.querySelector("#service")
const larger = document.querySelector("#larger")
const customize = document.querySelector("#customize")
const service1 = document.querySelector("#service1")
const larger1 = document.querySelector("#larger1")
const customize1 = document.querySelector("#customize1")
const plan = document.querySelector("#plan")
const price = document.querySelector("#price")


const p = localStorage.getItem("plan")

// Retrieve data from local storage
const data = localStorage.getItem("yearly")
const isYearly = JSON.parse(data)
console.log(isYearly);

if(p === "arcade"){
  plan.innerHTML = "Arcade";
  price.innerHTML = isYearly ? "$90/yr" : "$9/mo"
}else if(p === "advanced"){
  plan.innerHTML = "Advanced";
  price.innerHTML = isYearly ? "$120/yr" : "$12/mo"
}else if(p === "pro") {
  plan.innerHTML = "Pro";
  price.innerHTML = isYearly ? "$150/yr" : "$15/mo"
}else{
  plan.innerHTML = "";
  price.innerHTML = "";
}
// selected.innerHTML = click1 ? "$90/yr" : "$9/mo"
// selected.innerHTML = click2 ? "+10/yr" : "+$1/mo"
// selected.innerHTML = click3 ? "+20/yr" : "+2/mo"

online.innerHTML = isYearly ? "+$10/yr" : "+$1/mo"
storage.innerHTML = isYearly ? "+$20/yr" : "+$2/mo"
profile.innerHTML = isYearly ? "+$20/yr" : "+$2/mo"
change.innerHTML = isYearly ? "(Yearly)" : "(Monthly)"
per.innerHTML = isYearly ? "(per year)" : "(per month)"


const data1 = localStorage.getItem("check1")
const checked1 = JSON.parse(data1)
console.log(checked1);
const data2 = localStorage.getItem("check2")
const checked2 = JSON.parse(data2)
console.log(checked2);
const data3 = localStorage.getItem("check3")
const checked3 = JSON.parse(data3)
console.log(checked3);

service1.innerHTML = checked1 ? "Online service" : ""
larger1.innerHTML = checked2 ? "Larger storage" : ""
customize1.innerHTML = checked3 ? "Customizable Profile" : ""

if (!checked1) {
    service.innerHTML = "";
  }
if (!checked2) {
    larger.innerHTML = "";
  }
if (!checked3) {
    customize.innerHTML = "";
  }


// Define prices for plans and add-ons
const planPrices = {
  arcade: isYearly ? 90 : 9,
  advanced: isYearly ? 120 : 12,
  pro: isYearly ? 150 : 15
};

const addOnPrices = {
  online: isYearly ? 10 : 1,
  storage: isYearly ? 20 : 2,
  profile: isYearly ? 20 : 2
};

// Calculate total amount
let totalAmount = planPrices[p];

if (checked1) {
  totalAmount += addOnPrices.online;
}

if (checked2) {
  totalAmount += addOnPrices.storage;
}

if (checked3) {
  totalAmount += addOnPrices.profile;
}

// Display total amount
total.textContent = isYearly ? `$${totalAmount}/yr` : `$${totalAmount}/mo`;