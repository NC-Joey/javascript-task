const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express',  'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
  }
  
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']


let scale = 0
let msg1

const skillCount = () => {
    for (person in users) {
        let skillNumber = users[person].skills.length
        if (skillNumber > scale) {
            scale = skillNumber
            msg1 = `${person} has a total of ${skillNumber} skills which is the highest number of skills.`
        }
    }

    return msg1
}

console.log('Question 1:', skillCount())


let loggedInUsers = []
let points50 = []

const onlineCheck = () => {
    for (person in users) {
        if (users[person].isLoggedIn) {
            loggedInUsers.push(person)
        }

        if (users[person].points >= 50) {
            points50.push(person)
        }
    }

    return `(Logged in users: ${loggedInUsers.length}) (Users with up to 50 points: ${points50.length})`
}

console.log('Question 2:', onlineCheck())


const sumOfArrayItems = (arr) => {
    let x = 0
    if (arr.every(element => (typeof element == 'number'))) {
        for (each of arr) {
            x += each
        }
    } else {
        return 'NaN! All elements in the array must be a number.'
    }

    return x
}

console.log('Question 3:', sumOfArrayItems([2,'a']))
console.log('Question 3:', sumOfArrayItems([1,2,3,4,5,6,7,8,9,10]))

const sameDataType = (arr) => {
    let dataType = typeof arr[0]
    arr.every(element => typeof element == dataType) ? message = `All items are of the same data type` : message = `All items are not of the same data type`

    return message
}

console.log('Question 4:', sameDataType([2,3,4]))
console.log('Question 4:', sameDataType([2,true,4]))

const landCountries = countries.filter(element => element.includes('land'))
console.log('Question 5:', landCountries)

const fourCharCountries = countries.filter(country => country.length == 4)

fourCharCountries.length == 0 ? console.log('Question 6:',`No countries matched`) : console.log('Question 6:', fourCharCountries)

