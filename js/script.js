
const row = document.querySelector(".row");

for (let i = 1; i < 101; i++) {
    let fizzBuzz = "";
    let text = i;
    if (i % 15 == 0) {
        console.log("FizzBuzz");
        fizzBuzz = "fizzbuzz";
        text = fizzBuzz;
    } else if (i % 3 == 0) {
        console.log("Fizz");
        fizzBuzz = "fizz";
        text = fizzBuzz;
    } else if (i % 5 == 0) {
        console.log("Buzz");
        fizzBuzz = "buzz";
        text = fizzBuzz;
    }

    const cell = `<div class="cell col ${fizzBuzz}">${text}</div>`;
    row.innerHTML += cell;
}
// JAVASASSONE ヾ(⌐■_■)ノ♪🗿