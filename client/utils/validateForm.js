const validateForm = (formState) => {
    return Object.values(formState).reduce(
      (accumulator, currentValue) => accumulator && !!currentValue,
      true
    );
  };
  
  export default validateForm;
