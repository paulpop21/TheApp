import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StatusBar
} from 'react-native';

import BookingListItem from '../presentations/BookingListItem';

import * as carActions from '../../actions/car';

import { BOOKINGS_DETAILS_SCREEN } from '../../constants/navigation';

class BookingListContainer extends Component {
  componentDidMount() {
    console.log('props', this.props);
    this.props.getAllCars();
  }


  _handleSelectBooking = (selectedCar) => {
    this.props.navigation.navigate(BOOKINGS_DETAILS_SCREEN, { selectedCar });
  };

  render() {
    const { car: { carsList, loading } } = this.props;

    if (loading) {
      return [
        <ActivityIndicator key='ActivityIndicator' />,
        <StatusBar key='StatusBar' barStyle='default' />
      ];
    }

    return (
      <SafeAreaView style={ styles.container }>
        <FlatList
          data={ carsList }
          renderItem={({ item }) => <BookingListItem item={ item } handleSelectBooking={ this._handleSelectBooking } />}
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

const mapStateToProps = (state) => {
  return {
    car: state.car
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...carActions,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingListContainer);
