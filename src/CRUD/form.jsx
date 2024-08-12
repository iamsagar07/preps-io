import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxEyeClosed } from "react-icons/rx";
import { PiEyesFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { GetUserData } from "../store/action";

const FormFill = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isHide, setIsHide] = useState(true);


    // const navigate = useNavigate();
    const body = {
        username: username,
        password: password,
    }

    const handleForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonObj = Object.fromEntries(formData.entries());

        setUsername(jsonObj.name);
        setPassword(jsonObj.password);

        dispatch(GetUserData(body));

    };


    return (
        <form action="" onSubmit={handleForm} className="flex justify-center text-center mt-11 ">
            <div className="flex justify-center flex-col text-center gap-7 rounded-lg border p-5">
                <div className="flex gap-5">
                    <label>Enter username</label>
                    <input type="name" name="name" placeholder="Enter username" />
                </div>
                <div className="flex gap-5 items-center">
                    <label>Enter Password</label>
                    <input type={isHide ? 'password' : "text"} name="password" placeholder="Enter password" />
                    {isHide ? <RxEyeClosed size={20} className="cursor-pointer" onClick={() => setIsHide(!isHide)} /> : <PiEyesFill size={20} className="cursor-pointer" onClick={() => setIsHide(!isHide)} />}
                </div>
                <button
                    type="submit"

                    className="rounded p-3 bg-blue-600 text-white hover:bg-blue-900"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default FormFill;
