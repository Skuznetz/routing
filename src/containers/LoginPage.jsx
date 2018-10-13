import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { replace } from 'react-router-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';

import { auth } from '../actions';

const styles = {
    container: {
        height: '100%',
        width: '100%',
        padding: 16,
    },
    card: {
        padding: 16,
        maxWidth: 500,
        margin: '0 auto',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    error: {
        color: 'red',
        fontWeight: 'bold'
    }
};