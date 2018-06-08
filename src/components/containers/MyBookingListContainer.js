import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  SectionList, Text, View,
} from 'react-native';

import BookingListItem from '../presentations/BookingListItem';
import Loading from '../presentations/shared/Loading';

import * as bookingActions from '../../actions/booking';

import { BOOKINGS_DETAILS_SCREEN } from '../../constants/navigation';

class MyBookingListContainer extends Component {
  componentDidMount() {
    this.props.getAllBookings();
  }


  _handleSelectBooking = (selectedCar) => {
    this.props.navigation.navigate(BOOKINGS_DETAILS_SCREEN, { selectedCar });
  };

  render() {
    const { booking: { bookingsList, loading } } = this.props;

    if (loading) {
      return <Loading />
    }

    return (
      <SafeAreaView style={ styles.container }>
        <SectionList
          sections={ bookingsList }
          renderItem={({ item, index, section }) => <BookingListItem item={ item.car } handleSelectBooking={ this._handleSelectBooking } />}
          renderSectionHeader={({section: {title}}) => (
            <React.Fragment>
              {/*<View style={{ height: 1, backgroundColor: '#000' }}/>*/}
              <View
                style={{ justifyContent: 'center', alignItems: 'center', height: 70, backgroundColor: '#001f25' }}
              >
                <Text style={{fontWeight: 'bold', color: '#05a5d1'}}>{title}</Text>
              </View>
            </React.Fragment>
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

const mapStateToProps = ({ booking }) => {
  return {
    booking
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...bookingActions,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBookingListContainer);
