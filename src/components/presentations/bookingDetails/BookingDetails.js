import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  View,
  Platform,
} from 'react-native';
import CustomButton from "../shared/CustomButton";
import CustomDatePicker from "../shared/CustomDatePicker";
import BookingDetailsDatePicker from "./BookingDetailsDatePicker";

const BookingDetails = ({
  handleChangeDate,
  handleOpenDatePicker,
  handleSubmit,
  isEditable,
  isNewBooking,
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
    },
    startDate: bookingStartDate = null,
    endDate: bookingEndDate = null,
  }
}) => {
  const isButtonDisabled = !activeDatePicker && (!startDate || !endDate);

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.itemContainer }>
        <Image
          source={{ uri: image }}
          style={ styles.image }
        />
      </View>
      <View style={ styles.itemContainer }>
        <View style={ styles.rowContentContainer }>
          <View style={[styles.centeredContentContainer , { borderRightColor: '#001f25', borderRightWidth: 0.5 }] }>
            <Text>Mark:</Text>
            <Text style={ styles.text }>{ mark }</Text>
          </View>
          <View style={ styles.centeredContentContainer }>
            <Text>Model:</Text>
            <Text style={ styles.text }>{ model }</Text>
          </View>
        </View>
        <View style={[ styles.rowContentContainer, { flex: 2 } ]}>
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
              </React.Fragment>
            )
          }
        </View>
        <View style={ styles.centeredContentContainer }>
          {
            isEditable && (
              <CustomButton
                buttonText={ activeDatePicker ? 'Choose' : isNewBooking ? 'Book' : 'Change' }
                customButtonStyle={ isButtonDisabled ? { opacity: 0.5 } : {} }
                onPressHandle={ () => { activeDatePicker ? handleOpenDatePicker(null) : handleSubmit() } }
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
