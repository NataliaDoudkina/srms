import { Typography } from "@mui/material";

const ErrorMessage = (props) => {
    return (
        <Typography 
            align='center'
            variant='h4'
            paragraph
            fontSize={14}
            color={'red'}
        >
            {props.message}
        </Typography>
    )
}

export default ErrorMessage;