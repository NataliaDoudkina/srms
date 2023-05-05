import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import convertDate from "../../utils/convertDate";
import { Typography } from "@mui/material";

const StudentList = (props) => {
  return (
    <>
      <Typography variant="h4" mb={3}>
        Students:
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Family Name</TableCell>
              <TableCell align="right">Date of Birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.students.map((student) => (
              <TableRow key={student._id}>
                <TableCell component="th" scope="row">
                  {student.firstName}
                </TableCell>
                <TableCell align="right">{student.familyName}</TableCell>
                <TableCell align="right">{convertDate(student.dob)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StudentList;
