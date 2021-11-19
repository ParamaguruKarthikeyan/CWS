import "../styles/App.scss";

import { ContentLoading, ErrorBoundary } from "./Utils";
import { useDispatch, useSelector } from "react-redux";

import { CommonSlice } from "../redux/slices";
import Contents from "./Contents";
import Nav from "./Nav";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { WindowTitle } from "./Utils";
import { useGoogleLogin } from "react-google-login";

export default function App() {
  const clientId = window.SERVER_CONFIG.GOOGLE_CLIENT_ID;
  const dispatch = useDispatch();
  const { loading, googleResponse } = useSelector((state) => state.common);

  const handleGoogleResponse = (success) => {
    return (response) => {
      if (response) {
        dispatch(
          CommonSlice.setGoogleResponse({
            success: success,
            ...response,
          })
        );
      } else {
        dispatch(
          CommonSlice.setGoogleResponse({
            success: false,
          })
        );
      }
    };
  };
  const { loaded } = useGoogleLogin({
    clientId,
    autoLoad: false,
    isSignedIn: true,
    fetchBasicProfile: true,
    onSuccess: handleGoogleResponse(true),
    onFailure: handleGoogleResponse(false),
    onAutoLoadFinished: handleGoogleResponse(),
    // onRequest: handleGoogleResponse("onRequest"),
  });

  if (!loaded || loading) {
    return <ContentLoading />;
  }

  return (
    <>
      <WindowTitle />
      <Router>
        {googleResponse?.success && <Nav />}
        <Contents />
      </Router>
    </>
  );
}
