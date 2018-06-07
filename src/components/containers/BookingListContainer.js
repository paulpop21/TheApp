import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';

import BookingListItem from '../presentations/BookingListItem';
import Loading from '../presentations/shared/Loading';

import * as carActions from '../../actions/car';

import { BOOKINGS_DETAILS_SCREEN } from '../../constants/navigation';

class BookingListContainer extends Component {
  componentDidMount() {
    this.props.getAllCars();
  }


  _handleSelectBooking = (selectedCar) => {
    this.props.navigation.navigate(BOOKINGS_DETAILS_SCREEN, { selectedCar });
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
