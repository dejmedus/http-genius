import { httpStatuses } from "./httpStatuses";


// array of httpStatuses
const statuses = Object.keys(httpStatuses)

function random() {
    return Math.floor(Math.random() * 59);
}

export function createQuestion() {
    const randStatus = statuses[random()]
    const optionsArr = [httpStatuses[randStatus]]

    // add 3 random incorrect statuses to options arr
    while (optionsArr.length < 4) {
        let newStatus = httpStatuses[statuses[random()]]
        if (!optionsArr.includes(newStatus)) {
            optionsArr.push(newStatus);
        }
    }

    // Use a compare function that randomly returns -1 or 1 to sort the array
    const randOptions = optionsArr.sort(() => Math.random() < 0.5 ? -1 : 1);

    // 200, 'Ok', [ 'Ok', 'Not Found', 'Continue', 'Accepted' ]
    return {
        statusNum: randStatus,
        status: httpStatuses[randStatus],
        options: randOptions
    }
}
