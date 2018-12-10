import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const CourseListRow=({course})=> {
  return (
    <TableRow key={course.key}>
    <TableCell component="th" scope="row">
        <Button href={course.watchHref} targe="_blank" >
            Watch
        </Button>
    </TableCell>
    <TableCell><Link to={'/course/'+course.id}>{course.title}</Link></TableCell>
    <TableCell>{course.authorId}</TableCell>
    <TableCell>{course.category}</TableCell>
    <TableCell>{course.length}</TableCell>
  </TableRow>
  )
}
CourseListRow.protoTypes = {
    course: PropTypes.object.isRequired
}
export default CourseListRow;