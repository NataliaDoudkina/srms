import { Typography } from "@mui/material";

const Title = (props) => {
  return (
    <Typography variant="h4" mb={3}>
      {props.title}
    </Typography>
  );
};

export default Title;
