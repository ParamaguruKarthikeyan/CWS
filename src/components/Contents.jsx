import "../styles/Content.scss";

import { ContentLoading, ErrorBoundary } from "./Utils";
import { HomePage, JSONPage, LoginPage, TablePage } from "./pages";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CommonSlice } from "../redux/slices";
import Nav from "./Nav";
import React from "react";

export default function Contents() {
  const clientId = window.SERVER_CONFIG.GOOGLE_CLIENT_ID;
  const dispatch = useDispatch();
  const { googleResponse, returnTo } = useSelector((state) => state.common);

  function renderContent(
    ContentComponent,
    message = "Error in Rendering Child Components",
    compoentProps = {}
  ) {
    return function render(routeProps) {
      return (
        <ErrorBoundary message={message}>
          <ContentComponent {...compoentProps} />
        </ErrorBoundary>
      );
    };
  }

  if (!googleResponse?.success) {
    if (
      !location.pathname.startsWith("/app/login") &&
      !location.pathname === "/"
    ) {
      dispatch(CommonSlice.setReturnTo(location.pathname));
    }
    return (
      <>
        <Redirect to="/app/login" />
        <LoginPage />
      </>
    );
  }
  // if (returnTo === location.pathname) {
  //   dispatch(CommonSlice.reSetReturnTo());
  // }

  return (
    <div className="container-fluid">
      {/* <Redirect from="/app/login" to={returnTo || "/app/home"} /> */}
      <Redirect exact from="/app/login" to={"/app/home"} />
      <Switch>
        <Route
          strict={true}
          path="/app/home"
          render={renderContent(HomePage)}
        />
        <Route
          strict={true}
          path="/app/table"
          render={renderContent(TablePage)}
        />
        <Route
          strict={true}
          path="/app/json"
          render={renderContent(JSONPage)}
        />
      </Switch>
    </div>
  );
}
