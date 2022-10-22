//constant arrays to hold male and female names
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function user_Action() {
    document.user_form.action = "index.html";
    reg_exp = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    //checks whether dob is empty,matches reg expression
    if (user_form.user_DOB.value != '') {
        //assigns the output ot the regular expression to variable regs
        regs = user_form.user_DOB.value.match(reg_exp)
        if (regs != null) {
            // Ensure date entered is a value between 1 and 31
            if (regs[1] < 1 || regs[1] > 31) {
                alert("Please enter a valid date: " + regs[1]);
                //places  the cursor back to the invalid input
                user_form.user_DOB.focus();
                return false;
            }
            // month value between 1 and 12
            if (regs[2] < 1 || regs[2] > 12) {
                alert("Please enter a valid month: " + regs[2]);
                form.dob.focus();
                return false;
            }
            // year value between 1902 and 2022
            if (regs[3] > (new Date()).getFullYear()) {
                alert("Please enter a valid year: " + regs[3] + " - must be less than or equal to  " + (new Date()).getFullYear());
                user_form.user_DOB.focus();
                return false;
            }
        } else {
            alert("Invalid date format use dd/mm/yyyy: " + user_form.user_DOB.value);
            form.dob.focus();
            return false;
        }


        function century(CC) {
            return ((CC / 4) - 2 * CC - 1);
        }

        function year(YY) {
            return (5 * YY / 4);
        }

        function month(MM) {
            return (26 * (MM + 1) / 10);
        }

        // this function gets the century of the year entered
        function centuryFromYear(year) {
            return Math.floor(year / 100)
        }

        var enterCentury = centuryFromYear(Number(regs[3]))
        var enterYear = Number(regs[3])
        var enterMonth = Number(regs[2])
        var enterDate = Number(regs[1])

        // pick the genter selected in the dropdown 
        var gender = document.getElementById('gender').value
        // picks the year 
        //Year = enterYear.substr(2, 2); 

        Year = Number(enterYear) % 100;

        //alert('You were born in the ' + Year + ' year of the ' + enterCentury + ' Century')

        const birthCentury = century(enterCentury)
        const birthYear = year(Year)
        const birthMonth = month(enterMonth)
        //( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
        //Calculates day of the week and rounds down the result to the neares integer.
        var day = Math.floor((birthCentury + birthYear + birthMonth + enterDate) % 7)

        var result;
        if (gender == "Male") {
            result = maleNames[day]

        } else if (gender == "Female") {
            result = femaleNames[day]
        }
        //display a user's akan name on the screen
        alert('Hey ,your Akan name is : ' + result)
        return true;
    }
}
