function calculateBirthYear() {
    // Prompt the user for their age
    var age = prompt("Please enter your age:");

    // Convert the entered age to a number
    age = Number(age);

    // Check if the entered value is a valid number
    if (isNaN(age) || age <= 0) {
        alert("Invalid age. Please enter a positive number.");
        return;
    }

    // Get the current year
    var currentYear = new Date().getFullYear();

    // Calculate the birth year
    var birthYear = currentYear - age;

    // Output the birth year to the screen
    alert("You were born in the year " + birthYear + ".");
}
