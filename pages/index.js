
// pages/index.js
import { useEffect, useState } from "react";
import locations from "../data/locations";
import { getTimeInTimeZone } from "../utils/getTime";

export default function Home() {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      locations.forEach((location) => {
        newTimes[location.name] = getTimeInTimeZone(location.timeZone);
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>World Clock</h1>
      <div style={styles.clockContainer}>
        {locations.map((location) => (
          <div key={location.name} style={styles.locationCard}>
            <h2>{location.name}</h2>
            <p style={styles.time}>{times[location.name]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif" },
  header: { textAlign: "center", marginBottom: "20px" },
  clockContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  locationCard: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
  },
  time: { fontSize: "1.5em", marginTop: "10px", color: "#333" },
};
