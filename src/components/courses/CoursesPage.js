import React, { Component } from 'react'
import * as courseActions from '../../actions/courseActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import { withRouter } from "react-router-dom";
import LoadingPanel from '../common/LoadingPanel';

class CoursePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course,index){
        return (<div key={index}>{course.title}</div>);
    }

    redirectToAddCoursePage() {
        this.props.history.push("/course");
    }

  render() {
      const {courses}=this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit" 
        value="Add Course" 
        className="btn btn-primary" 
        onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses}></CourseList>
        <LoadingPanel/>
      </div>

    )
  }
}

CoursePage.propTypes={
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
}
function mapStateToProps(state,ownProps){
    return{
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CoursePage));