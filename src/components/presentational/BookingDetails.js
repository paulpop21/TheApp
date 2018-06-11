import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

import {
  CustomButton,
  CustomDatePicker,
  BookingDetailsDatePicker,
} from './';

const BookingDetails = ({
  handleChangeDate,
  handleOpenDatePicker,
  handleSubmit,
  handleToggleMap,
  isEditable,
  isNewBooking,
  isMapDisplayed,
  dateItem: {
    activeDatePicker,
    startDate,
    endDate,
  },
  bookingItem: {
    car: {
      image,
      mark,
      model,
      parking: {
        coordinates: {
          latitude,
          longitude,
        },
        name: parkingName,
      }
    },
    startDate: bookingStartDate = null,
    endDate: bookingEndDate = null,
    bookingPrice,
  }
}) => {
  const isButtonDisabled = !isMapDisplayed && !activeDatePicker && (!startDate || !endDate);
  const buttonText = isMapDisplayed ? 'Close' : activeDatePicker ? 'Choose' : isNewBooking ? 'Book' : 'Change';

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.itemContainer }>
        <Image
          source={{ uri: image }}
          style={ styles.image }
        />
      </View>
      <View style={ styles.itemContainer }>
        {
          isMapDisplayed ? (
            <MapView
              style={ styles.map }
              region={{
                latitudeDelta: 0.0043,
                longitudeDelta: 0.0034,
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
              }}
            >
              <Marker
                coordinate={{
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
                }}
                title={ parkingName }
              />
            </MapView>
          ) : (
            <React.Fragment>
              <View style={ styles.rowContentContainer }>
                <View style={[styles.centeredContentContainer] }>
                  <Text>Mark:</Text>
                  <Text style={ styles.text }>{ mark }</Text>
                </View>
                <View style={ styles.centeredContentContainer }>
                  <Text>Model:</Text>
                  <Text style={ styles.text }>{ model }</Text>
                </View>
              </View>
              <View style={{ flex: 2 }}>
                {
                  Platform.OS === 'ios' && isEditable && activeDatePicker ? (
                    <View
                      style={[styles.itemContainer, { justifyContent: 'center' }]}
                    >
                      <CustomDatePicker
                        selectedDate={ activeDatePicker === 'startDate' ? startDate : endDate }
                        handleChangeDate={ handleChangeDate }
                      />
                    </View>

                  ) : (
                    <React.Fragment>
                      <View style={ styles.rowContentContainer }>
                        <BookingDetailsDatePicker
                          disabled={ !isEditable }
                          title='Start Date:'
                          date={ startDate || (bookingStartDate ? new Date(bookingStartDate) : null) }
                          dateType='startDate'
                          handleOpenDatePicker={ handleOpenDatePicker }
                        />
                        <BookingDetailsDatePicker
                          disabled={ !isEditable }
                          title='End Date:'
                          date={ endDate || (bookingEndDate ? new Date(bookingEndDate) : null) }
                          dateType='endDate'
                          handleOpenDatePicker={ handleOpenDatePicker }
                        />
                      </View>
                      <View style={ styles.rowContentContainer }>
                        <View style={ styles.centeredContentContainer }>
                          <Text>Price:</Text>
                          <Text style={ styles.text }>{ `${ bookingPrice }$` }</Text>
                        </View>
                        <TouchableOpacity
                          style={ styles.centeredContentContainer }
                          onPress={ handleToggleMap }
                        >
                          <Text>View</Text>
                          <Text style={ styles.text }>Parking Location</Text>
                        </TouchableOpacity>
                      </View>
                    </React.Fragment>
                  )
                }
              </View>
            </React.Fragment>
          )
        }
        <View style={ styles.centeredContentContainer }>
          {
            (isMapDisplayed || isEditable) && (
              <CustomButton
                buttonText={ buttonText }
                customButtonStyle={ isButtonDisabled ? { opacity: 0.5 } : {} }
                customTextStyle={ isButtonDisabled ? { color: '#fff' } : {} }
                onPressHandle={ () => {
                  isMapDisplayed ? handleToggleMap() : activeDatePicker ? handleOpenDatePicker(null) : handleSubmit()
                } }
                disabled={ isButtonDisabled }
              />
            )
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  itemContainer: {
    flex: 1,
  },
  centeredContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
    flex: 3,
  },
  text: {
    fontWeight: 'bold' ,
    fontSize: 16,
    color: '#05a5d1',
  },
  rowContentContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#001f25',
    borderBottomWidth: 0.5
  }
});

export default BookingDetails;
