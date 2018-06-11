const dec2Rad = (deg) => {
  return deg * (Math.PI / 180);
};

export const calculateDistance = (
  { latitude : latitudeFrom = 46.769287, longitude: longitudeFrom = 23.588345 },
  { latitude : latitudeTo = 46.768514, longitude: longitudeTo = 23.625948 }
) => {
  console.log(latitudeFrom, latitudeTo)
  const R = 6371; // Radius of the earth in km
  const dLat = dec2Rad(latitudeTo - latitudeFrom);
  const dLon = dec2Rad(longitudeTo - longitudeFrom);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(dec2Rad(latitudeFrom)) * Math.cos(dec2Rad(latitudeTo)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  return (R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)))).toFixed(2); // Distance in km
};
