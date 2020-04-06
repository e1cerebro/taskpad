import React, { Fragment } from "react";
import moment from "moment";

const Notifications = ({ notifications }) => {
  if (notifications.length > 0) {
    return (
      <div className='section'>
        <div className='card z-depth-0 '>
          <div className='card-content '>
            <span className='card-title'>NOTIFICATIONS</span>
            <ul className='notifications'>
              {notifications &&
                notifications.map((notification) => {
                  return (
                    <li className='notification' key={notification.id}>
                      <span className='pink-text'>{notification.user} </span>
                      <span>{notification.content}</span>
                      <div className='grey lighten-4 grey-text grey-text note-date'>
                        {moment(notification.time.toDate()).fromNow()}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <div className='section notification-zero'>
        <div className='card z-depth-0 '>
          <div className='card-content '>
            <span className='card-title'>NOTIFICATIONS</span>
            <ul className='notifications'>
              <li>0 notifications</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Notifications;
