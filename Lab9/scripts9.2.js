function calculateBirthYear() {
    var age = prompt(" enter your age:");

    age = Number(age);

    if (isNaN(age) || age <= 0) {
        alert("haha you're so funny. Look at me guys!! I entered a negative age I am so funny. Everybody hates, you grow up");
        return;
    }

    var currentYear = new Date().getFullYear();

    var birthYear = currentYear - age;

    alert("You were born in the year " + birthYear + ".");
}
