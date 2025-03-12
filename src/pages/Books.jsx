import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Tabs,
  Tab,
  Grid,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useNavigation } from "react-router-dom";

export default () => {
  const [loading, setLoading] = useState(true);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [books, setBooks] = useState([
    {
      id: 1,
      date: "2023/01/31",
      from: "Welayita Sode",
      to: "Las",
      busName: "Autobis Tera",
      busStation: "Kality",
      isConfirmed: true,
    },
    {
      id: 2,
      date: "2023/02/28",
      from: "Addis",
      to: "Dire",
      busName: "Selam",
      busStation: "Gurd Shola",
      isConfirmed: false,
    },
    {
      id: 3,
      date: "2023/02/25",
      from: "Addis",
      to: "Gondar",
      busName: "Sky",
      busStation: "Meri",
      isConfirmed: false,
    },
    {
      id: 4,
      date: "2023/03/01",
      from: "Addis",
      to: "Hawassa",
      busName: "Saba",
      busStation: "Kality",
      isConfirmed: true,
    },
    {
      id: 5,
      date: "2023/03/03",
      from: "Addis",
      to: "Nekemte",
      busName: "Ethio",
      busStation: "Gurd Shola",
      isConfirmed: false,
    },
  ]);

  const navigate=useNavigation()

  useEffect(() => {
    if (value === 0) {
      setBooks(books.filter((book) => book.date <= new Date().toISOString().split('T')[0]));
    } else {
      setBooks(books.filter((book) => book.date > new Date().toISOString().split('T')[0]));
    }
    setLoading(false);
  }, [value]);

  return (
    <Container>
      {/* <Typography variant="h4" gutterBottom>
        My Books
      </Typography> */}
      <div style={{marginTop: 10,marginBottom: 10, backgroundColor: 'red', width: '100%', height: '200px', borderRadius: 10 }}>

      </div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Past Trips" />
        <Tab label="Upcoming Trips" />
      </Tabs>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <Card>
                <CardContent>
                  <div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "row",
                        }}
                      >
                        <Typography style={{ fontWeight: "bold" , fontSize: 'small'}}>{book.date}</Typography>
                        <Typography>{book.isConfirmed ? " " : " "}</Typography>
                      </div>
                      {/* June 16, 2020 */}
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                          <Typography style={{fontWeight: 'bold'}}>{book.from}</Typography>
                          <Typography style={{fontSize: 'small'}}>{book.busStation}</Typography>
                        </div>
                        <div>{'----->'}</div>
                        <div>
                          <Typography style={{fontWeight: 'bold'}}>{book.to}</Typography>
                          <Typography style={{fontSize: 'small'}}>{book.busName}</Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>navigate('tickets')}>
                    Show Tickets
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );

}
