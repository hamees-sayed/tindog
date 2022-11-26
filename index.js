// Remember to import the data and Dog class!
import Dog from './Dog.js'
import dogsData from './data.js'

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

document.querySelector('.heart').addEventListener('click', showLikedDog)
document.querySelector('.cross').addEventListener('click', showDislikedDog)


function render() {
    document.getElementById("pfp").innerHTML = currentDog.getDogHtml()
}

function showLikedDog() {
    document.getElementById("pfp").innerHTML = currentDog.getLikedDogHtml()
    setTimeout(() => {
        currentDogIndex += 1
        userLimit(currentDogIndex)
        currentDog = new Dog(dogsData[currentDogIndex])
        render()
    }, 1000)
}

function showDislikedDog() {
    document.getElementById("pfp").innerHTML = currentDog.getDislikedDogHtml()
    setTimeout(() => {
        currentDogIndex += 1
        userLimit(currentDogIndex)
        currentDog = new Dog(dogsData[currentDogIndex])
        render()
    }, 1000)
}

function userLimit(currentDogIndex) {
    if (currentDogIndex === (dogsData.length)) {
        document.querySelector(".main-section").innerHTML = `
        <h1 class="end-of-user">There are no more dogs in your area.</h1>`
    }
}

render()