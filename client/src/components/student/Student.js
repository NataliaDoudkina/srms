import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";


import ErrorMessage from "../ErrorMessage";
import LinearProgress from "@mui/material/LinearProgress";

import Notification from "../Notification";
import StudentList from "./StudentList";

import axios from "axios";

import StudentForm from "../form/StudentForm";

const Student = () => {
  const [error, setError] = useState("");
  const [students, setStudents] = useState();
  const [isLoading, setLoading] = useState(true);
  const [listUpdated, setListUpdated] = useState();
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    getStudents();
  }, [listUpdated]);

  const getStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/student");
      setStudents(response.data.records);
      setLoading(false);
    } catch (err) {
      setError("Something went wrong, please try again");
    }
  };

  const handleSubmit = (formState) => {
    saveStudent(formState);
  };

  const saveStudent = async (formState) => {
    const response = await axios.post(
      "http://localhost:5000/student",
      formState
    );
    if (response.status === 200) {
      setListUpdated(Date.now());
      setNotificationOpen(true);
    } else if (response.status === 400) {
      setError("Something went wrong, please try again");
    }
  };

  const handleNotificationBar = () => {
    setNotificationOpen(false);
  };

  return (
    <Box sx={{ maxWidth: 650, margin: "auto" }}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Box>
          <Box>
            <ErrorMessage message={error} />
          </Box>
          <Grid
            p={2}
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <StudentForm handleSubmit={handleSubmit} />
            <Grid item mt={5} xs={12} sm={12}>
              <StudentList students={students} />
            </Grid>
          </Grid>
        </Box>
      )}
      <Notification
        open={notificationOpen}
        onClick={handleNotificationBar}
        message={"Student added!"}
      />
    </Box>
  );
};
export default Student;
