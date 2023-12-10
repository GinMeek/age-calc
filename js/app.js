const dobForm = document.getDob;
const h3 = document.querySelector("h3.result_text");
const resultDiv = document.querySelector(".result");
const ps = document.querySelector(".postscript");
const bornDay = document.querySelector(".born_day");
const remainder = document.querySelector(".remainder");

// funtion to calculate date of birth from the form data
const handleDobSubmit = (e) => {
  let name = dobForm.name.value.trim().split(" ");
  let dateOfBirth = dobForm.dob.value;
  let newDob = new Age(dateOfBirth);
  let newAge = newDob.getAge();
  let formalName = "";

  try {
    // convert given name to a proper noun
    formalName = name[0][0]
      .toUpperCase()
      .concat(name[0].slice(1).toLowerCase());
  } catch (error) {
    formalName = "";
  }

  let showName = formalName !== "" ? `, ${formalName}!` : "!";
  let birthDayText = `You were born on ${newDob.getDayOfBirth()}`,
    ageText = "",
    remainderText = "";
  // for year, month and day in curent age
  let sDay = newAge[2] > 1 ? "days" : "day";
  let sMonth = newAge[1] > 1 ? "months" : "month";
  let sYear = newAge[0] > 1 ? "years" : "year";
  // for remainiog day and month to next age
  let nextYearAge = newAge[0] + 1;
  let rDay = newAge[4] > 1 ? "days" : "day",
    rMonth = newAge[3] > 1 ? "months" : "month";
  let nextAge = newAge[0] > 0 ? "years" : "year";

  // check if DoB is valid.
  if (newAge.length > 1) {
    //check if the age is 0.
    if (newAge[0] === 0 && newAge[1] === 0 && newAge[2] === 0) {
      if (!resultDiv.classList.contains("error"))
        resultDiv.classList.add("error");
      ps.style.display = "none";
      ageText = "<span>You have no age!</span>";
    } else {
      ps.style.display = "block";
      if (resultDiv.classList.contains("error"))
        resultDiv.classList.remove("error");

      // InnerText of remainders to next age
      if (newAge[1] !== 0 || newAge[2] !== 0) {
        remainder.style.display = "block";

        if (newAge[3] === 0 && newAge[4] !== 0) {
          remainderText = `You have ${newAge[4]} ${rDay} left to be ${nextYearAge} ${nextAge} old.`;
        } else if (newAge[3] !== 0 && newAge[4] === 0) {
          remainderText = `You have ${newAge[3]} ${rMonth} left to be ${nextYearAge} ${nextAge} old.`;
        } else {
          remainderText = `You have ${newAge[3]} ${rMonth} and ${newAge[4]} ${rDay} left to be ${nextYearAge} ${nextAge} old.`;
        }
      } else {
        remainder.style.display = "none";
      }

      // check if the current date is equivalent to the DoB
      if (newAge[2] === 0 && newAge[1] === 0) {
        ageText = `<span class="happy">Happy Birthday &#127874;${showName} </span>You're&nbsp;${newAge[0]}&nbsp;${sYear}&nbsp;old.`;
      } else if (newAge[0] !== 0) {
        // filter the 0s if age year is not 0
        if (newAge[1] === 0 && newAge[2] !== 0) {
          ageText = `Hello${showName} You're ${newAge[0]} ${sYear} and ${newAge[2]} ${sDay} old.`;
        } else if (newAge[2] === 0 && newAge[1] !== 0) {
          ageText = `Hello${showName} You're ${newAge[0]} ${sYear} and ${newAge[1]} ${sMonth} old.`;
        } else {
          ageText = `Hello${showName} You're ${newAge[0]} ${sYear}, ${newAge[1]} ${sMonth} and ${newAge[2]} ${sDay} old.`;
        }
      } else {
        // filter the 0s if year is 0
        if (newAge[1] === 0 && newAge[2] !== 0) {
          ageText = `Hello${showName} You're ${newAge[2]} ${sDay} old.`;
        } else if (newAge[2] === 0 && newAge[1] !== 0) {
          ageText = `Hello${showName} You're ${newAge[1]} ${sMonth} old.`;
        } else {
          ageText = `Hello${showName} You're ${newAge[1]} ${sMonth} and ${newAge[2]} ${sDay} old.`;
        }
      }
    }
  } else {
    // DoB is invalid
    if (!resultDiv.classList.contains("error"))
      resultDiv.classList.add("error");
    ps.style.display = "none";
    ageText = `<span>${newAge[0]}</span>`;
  }

  resultDiv.style.display = "block";
  location.href = "#result";
  h3.innerHTML = ageText;
  bornDay.innerHTML = birthDayText;
  remainder.innerHTML = remainderText;

  e.preventDefault();
};

dobForm.addEventListener("submit", handleDobSubmit);
