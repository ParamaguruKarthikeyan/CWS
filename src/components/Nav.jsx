import "../styles/Nav.scss";

import { NavLink, BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CommonSlice } from "../redux/slices";
import M from "../vendor/materialize/js/bin/materialize.min.js";
import { SessinonNoticeModal } from "./Utils";
import { useGoogleLogout } from "react-google-login";

export default function Nav() {
  const clientId = window.SERVER_CONFIG.GOOGLE_CLIENT_ID;
  const dispatch = useDispatch();
  const navRootRef = useRef();
  const common = useSelector((state) => state.common);
  const handleSuccessResponse = (success) => {
    dispatch(CommonSlice.resetToInit());
  };

  const { signOut, loaded } = useGoogleLogout({
    clientId,
    onFailure: () => {
      M.toast({ html: "Error occured during Logout!", classes: "rounded" });
    },
    onLogoutSuccess: () => {
      dispatch(CommonSlice.resetToInit());
    },
  });
  const handleSessionAndExpiry = () => {
    if (
      navRootRef.current.dataset.inactivefor >=
      window.SERVER_CONFIG.SESSION_EXPIRY_IN
    ) {
      signOut();
      document.querySelector(".modal-overlay").remove();
      dispatch(CommonSlice.reSetInactiveFor());
    } else {
      dispatch(CommonSlice.setInactiveFor());
    }
  };

  useEffect(() => {
    M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {
      coverTrigger: false,
    });
    M.Sidenav.init(document.querySelectorAll(".sidenav"));
    let interval = setInterval(handleSessionAndExpiry, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav
        className="top-nav"
        data-inactivefor={common.inactiveFor}
        ref={navRootRef}
      >
        <div className="nav-wrapper">
          <NavLink
            to="/app/home"
            activeClassName="active"
            className="brand-logo"
          >
            <img src="/img/csw_white.png  " />
          </NavLink>
          <a href="#" data-target="mobile-menu" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/app/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/app/table" activeClassName="active">
                Table
              </NavLink>
            </li>
            <li>
              <NavLink to="/app/json" activeClassName="active">
                JSON
              </NavLink>
            </li>
            <li>
              <a
                className="dropdown-trigger"
                href="#!"
                data-target="userOptionsTop"
              >
                <i className="material-icons right">arrow_drop_down</i>
                {common.googleResponse?.profileObj?.name}
              </a>
              <ul id="userOptionsTop" className="dropdown-content">
                <li>
                  <a
                    href="#!"
                    className="sidenav-close btn-flat"
                    onClick={signOut}
                  >
                    <i className="material-icons left">exit_to_app</i>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-menu">
        <li>
          <NavLink
            to="/app/home"
            className="sidenav-close"
            activeClassName="selected"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/table"
            className="sidenav-close"
            activeClassName="selected"
          >
            Table
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/json"
            className="sidenav-close"
            activeClassName="selected"
          >
            JSON
          </NavLink>
        </li>
        <li>
          <a
            className="dropdown-trigger"
            href="#!"
            data-target="userOptionsLeft"
          >
            <i className="material-icons right">arrow_drop_down</i>
            {common.googleResponse?.profileObj?.name}
          </a>
          <ul id="userOptionsLeft" className="dropdown-content">
            <li>
              <button className="sidenav-close btn-flat" onClick={signOut}>
                Logout
              </button>
            </li>
          </ul>
        </li>
      </ul>
      {common.inactiveFor > window.SERVER_CONFIG.SESSION_EXPIRY_IN - 10 && (
        <SessinonNoticeModal />
      )}
    </>
  );
}
