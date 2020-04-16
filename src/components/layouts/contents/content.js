import React, { Suspense } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

// Components
import Sidebar from "../sidebar/Sidebar";
import { Switch, Route } from "react-router-dom";
import routes from "../../../routes/Router";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: true
        })}
      >
        <div className={classes.toolbar} />
        {/* Content Routes */}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}
