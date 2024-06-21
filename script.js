function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');

    if (dob === "") {
        result.textContent = "Please enter your date of birth.";
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let ageYears = today.getFullYear() - dobDate.getFullYear();
    let ageMonths = today.getMonth() - dobDate.getMonth();
    let ageDays = today.getDate() - dobDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    result.innerHTML = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}
