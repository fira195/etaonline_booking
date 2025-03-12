import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DateTab from "../component/Date";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";

const SearchPage = () => {
  const { travelDate, startCity, destination } = useSelector(
    (state) => state.travelInfo
  );
  const flights = [
    {
      id: 1,
      date: moment(travelDate).format("DD MMM"),
      time: "23:40",
      from: "Welayita Sodo",
      to: "LA",
      stops: 12,
      duration: 65,
      economyPrice: "146,116 ETB",
      level: 3,
      businessPrice: "333,444 ETB",
    },
    {
      id: 2,
      date: "08 MAR",
      time: "23:40",
      from: "Welayita Sodo",
      to: "NYC",
      stops: 12,
      duration: 65,
      economyPrice: "146,116 ETB",
      level: 3,
      businessPrice: "337,434 ETB",
    },
    {
      id: 2,
      date: "08 MAR",
      time: "23:40",
      from: "Welayita Sodo",
      to: "NYC",
      stops: 12,
      duration: 65,
      economyPrice: "146,116 ETB",
      level: 3,
      businessPrice: "337,434 ETB",
    },
    {
      id: 2,
      date: "08 MAR",
      time: "23:40",
      from: "Welayita Sodo",
      to: "NYC",
      stops: 12,
      duration: 65,
      economyPrice: "146,116 ETB",
      level: 3,
      businessPrice: "337,434 ETB",
    },
    {
      id: 2,
      date: "08 MAR",
      time: "23:40",
      from: "Welayita Sodo",
      to: "NYC",
      stops: 12,
      duration: 65,
      economyPrice: "146,116 ETB",
      level: 3,
      businessPrice: "337,434 ETB",
    },
    {
      id: 2,
      date: "08 MAR",
      time: "23:40",
      from: "Welayita Sodo",
      to: "NYC",
      stops: 12,
      duration: 65,
      economyPrice: "146,116 ETB",
      level: 3,
      businessPrice: "337,434 ETB",
    },
    {
      id: 2,
      date: "08 MAR",
      time: "23:40",
      from: "Welayita Sodo",
      to: "NYC",
      stops: 12,
      duration: 65,
      economyPrice: "146,116 ETB",
      level: 3,
      businessPrice: "337,434 ETB",
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate=useNavigation()

  return (
    <>
      <DateTab />

      <Container maxWidth="md" sx={{ py: 5 }}>
        <Grid container spacing={3}>
          {flights.map((flight) => (
            <Grid item xs={12} key={flight.id}>
              <Card elevation={3}>
                <CardContent>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">
                        {flight.from} → {flight.to}
                      </Typography>
                      <Typography color="textSecondary">
                        Level {flight.level}
                      </Typography>
                      <Typography color="textSecondary">
                        {flight.stops} Available Seats
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color="textSecondary">
                        {flight.date}, {flight.time}
                      </Typography>
                      
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="flex-end"
                    alignItems="center"
                    sx={{ mt: 2 }}
                  >
                    <Typography variant="h6" color="error.main">
                      {flight.businessPrice}
                    </Typography>
                  </Grid>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    color="primary"
                    onClick={() => navigate('seats')}
                  >
                    Select Seats
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default SearchPage;
