import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';

import { BookingListItem, Loading } from '../presentational';

import * as carActions from '../../actions/car';

import { BOOKINGS_DETAILS_SCREEN } from '../../constants/navigation';
import { calculateDistance } from '../../utils';

class BookingListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCoordinates: {},
    };

    this.watchId = null;
  }

  componentDidMount() {
    this.props.getAllCars();

    this.watchId = navigator.geolocation.watchPosition((location) => {
      this.setState({
        currentCoordinates: location.coords,
      });
    });

  }

  componentWillUnmount() {
    this.props.clearCarsList();

    if(this.watchId){
      navigator.geolocation.clearWatch(this.watchId);
    }
  }

  _handleSelectBooking = (selectedBooking, bookingType) => {
    this.props.navigation.navigate(
      BOOKINGS_DETAILS_SCREEN,
      {
        selectedBooking,
        bookingType
      });
  };

  render() {
    const { car: { carsList, loading } } = this.props;

    if (loading) {
      return <Loading />
    }

    return (
      <SafeAreaView style={ styles.container }>
        <FlatList
          data={ carsList }
          extraData={ this.state.currentCoordinates }
          renderItem={({ item }) => (
            <BookingListItem
              isNew
              booking={{
                car: item,
                distance: calculateDistance(this.state.currentCoordinates, item.parking.coordinates),
              }}
              bookingType='New Booking'
              handleSelectBooking={ this._handleSelectBooking }
            />
          )}
          keyExtractor={ item => item._id }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = ({ car }) => {
  return {
    car
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...carActions,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingListContainer);
