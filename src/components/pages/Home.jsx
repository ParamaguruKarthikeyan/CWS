import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CommonSlice } from '../../redux/slices';

export default function Home() {
  const dispatch = useDispatch();
  const googleResponse = useSelector((state) => state.common.googleResponse);
  useEffect(() => {
    dispatch(CommonSlice.setTitle('Home'));
  }, []);
  return (
    <div className="home-screen row">
      <h5 className="content-header">
        <i className="material-icons">person</i>User Overview
      </h5>
      <div className="user-card col s12 m6">
        <img
          className="profile-picture z-depth-3"
          src={googleResponse?.profileObj?.imageUrl}
          referrerPolicy="no-referrer"
        />
        <h4>Welcome {googleResponse?.profileObj?.name}!</h4>
        <a href={`mailto: ${googleResponse?.profileObj?.email}`}>
          {googleResponse?.profileObj?.email}
        </a>
      </div>
    </div>
  );
}
