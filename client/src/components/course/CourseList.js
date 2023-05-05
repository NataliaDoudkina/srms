import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import React from "react";
import { Typography } from "@mui/material";

const CourseList = (props) => {
  return (
    <List>
      <Typography variant="h4" mb={3}>Courses:</Typography>
      {props.courses.map((course) => (
        <React.Fragment key={course._id}>
          <ListItem>
            <ListItemText primary={course.title} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default CourseList;
