import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts';
import Title from '../Title';
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from '../DatePicker';
import CusButton from '../Button';

// Generate Registration Data
function createData(prodName, soldQty) {
  return { prodName, soldQty };
}

const data = [
  createData('Item 1', 2873),
  createData('Item 2', 2329),
  createData('Item 3', 1347),
  createData('Item 4', 1168),
  createData('Item 5', 1029),
  createData('Item 6', 1028),
  createData('Item 7', 873),
  createData('Item 8', 567),
  createData('Item 9', 288),
  createData('Item 10', 209)
];

const useStyles = makeStyles((theme) => ({
    datePicker: {
      display: 'flex',
      flexWrap: 'wrap',
    }
}));

// const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];

export default function Chart() {
  //const theme = useTheme();
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Top 10 Products Sold</Title>
      {/* <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="prodName" stroke={theme.palette.text.secondary}>
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Customer
            </Label>
          </YAxis>
          <Bar dataKey="soldQty" fill={theme.palette.primary.main}/>
        </BarChart>
      </ResponsiveContainer> */}
      <div className={classes.datePicker}>
        <DatePicker label="Date from" />
        <DatePicker label="Date to" />
        <CusButton name="Search" pattern="outlined"/>
      </div>
      <ResponsiveContainer width={1500} height={500}>
      <BarChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="prodName" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="soldQty" fill="#8884d8" />
    </BarChart>
    </ResponsiveContainer>
    </React.Fragment>
  );
}