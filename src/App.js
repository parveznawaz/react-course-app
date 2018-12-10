import "babel-polyfill"
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursePage from "./components/courses/CoursesPage";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import ManageCoursePage from "./components/courses/ManageCoursePage";
import Menu from "./components/layout/Menu";
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());



class App extends Component {
  
  render() {
    
    return (
      <Provider store={store}>
        <Menu></Menu>
        <Router>
          <div className="container">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/courses" component={CoursePage}/>
            <Route exact path="/course" component={ManageCoursePage}/>
            <Route exact path="/course/:id" component={ManageCoursePage}/>
          </div>
        </Router>
        
      </Provider>
    );
  }
}
export default App;
