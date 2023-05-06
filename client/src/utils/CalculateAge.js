const CalculateAge = (dob) => {
    const birthdayDate = new Date(dob);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const birthdayThisYear = new Date(
      currentDate.getFullYear(),
      birthdayDate.getMonth(),
      birthdayDate.getDate()
    );
    if (currentDate < birthdayThisYear) {
      age--;
    }
    const birthMonth = birthdayDate.getMonth();
    const birthDay = birthdayDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
  
    let isOver10YearsOld = false;
  
    if (age > 10) {
      isOver10YearsOld = true;
    } else if (age === 10) {
      if (currentMonth > birthMonth) {
        isOver10YearsOld = true;
      } else if (currentMonth === birthMonth) {
        if (currentDay >= birthDay) {
          isOver10YearsOld = true;
        }
      }
    }
    return isOver10YearsOld;
  };
  
  export default CalculateAge;
