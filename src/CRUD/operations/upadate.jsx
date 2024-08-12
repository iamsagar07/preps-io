import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateUserData } from "../../store/action";

const Update = () => {
  const dispatch = useDispatch();
  const singleUser =  useSelector(state => state.myFirstReducer.singleUser)

  const locate = useNavigate();
  
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const body = {
    id: singleUser.id,
    username: username,
    password: password
  }




  const updateData = async () => {
    try {
      await axios.put(
        `https://66ad2261b18f3614e3b4812e.mockapi.io/crudapi/v1/formData/${id}`,
        {

          username,
          password,
        }

      );
      locate('/read')
    } catch (error) {
      console.error('Error in updation:', error);
    }
  };
 
  return (
    <form action="" className="flex justify-center h-max">
      <div className="flex flex-col text-center gap-7 rounded-lg border w-max p-5">
        <div className="flex gap-5">
          <label>Enter username</label>
          <input
            type="name"
            name="name"
            placeholder={singleUser.username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <label>Enter Password</label>
          <input
            type="text"
            name="password"
            placeholder={singleUser.password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={() => dispatch(UpdateUserData(body))}
          className="rounded p-3 bg-blue-600 text-white hover:bg-blue-900"
        >
          Upadte
        </button>
      </div>
    </form>
  );
};

export default Update;
