// Your code here
let dodger = document.getElementById("dodger")
console.log(dodger.style.right)
console.log(dodger.style.bottom)

dodger.style.backgroundColor = "#FF69B4"
dodger.style.bottom = "0px"

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left - 10}px`
    }
}
document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
    if (e.key === "ArrowRight"){
        moveDodgerRight()
    }
})

function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    if (left > 0 && left < 360) {
        dodger.style.left = `${left + 10}px`
    }
}
