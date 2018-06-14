import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MyProfile } from '../presentational';

import * as userActions from '../../actions/user';

class MyProfileContainer extends Component {
  _handleUploadPhoto = (photo) => {
    this.props.uploadPhoto(`data:image/jpg;base64,${photo}`);
  };

  render() {
    return (
      <MyProfile
        userDetails={ this.props.userDetails }
        handleUploadPhoto={ this._handleUploadPhoto }
      />
    );
  }
}

MyProfileContainer.propTypes = {
  userDetails: PropTypes.object.isRequired,
  uploadPhoto: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user: { userDetails } }) => ({
  userDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...userActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileContainer);
