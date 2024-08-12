import { SiTicktick } from "react-icons/si";
import { IoIosInformationCircle } from "react-icons/io";
import { TiInfo } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const Notifications = ({ type = "info", message, onClose = () => {} }) => {
    const icons = {
      success: <SiTicktick />,
      warning: <IoIosInformationCircle />,
      fail: <TiInfo />,
    };
  
    return (
      <div className={`notification ${type}`}>
        {icons[type]}
        {message}
        <RxCross1
          style={{ cursor: "pointer", marginLeft: "5em" }}
          onClick={() => onClose()}
        />
      </div>
    );
  };

export default Notifications;

