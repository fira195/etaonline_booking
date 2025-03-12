import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
  Divider,
} from "@mui/material";
import TicketList from "../component/TicketUi";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/my-tickets")
      .then((response) => {
        setTickets(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  const sampleTickets = [
    {
      id: 1,
      date: "2023-03-01",
      time: "20:00",
      seat: "A1",
      name: "John Doe",
      sideno: "12345",
      plate: "ABC123",
      price: "100 ETB",
      from: "Welayita sodo",
      to: "Las Vagas",
      ticketnumber: "1234567890",
    },
    {
      id: 2,
      date: "2023-03-15",
      time: "19:00",
      seat: "B2",
      name: "Jane Doe",
      sideno: "67890",
      plate: "XYZ789",
      price: "200 ETB",
      from: "Welayita sodo",
      to: "Las Vagas",
      ticketnumber: "9876543210",
    },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Tickets
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {sampleTickets.map((ticket) => (
            <Grid item xs={12} sm={6} md={6} key={ticket.id}>
              <Card>
                <CardContent>
                  <div>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography variant="h6">
                          {ticket.from} → {ticket.to}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography color="textSecondary">
                          {ticket.date}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider  style={{marginTop: 10, marginBottom: 10,  }}/>
                    <Grid style={{ marginTop: 10 }} container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <div>
                          <Typography
                            style={{
                              color: "blue",
                              fontWeight: "bold",
                              fontSize: "small",
                            }}
                            variant="body1"
                          >
                            Seat
                          </Typography>
                          <Typography variant="body1">{ticket.seat}</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <div>
                          <Typography
                            style={{
                              color: "blue",
                              fontWeight: "bold",
                              fontSize: "small",
                            }}
                            variant="body1"
                          >
                            Name
                          </Typography>
                          <Typography variant="body1">{ticket.name}</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <div>
                          <Typography
                            style={{
                              color: "blue",
                              fontWeight: "bold",
                              fontSize: "small",
                            }}
                            variant="body1"
                          >
                            Sideno
                          </Typography>
                          <Typography variant="body1">
                            {ticket.sideno}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <div>
                          <Typography
                            style={{
                              color: "blue",
                              fontWeight: "bold",
                              fontSize: "small",
                            }}
                            variant="body1"
                          >
                            Plate
                          </Typography>
                          <Typography variant="body1">
                            {ticket.plate}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <div>
                          <Typography
                            style={{
                              color: "blue",
                              fontWeight: "bold",
                              fontSize: "small",
                            }}
                            variant="body1"
                          >
                            Price
                          </Typography>
                          <Typography variant="body1">
                            {ticket.price}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <div>
                          <Typography
                            style={{
                              color: "blue",
                              fontWeight: "bold",
                              fontSize: "small",
                            }}
                            variant="body1"
                          >
                            Date
                          </Typography>
                          <Typography variant="body1">{ticket.date}</Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <div>
                          <Typography
                            style={{
                              color: "blue",
                              fontWeight: "bold",
                              fontSize: "small",
                            }}
                            variant="body1"
                          >
                            Time
                          </Typography>
                          <Typography variant="body1">{ticket.time}</Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <CardContent style={{ marginTop: 10 }}>
                    <div>
                      <Typography
                        style={{
                          color: "blue",
                          fontWeight: "bold",
                          fontSize: "small",
                        }}
                        variant="body1"
                      >
                        Ticket Number
                      </Typography>
                      <Typography variant="body1">
                        {ticket.ticketnumber}
                      </Typography>
                    </div>
                  </CardContent>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
