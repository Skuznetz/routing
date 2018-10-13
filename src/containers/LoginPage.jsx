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

export default class LoginPage extends Component {
    state = {
        login: '',
        password: ''
    }



    handleLoginChange = (e) => {
        this.setState({
            login: e.target.value
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleLogIn = () => {
        this.props.auth(this.state.login, this.state.password);
    }

    render() {
        const { error } = this.props;

        return (
            <div style={styles.container}>
                <Card style={styles.card} containerStyle={styles.form}>
                    <h2>Log in</h2>

                    <TextField
                        fullWidth
                        floatingLabelText="Login"
                        value={this.state.login}
                        onChange={this.handleLoginChange}
                    />

                    <TextField
                        fullWidth
                        type="password"
                        floatingLabelText="Password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />

                    <br />

                    {
                        error &&
                        <p style={styles.error}>{error}</p>
                    }

                    <RaisedButton
                        primary
                        label="Log in"
                        onClick={this.handleLogIn}
                    />
                </Card>
            </div>
        );
    }
}