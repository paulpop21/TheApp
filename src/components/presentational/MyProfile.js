import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PhotoUpload from 'react-native-photo-upload';

const MyProfile = ({ userDetails: { email, photo }, handleUploadPhoto }) => (
  <SafeAreaView style={ styles.container }>
    <View style={{ flex: 0.5 }}>
      <PhotoUpload
        width={ 150 }
        height={ 150 }
        onPhotoSelect={ handleUploadPhoto }
      >
        <Image
          style={ styles.image }
          resizeMode='cover'
          source={{
            uri: photo,
          }}
        />
        <Text style={ styles.text }>{ email }</Text>
      </PhotoUpload>
    </View>
  </SafeAreaView>
);

MyProfile.propTypes = {
  userDetails: PropTypes.object.isRequired,
  handleUploadPhoto: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 30,
    color: '#05a5d1',
    alignSelf: 'center',
  },
  text: {
    color: '#05a5d1',
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default MyProfile;
