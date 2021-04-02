import {React} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {
  Link,
} from "react-router-dom";

export const mainListItems = (
  <div>
    {/* <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon style={{color:'white'}}/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      </Link>
      <Link to="/order">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon style={{color:'white'}} />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
      </Link>
      <Link to="/customer">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon style={{color:'white'}} />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      </Link>
      <Link to="/report">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon style={{color:'white'}} />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      </Link>
      <Link to="/integration">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon style={{color:'white'}} />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </Link> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{color:'white'}} />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{color:'white'}} />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{color:'white'}} />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);