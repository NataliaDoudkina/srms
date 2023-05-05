import { Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import CourseList from "./CourseList";
import Notification from "../Notification";
import CourseForm from "../form/CourseForm";
import ErrorMessage from "../ErrorMessage";

const Course = () => {
  const [courses, setCourses] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [listUpdated, setListUpdated] = useState();
  const [error, setError] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    getCourses();
  }, [listUpdated]);

  const getCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/course");
      setCourses(response.data.records);
      setIsLoading(false);
    } catch (err) {
      setError("Something went wrong, please try again");
    }
  };

  const handleSubmit = (data) => {
    saveCourse(data);
  };

  const saveCourse = async (data) => {
    const response = await axios.post("http://localhost:5000/course", {
      title: data,
    });
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
    <Box style={{ maxWidth: 650, margin: "auto" }}>
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
            <CourseForm handleSubmit={handleSubmit} />
            <Grid item mt={5}>
              <CourseList courses={courses} />
            </Grid>
          </Grid>
        </Box>
      )}
      <Notification
        open={notificationOpen}
        onClick={handleNotificationBar}
        message={"Course added!"}
      />
    </Box>
  );
};

export default Course;
