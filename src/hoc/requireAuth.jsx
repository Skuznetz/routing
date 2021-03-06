import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { isLoggedIn } from '../selectors';



export default function requireAuth(Component) {
    @connect(mapStateToProps, { replace })
    class AuthentificatedComponent extends React.Component {
        componentWillMount() {
            this.checkAuth(this.props);
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps);
        }

        checkAuth = props => {
            if (!props.isLoggedIn) {
                props.replace({
                    pathname: '/login',
                    state: {
                        nextLocation: {
                            pathname: props.pathname,
                            query: props.query,
                        }
                    }
                });
            }
        }
        render(){
            
            const { isLoggedIn, ...otherProps } = this.props;

            return isLoggedIn
                ? <Component {...otherProps} />
                : null;
        }
    }

    return AuthentificatedComponent;
}

const mapStateToProps = state => ({
    isLoggedIn: isLoggedIn(state),
    pathname: state.routing.locationBeforeTransitions.pathname,
    query: state.routing.locationBeforeTransitions.query,
});