import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import AuthForm from '../presentations/AuthForm';

import * as userActions from '../../actions/user';

import { APP_STACK, LOGIN_SCREEN } from '../../constants/navigation';
import { USER_LOGIN_ERROR } from '../../constants/actionTypes';

class UserAuthContainer extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${ navigation.state.params.screenTitle }`,
  });

  _handleSubmit = async (credentials) => {
    const { navigation: { state: { params } } } = this.props;

    try {
      if (params.screenName === LOGIN_SCREEN) {
        await this.props.loginUser(credentials);
      } else {
        await this.props.registerUser(credentials);
      }

      this.props.navigation.navigate(APP_STACK);
    } catch (error) {
      if (error.type === USER_LOGIN_ERROR)
        throw new SubmissionError({ password: 'Invalid Credentials' });
    }
  };

  _handleInputFocus = () => {
    this.myRef.current.focus();
  };

  render() {
    const { loading, navigation: { state: { params } } } = this.props;
    const formType = params.screenName === LOGIN_SCREEN ? 'Login' : 'SignUp';

    return (
      <AuthForm
        title={ `${ formType } to TheApp` }
        buttonTitle={ formType }
        onSubmit={ this._handleSubmit }
        passwordRef={ this.myRef }
        isLoading={ loading }
        handleInputFocus={ this._handleInputFocus }
      />
    );
  }
}

const mapStateToProps = ({ user: { loading } }) => {
  return {
    loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...userActions,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthContainer);
