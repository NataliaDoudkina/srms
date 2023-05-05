import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Grid,
} from "@mui/material";

import { useState } from "react";
import validateForm from "../../utils/validateForm";
import ErrorMessage from "../ErrorMessage";

const SCORES = ["A", "B", "C", "D", "F"];

const ResultForm = (props) => {
  const [formState, setFormState] = useState({
    student: "",
    course: "",
    score: "",
  });
  const [error, setError] = useState();
  const [shouldValidate, setShouldValidate] = useState({
    student: false,
    course: false,
    score: false,
  });

  const setSelectValue = (key, value) => {
    const isValid = value ? false : true;
    setShouldValidate({ ...shouldValidate, [key]: isValid });
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm(formState);
    if (isFormValid) {
      setError("");
      const clearedFormState = {
        student: "",
        course: "",
        score: "",
      };
      setFormState(clearedFormState);
      props.handleSubmit(formState);
    } else setError("All fields has to be filled");
  };

  return (
    <>
      <Box sx={{ maxWidth: 650, margin: "auto" }}>
        <ErrorMessage message={error} />
      </Box>
      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Students</InputLabel>
          <Select
            value={formState.student}
            label="Students"
            onChange={(e) => setSelectValue("student", e.target.value)}
            error={shouldValidate.student}
          >
            {props.students.map((student) => (
              <MenuItem
                key={student._id}
                value={`${student["firstName"]} ${student["familyName"]}`}
              >{`${student["firstName"]} ${student["familyName"]}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Courses</InputLabel>
          <Select
            value={formState.course}
            label="Courses"
            onChange={(e) => setSelectValue("course", e.target.value)}
            error={shouldValidate.course}
          >
            {props.courses.map((course) => (
              <MenuItem key={course._id} value={course["title"]}>
                {course["title"]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Score</InputLabel>
          <Select
            value={formState.score}
            label="Score"
            onChange={(e) => setSelectValue("score", e.target.value)}
            error={shouldValidate.score}
          >
            {SCORES.map((score) => (
              <MenuItem key={score} value={score}>
                {score}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </>
  );
};

export default ResultForm;
