import { Box, Button, Grid, TextField } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalculateAge from "../../utils/CalculateAge";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ErrorMessage from "../ErrorMessage";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { useState } from "react";
import validateForm from "../../utils/validateForm";

const StudentForm = (props) => {
  const [formState, setFormState] = useState({
    firstName: "",
    familyName: "",
    dob: "",
  });
  const [shouldValidate, setShouldValidate] = useState({
    firstName: false,
    familyName: false,
    dob: false,
  });
  const [error, setError] = useState();
  const [ageError, setAgeError] = useState();

  const setFormInput = (key, value) => {
    const isValid = value ? false : true;
    setShouldValidate({ ...shouldValidate, [key]: isValid });
    setFormState({ ...formState, [key]: value });
  };

  const setDobInput = (key, dob) => {
    const isEmpty = dob ? false : true;
    setShouldValidate({ ...shouldValidate, [key]: isEmpty });
    setFormState({ ...formState, [key]: dob });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedFormState = trimFields();
    const isFormValid = validateForm(sanitizedFormState);
    const isDOBValid = CalculateAge(formState.dob);
    if (!isFormValid) {
      setError("All fields have to be filled");
    }
    if (!isDOBValid) {
      setAgeError("Student has to be 10 years old or older");
    } else if (isFormValid && isDOBValid) {
      const clearedFormState = {
        firstName: "",
        familyName: "",
        dob: "",
      };
      setError("");
      setAgeError("");
      setFormState(clearedFormState);
      const updatedFormState = {...formState, firstName: capitalizeFirstLetter(formState.firstName), familyName: capitalizeFirstLetter(formState.familyName) }
      props.handleSubmit(updatedFormState);
    }
  };

  const trimFields = () => {
    const newFormState = {
      ...formState,
      firstName: formState.firstName.trim(),
      familyName: formState.familyName.trim(),
    };
    return newFormState;
  };

  return (
    <>
      <Box sx={{ maxWidth: 650, margin: "auto" }}>
        <ErrorMessage message={error} />
      </Box>
      <Box sx={{ maxWidth: 650, margin: "auto" }}>
        <ErrorMessage message={ageError} />
      </Box>
      <Grid item sm={12} xs={12}>
        <TextField
          error={shouldValidate.firstName}
          label="First Name"
          value={formState.firstName || ""}
          required
          variant="outlined"
          fullWidth
          onChange={(event) => setFormInput("firstName", event.target.value)}
        />
      </Grid>
      <Grid item sm={12} xs={12}>
        <TextField
          error={shouldValidate.familyName}
          label="Family Name"
          value={formState.familyName || ""}
          required
          variant="outlined"
          fullWidth
          onChange={(event) => setFormInput("familyName", event.target.value)}
        />
      </Grid>
      <Grid item>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            required
            value={formState.dob || null}
            onChange={(date) => setDobInput("dob", Date.parse(date))}
            error={shouldValidate.dob}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </>
  );
};

export default StudentForm;
