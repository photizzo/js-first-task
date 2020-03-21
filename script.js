const name = "Photizzo"
const courses = ["HTML", "CSS", "HTML", "UI/UX"]

// 1. If the number of courses you are doing is an odd number, find and display all odd numbers from 1-200 (inclusive)
// 2. If the number of courses you are doing is an even number, find and display all even numbers from 1-200 (inclusive)
console.log(name)
console.log(courses)
const numbersToDisplay = []
for (let i=1; i<= 200; i++) {
    if (i%2 == 0) {
        numbersToDisplay.push(i)
    }
}
console.log(numbersToDisplay)