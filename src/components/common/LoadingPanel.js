import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2,
    },
  });

class LoadingPanel extends Component {

  render() {
    const { isloading,classes } = this.props;
    const loadingPanel = (
      <div className="k-loading-mask">
        <span className="k-loading-text">Loading</span>
        <div className="k-loading-image" />
        <div className="k-loading-color" />
      </div>
    );

    const content = document && document.querySelector(".container");
    const empty = (<div></div>);
    return this.props.isloading ? (content
      ? ReactDOM.createPortal(loadingPanel, content)
      : loadingPanel) : empty;
    
  }  
}

LoadingPanel.propTypes = {
  isloading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    isloading: state.ajaxCallsInProgress>0
  };
}

export default connect(mapStateToProps)(withStyles(styles)(LoadingPanel));