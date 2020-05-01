import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  SwipeableDrawer,
  Divider,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Menu,
  MoveToInbox,
  Mail,
} from "@material-ui/icons";

import "./AppBar.css";

const CustomAppBarComponent = () => {
  const [openDrawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!openDrawer);
  };

  const drawerList = () => (
    <div>
      <div className="drawerHeader" />
      <Divider />
      <List>
        {["DashBoard", "Reset"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <div className="mainToolBar">
            <div className="childToolBar1">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                edge="start"
              >
                <Menu />
              </IconButton>
              <Typography variant="subtitle1" noWrap>
                DashBoard
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={"left"}
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {drawerList()}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default CustomAppBarComponent;
