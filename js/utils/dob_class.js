class Age {
  constructor(dob) {
    this.dob = dob;
  }
  getAge() {
    let currentDate = new Date();
    let dobDate = new Date(this.dob);
    let dobYear = dobDate.getFullYear();
    let dobMonth = dobDate.getMonth() + 1;
    let dobDay = dobDate.getDate();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    let ageMonth = currentMonth - dobMonth,
      ageDay = currentDay - dobDay,
      ageYear = currentYear - dobYear;
    let daysInMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    let remainingMonth = 11 - ageMonth,
      remainingDay = daysInMonth - ageDay;

    if (
      currentYear < dobYear ||
      (currentYear === dobYear && currentMonth < dobMonth) ||
      (currentYear === dobYear &&
        currentMonth === dobMonth &&
        currentDay < dobDay)
    ) {
      return ["Your Date of birth is invalid! Make sure your date is correct"];
    } else {
      if (currentMonth < dobMonth) {
        ageYear -= 1;
        ageMonth += 12;
        remainingMonth -= 11;
      }
      if (currentDay < dobDay) {
        ageDay += daysInMonth;
        remainingDay -= daysInMonth;
        if (currentMonth !== dobMonth) {
          ageMonth -= 1;
        } else {
          remainingMonth = 0;
          ageYear -= 1;
          ageMonth = 11;
        }
      }
      if (currentDay === dobDay) remainingDay = 0;

      return [ageYear, ageMonth, ageDay, remainingMonth, remainingDay];
    }
  }
  getDayOfBirth() {
    let birthDay = new Date(this.dob).getDay();
    let bDay = "";
    switch (birthDay) {
      case 0:
        bDay = "Sunday";
        break;
      case 1:
        bDay = "Monday";
        break;
      case 2:
        bDay = "Tuesday";
        break;
      case 3:
        bDay = "Wednesday";
        break;
      case 4:
        bDay = "Thursday";
        break;
      case 5:
        bDay = "Friday";
        break;
      case 6:
        bDay = "Saturday";
        break;
      default:
        break;
    }
    return bDay;
  }
}
