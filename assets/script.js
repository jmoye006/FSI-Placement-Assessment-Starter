// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Justin Moye" // HINT: Replace this with your own name!

// update cookie total 

function updateGb(displayGb){
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = displayGb
}

function updateCc(displayCc){
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = displayCc
}

function updateSugar(displaySugar){
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = displaySugar
}

function updateTotal(displayTotal){
    let total = document.querySelector('#qty-total')
    total.innerHTML = displayTotal
}
// We'll use these variables to track the counts of each cookie type


let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0//Total Cookies



// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// selecting the element with an id 
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listeners for clicks on the "+" button for cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    total++
    updateGb(gb)
    updateTotal(total)   
})

ccPlusBtn.addEventListener('click', function(){
    cc++
    total++
    updateCc(cc)
    updateTotal(total)

})

sugarPlusBtn.addEventListener('click', function(){
    sugar++
    total++
    updateSugar(sugar)
    updateTotal(total)

})

// Event listeners for clicks on the "-" button for cookies
gbMinusBtn.addEventListener('click', function(){
    if(gb > 0){
    gb--
}
if(total > 0){
    total--
    }
    updateGb(gb)
    updateTotal(total)

})

ccMinusBtn.addEventListener('click', function(){
    if(cc > 0){
    cc--
}
if(total > 0){
    total--
    }
    updateCc(cc)
    updateTotal(total)

})

sugarMinusBtn.addEventListener('click', function(){
    if(sugar > 0){
    sugar--
}
    if(total > 0){
    total--
    }
    updateSugar(sugar)
    updateTotal(total)

})
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// TODO: Hook up event listeners for the rest of the buttons