import { Box, Grid, TextField } from "@mui/material";

import Button from "@mui/material/Button";
import ErrorMessage from "../ErrorMessage";
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import { useState } from "react";

const CourseForm = (props) => {
  const [error, setError] = useState("");
  const [title, setTitle] = useState();
  const [shouldValidate, setShouldValidate] = useState({
    title: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      setTitle("");
      const formattedTitle = capitalizeFirstLetter(title);
      props.handleSubmit(formattedTitle);
    } else {
      setError("Title field cannot be empty");
    }
  };

  const setFormInput = (key, value) => {
    const isValid = value ? false : true;
    setShouldValidate({ ...shouldValidate, [key]: isValid });
    setTitle(value);
  };
  return (
    <>
      <Box sx={{ maxWidth: 650, margin: "auto" }}>
        <ErrorMessage message={error} />
      </Box>
      <Grid item sm={12} xs={12}>
        <TextField
          error={shouldValidate.courseName}
          label="Course Title"
          value={title || ""}
          required
          variant="outlined"
          fullWidth
          onChange={(event) => setFormInput("title", event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </>
  );
};

export default CourseForm;
