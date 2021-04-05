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
function createData(id, prodName, curStock, soldStock, lastUpdate) {
  return { id, prodName, curStock, soldStock, lastUpdate };
}

const rows = [
  createData(0, 'Item 1', '54', '203', '1 Apr, 2021'),
  createData(1, 'Item 2', '234', '1234', '15 Jul, 2020'),
  createData(2, 'Item 3', '1023', '112', '27 Mar, 2021'),
  createData(3, 'Item 4', '20', '89', '8 Aug, 2020'),
  createData(4, 'Item 5', '6', '397', '31 Mar, 2021'),
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
        <Title>Products List</Title>
        <CusButton pattern="contained" name="Add Product"/>
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
            <TableCell>Product Name</TableCell>
            <TableCell>Current Stock</TableCell>
            <TableCell>Sold Stock</TableCell>
            <TableCell>Last Update</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.prodName}</TableCell>
              <TableCell>{row.curStock}</TableCell>
              <TableCell>{row.soldStock}</TableCell>
              <TableCell>{row.lastUpdate}</TableCell>
              <TableCell align="right"><CusButton name='edit' /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more products
        </Link>
      </div>
    </React.Fragment>
  );
}