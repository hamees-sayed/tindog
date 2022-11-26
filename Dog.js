// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool){
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
        <img src="${avatar}" alt="dog">
        <div class="bio">
            <h1>${name}, ${age}</h1>
            <p>${bio}</p>
        </div>`
    }

    getLikedDogHtml() {
        const { name, avatar, age, bio } = this
        return `
        <img src="${avatar}" alt="dog">
        <div class="bio">
            <h1>${name}, ${age}</h1>
            <p>${bio}</p>
        </div>
        <div class="result yes">
            <h1>like</h1>
        </div>`
    }

    getDislikedDogHtml(){
        const { name, avatar, age, bio } = this
        return `
        <img src="${avatar}" alt="dog">
        <div class="bio">
            <h1>${name}, ${age}</h1>
            <p>${bio}</p>
        </div>
        <div class="result nope">
            <h1>nope</h1>
        </div>`
    }
}

export default Dog