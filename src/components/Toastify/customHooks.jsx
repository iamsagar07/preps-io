import { useCallback, useState } from "react";
import Notification from "./Notification";

const CustomHooks = ({ position = "top-right" }) => {
    const [show, setShow] = useState(null);



    const triggerNotifications = useCallback((notificationProps) => {
        let temp;
        setShow(notificationProps);
        clearTimeout(temp);
        temp = setTimeout(() => {
            setShow(null);
        }, notificationProps.duration);
    }, []);

    const handleNotification = show ? (
        <div className={`${position}`}>
            <Notification {...show} onClose={() => setShow(!show)}/>
        </div>
    ) : null;

    return { handleNotification, triggerNotifications };
};

export default CustomHooks;
