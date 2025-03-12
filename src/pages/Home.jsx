import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  setDestinationCity,
  setStartCity,
  setTravelDate,
} from "../redux/actions/travelInfoAction";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

export default function Home() {
  const { travelDate, startCity, destination } = useSelector(
    (state) => state.travelInfo
  );
  const dispatch = useDispatch();

  const handleTravelDateChange = (date) => {
    dispatch(setTravelDate(date));
  };

  const handleStartCityChange = (event) => {
    dispatch(setStartCity(event.target.value));
  };

  const handleDestinationCityChange = (event) => {
    dispatch(setDestinationCity(event.target.value));
  };

  const cities = [
    "NYC",
    "LA",
    "Chicago",
    "Houston",
    "Miami",
    "San Francisco",
    "Seattle",
    "Boston",
    "Welayita Sodo",
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/bus.webp')",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "400px",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Search
          </Typography>

          {/* Leaving From */}
          <TextField
            fullWidth
            label="Leaving from"
            variant="outlined"
            value={startCity}
            onChange={handleStartCityChange}
            margin="normal"
            inputProps={{ list: "citiesList" }}
            InputProps={{
              startAdornment: (
                <FaMapMarkerAlt style={{ marginRight: 8, color: "red" }} />
              ),
            }}
          />

          {/* Destination */}
          <TextField
            fullWidth
            label="Destination"
            variant="outlined"
            value={destination}
            onChange={handleDestinationCityChange}
            margin="normal"
            inputProps={{ list: "citiesList" }}
            InputProps={{
              startAdornment: (
                <FaMapMarkerAlt style={{ marginRight: 8, color: "red" }} />
              ),
            }}
          />

          {/* Datalist for city suggestions */}
          <datalist id="citiesList">
            {cities.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>

          {/* Date Picker */}
          <LocalizationProvider style={{background: "red"}} dateAdapter={AdapterMoment}>
            <DatePicker
              fullWidth
              label="Travel Date"
              value={travelDate ? moment(travelDate) : null}
              onChange={handleTravelDateChange}
              renderInput={(params) => (
                <TextField fullWidth margin='normal' {...params} />
              )}
            />
          </LocalizationProvider>

          {/* Search Button */}
          <Button
            fullWidth
            variant="contained"
            color="success"
            style={{ marginTop: "20px" }}
            disabled={!destination || !travelDate}
          >
            Search
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
