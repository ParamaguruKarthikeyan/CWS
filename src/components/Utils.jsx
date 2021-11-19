import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CommonSlice } from "../redux/slices";
import { Helmet } from "react-helmet";
import M from "../vendor/materialize/js/bin/materialize.min.js";

export const WindowTitle = function () {
  const title = useSelector((state) => state.common.title);
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`CSW Assignment${title && " : " + title}`}</title>
    </Helmet>
  );
};
export const SessinonNoticeModal = function () {
  const inactiveFor = useSelector((state) => state.common.inactiveFor);
  const title = useSelector((state) => state.common.time);
  const dispatch = useDispatch();
  const modalRef = useRef();
  useEffect(() => {
    modalRef.current = M.Modal.init(
      document.querySelectorAll("#sessionNotice"),
      {
        dismissible: false,
      }
    )[0];
    modalRef.current.open();
    return () => {
      modalRef.current?.close();
    };
  }, []);
  return (
    <div id="sessionNotice" className="modal">
      <div className="modal-content">
        <p>
          User Session is about to expire in{" "}
          {window.SERVER_CONFIG.SESSION_EXPIRY_IN - inactiveFor} seconds. Do you
          want to continue?
        </p>
      </div>
      <div className="modal-footer">
        <button
          className="modal-close btn waves-effect waves-green"
          onClick={() => {
            dispatch(CommonSlice.reSetInactiveFor());
          }}
        >
          continue
        </button>
      </div>
    </div>
  );
};

export const ContentLoading = function (props) {
  return (
    <div className="container-fluid">
      <div className="preloader-container">
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <span>
            <i className="material-icons">error</i>
            {this.props.message || "Something went wrong."}
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}

export const ErrorBoundary = ErrorHandler;
