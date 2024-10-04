let years = 16;
let months = 3;
let days = 19;
let hours = 14;
let minutes = 32;
let seconds = 0;

// function to calculate age
function calculateAge() {
    const totalDaysInYear = 365.25; // accounting for leap years
    const totalDaysInMonth = 30.44; // average days in a month??? delete maybe

    const yearDecimal = years + (months / 12) + (days / totalDaysInYear) + 
                        (hours / (totalDaysInYear * 24)) + 
                        (minutes / (totalDaysInYear * 24 * 60)) + 
                        (seconds / (totalDaysInYear * 24 * 60 * 60));

    return yearDecimal.toFixed(9);
}
//function to update age lolzzzzzzzzzzzzzzzzzzzzzz
function updateAge() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
                hours = 0;
                days++;
                if (days >= 30) { 
                    days = 0;
                    months++;
                    if (months >= 12) {
                        months = 0;
                        years++;
                    }
                }
            }
        }
    }

    document.getElementById('ageDisplay').innerText = calculateAge();
}

setInterval(updateAge, 1000);
