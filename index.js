const Notification = (props) => {
  //  Write your code here.
  const { iconUrl, messageTxt, className } = props;

  return (
    <div className={`notification-container ${className}`}>
      <img className="icon" src={iconUrl} />
      <p className="message">{messageTxt}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notification-app-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-list-container">
      <Notification
        className="primary-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        messageTxt="Information Message"
      />
      <Notification
        className="success-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        messageTxt="Success Message"
      />
      <Notification
        className="warning-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        messageTxt="Warning Message"
      />
      <Notification
        className="error-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        messageTxt="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
