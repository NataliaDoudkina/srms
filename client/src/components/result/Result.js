import { useEffect, useState } from "react";

import { LinearProgress, Box, Grid } from "@mui/material";
import ResultForm from "../form/ResultForm";
import axios from "axios";
import ResultList from "./ResultList";
import Notification from "../Notification";
import ErrorMessage from "../ErrorMessage";

const Result = () => {
  const [students, setStudents] = useState();
  const [courses, setCourses] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [listUpdated, setListUpdated] = useState();
  const [results, setResults] = useState();
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getResults();
  }, [listUpdated]);

  const getResults = async () => {
    try {
      const response = await axios.get("http://localhost:5000/result");
      setResults(response.data.records);
    } catch (err) {
      setError("Something went wrong, please try again");
    }
  };

  const getData = async () => {
    try {
      const students = await axios.get("http://localhost:5000/student");
      const courses = await axios.get("http://localhost:5000/course");
      setStudents(students.data.records);
      setCourses(courses.data.records);
      setIsLoading(false);
    } catch (err) {
      setError("Something went wrong, please reload the page");
    }
  };

  const handleSubmit = (formState) => {
    saveResult(formState);
  };

  const saveResult = async (formState) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/result",
        formState
      );
      if (response.status === 200) {
        setListUpdated(Date.now());
        setNotificationOpen(true);
      }
    } catch (e) {
      setError("Something went wrong, Please try again");
    }
  };

  const handleNotificationBar = () => {
    setNotificationOpen(false);
  };

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto" }}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Box>
          <ErrorMessage message={error} />
          <Grid
            p={2}
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <ResultForm
              students={students}
              courses={courses}
              handleSubmit={handleSubmit}
            />
            <Grid item mt={5} xs={12} sm={12}>
            <ResultList results={results} />
            </Grid>
          </Grid>
        </Box>
      )}
      <Notification
        open={notificationOpen}
        onClick={handleNotificationBar}
        message={"Result added!"}
      />
    </Box>
  );
};

export default Result;
