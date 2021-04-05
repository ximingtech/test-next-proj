import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid } from 'recharts';
import Title from '../Title';

// Generate Registration Data
function createData(month, amount) {
  return { month, amount };
}

const data = [
  createData('Jan', 30),
  createData('Feb', 60),
  createData('Mar', 45),
  createData('Apr', 100),
  createData('May', undefined),
  createData('Jun', undefined),
  createData('Jul', undefined),
  createData('Aug', undefined),
  createData('Sep', undefined),
  createData('Oct', undefined),
  createData('Nov', undefined),
  createData('Dec', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Months</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke={theme.palette.text.secondary}>
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
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}