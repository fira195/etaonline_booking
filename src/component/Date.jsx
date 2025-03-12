import  React, { useEffect, useRef, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { setTravelDate } from '../redux/actions/travelInfoAction';
import { extendMoment } from 'moment-range';

export default function DateTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const Moment = extendMoment(moment);
  const ref = useRef();
  const dispatch = useDispatch();

  const { travelDate } = useSelector((state) => state.travelInfo);
  const [date, setDate] = useState([]);

  const ITEM_WIDTH = 150;
  const ITEM_SPACING = 12;

  useEffect(() => {
    const startDate = moment(travelDate).startOf('week');
    const endDate = moment(travelDate).endOf('week');

    const newDate = Array.from(Moment.range(startDate, endDate).by('day')).map((date) => ({
      date: date.date(),
      day: date.format('ddd'),
      month: date.format('MMM'),
      fullDate: date,
    }));

    setDate(newDate);
  }, [moment(travelDate).week()]);

  useEffect(() => {
    if (date.length > 0) {
      const index = date.findIndex((d) => d.date === moment(travelDate).date());

      if (index !== -1) {
        setTimeout(() => {
          ref.current?.scrollTo({
            x: index * (ITEM_WIDTH + ITEM_SPACING), 
            animated: true,
          });
        }, 300)
      }
    }
  }, [date]);

  return (
    <Box sx={{margin: 'auto', width: 'fit-content'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
       {
        date.map((d) => (
          <Tab
            label={`${d.day} 
            ${d.date} ${d.month}`}
            key={d.date}
            onClick={() => dispatch(setTravelDate(d.fullDate))}
          />
        ))
       }
      </Tabs>
    </Box>
  );
}
