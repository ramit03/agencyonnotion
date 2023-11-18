// fetchLocation.ts
import axios from 'axios';

const fetchCountryCode = async (latitude: number, longitude: number): Promise<string | null> => {
  const apiKey = process.env.NEXT_PUBLIC_LOCATION_API; // Your LocationIQ API key
  const url = `https://eu1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`;

  try {
    const response = await axios.get(url);
    return response.data.address.country_code.toUpperCase();
  } catch (error) {
    console.error('Error fetching country code:', error);
    return null;
  }
};

export const getLocationCountryCode = (): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const countryCode = await fetchCountryCode(position.coords.latitude, position.coords.longitude);
          resolve(countryCode);
        },
        error => {
          console.warn(`ERROR(${error.code}): ${error.message}`);
          reject(null);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      reject(null);
    }
  });
};
