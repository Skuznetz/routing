import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

const mapStateToProps = state => ({
    isLoggedIn: isLoggedIn(state),
    pathname: state.routing.locationBeforeTransitions.pathname,
    query: state.routing.locationBeforeTransitions.query,
});