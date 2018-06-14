import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Image,
  Text, TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

const BookingListItem = ({
  booking,
  bookingType,
  handleSelectBooking,
  isEditable,
  isNew,
}) => (
  <React.Fragment>
    <View style={ styles.lineSeparator } />
    <View style={ styles.itemContainer }>
      <View
        style={ styles.imageContainer }
      >
        <Image
          source={{ uri: booking.car.image }}
          style={ styles.itemImage }
        />
      </View>
      <View style={ styles.detailsContainer }>
        <Text style={ styles.text }>{ `${booking.car.mark} - ${booking.car.model}` }</Text>
        {
            isNew ? (
              <React.Fragment>
                <Text style={ styles.text }>{ `${booking.car.price}$/Hour` }</Text>
                <Text style={ styles.text }>{ `${booking.distance} Km away` }</Text>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Text style={ styles.text }>{ moment(booking.startDate).format('D/M/YY hh:mm a') }</Text>
                <Text style={ styles.text }>{ moment(booking.endDate).format('D/M/YY hh:mm a') }</Text>
              </React.Fragment>
            )
          }
      </View>
      <View style={ styles.actionContainer }>
        <TouchableOpacity
          style={ styles.actionButton }
          onPress={ () => handleSelectBooking(booking, bookingType) }
        >
          <Text style={ styles.text }>{ isEditable ? 'Edit' : (isNew ? 'Book' : 'View') }</Text>
        </TouchableOpacity>
      </View>
    </View>
  </React.Fragment>
);

BookingListItem.propTypes = {
  booking: PropTypes.object.isRequired,
  handleSelectBooking: PropTypes.func.isRequired,
  bookingType: PropTypes.string.isRequired,
  isEditable: PropTypes.bool,
  isNew: PropTypes.bool,
};

BookingListItem.defaultProps = {
  isEditable: false,
  isNew: false,
};

const styles = StyleSheet.create({
  lineSeparator: {
    height: 1,
    backgroundColor: '#000',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 40,
  },
  detailsContainer: {
    flex: 2,
    alignItems: 'center',
  },
  actionContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  actionButton: {
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
    marginVertical: 3,
  },
});

export default BookingListItem;
