import axios from "axios";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        setLocation(exactLocation);
      } catch (err) {
        setError("Failed to fetch location");
        console.log(err);
      } finally {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);
  return { location, error, setLocation, getLocation };
};

export default useLocation;
