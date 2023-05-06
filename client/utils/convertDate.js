const convertDate = (originalDate) => {
    const date = new Date(originalDate);
    return new Intl.DateTimeFormat().format(date);
  };
  
  export default convertDate;
