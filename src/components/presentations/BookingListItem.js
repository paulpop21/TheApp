import React from 'react';
import {
  Image,
  Text, TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';

const BookingListItem = ({ item , handleSelectBooking }) => {
  return (
    <React.Fragment>
      <View style={ styles.lineSeparator } />
      <View style={ styles.itemContainer }>
        <View
          style={ styles.imageContainer }
        >
          <Image
            source={{ uri: item.image }}
            style={ styles.itemImage }
          />
        </View>
        <View style={ styles.detailsContainer }>
          <Text style={ styles.text }>{ item.mark }</Text>
          <Text>-</Text>
          <Text style={ styles.text }>{ item.model }</Text>
        </View>
        <View
          style={ styles.actionContainer }
        >
          <TouchableOpacity
            style={ styles.actionButton }
            onPress={ () => handleSelectBooking(item) }
          >
            <Text style={ styles.text }>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
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
  },
});

export default BookingListItem;
