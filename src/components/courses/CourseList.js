import React from 'react'
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

const CourseList=({ courses, classes })=> {
  return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Length</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {courses.map((course,index)=><CourseListRow key={index} course={course}/>)}
        </TableBody>
      </Table>
    </Paper>
  )
}

CourseList.propTypes={
    courses: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CourseList);