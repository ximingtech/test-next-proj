import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import DatePicker from '../DatePicker';
import CusButton from '../Button';
// Generate Order Data
function createData(id, dateCreate, name, totalSpend, balance, status, lastActive) {
  return { id, dateCreate, name, totalSpend, balance, status, lastActive };
}

const rows = [
  createData(0, '31 Mar, 2021', 'Elvis Presley', 400.00, 10.00, 'Active', '1 Apr, 2021'),
  createData(1, '24 Dec, 2019', 'Paul McCartney', 600.00, 0.00, 'Inactive', '15 Jul, 2020'),
  createData(2, '17 Feb, 2020', 'Tom Scholz', 24000.00, 1823.35, 'Active', '27 Mar, 2021'),
  createData(3, '16 Mar, 2020', 'Michael Jackson', 1000.00, 0.00, 'Inactive', '8 Aug, 2020'),
  createData(4, '15 Aug, 2020', 'Bruce Springsteen', 346.23, 23.77, 'Active', '31 Mar, 2021'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  datePicker: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  styleSpaceBetween: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.styleSpaceBetween}>
        <Title>Customer List</Title>
        <CusButton pattern="contained" name="Add Customer"/>
      </div>
      <div className={classes.datePicker}>
        <DatePicker label="Date from" />
        <DatePicker label="Date to" />
        <CusButton name="Search" pattern="outlined"/>
        <CusButton name="Export" pattern="outlined"/>
      </div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Created</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Total Spend</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last Active</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.dateCreate}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.totalSpend}</TableCell>
              <TableCell>{row.balance}</TableCell>
              <TableCell>{row.lastActive}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right"><CusButton name='edit' /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more customers
        </Link>
      </div>
    </React.Fragment>
  );
}