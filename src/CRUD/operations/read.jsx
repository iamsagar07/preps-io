
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteUser, GetSingleUser, getUserFetch } from "../../store/action";

const Read = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users)

  useEffect(() => {
    dispatch(getUserFetch())


  }, [])







  return (
    <div className="flex justify-center flex-col">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Password
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {users?.map((data) => (
            <tr
              key={data.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.username}
              </th>
              <td className="px-6 py-4">{data.password}</td>
              <td className="px-6 py-4 flex gap-5 text-center">
                <Link to={"/update"}>
                  <button onClick={() => dispatch(GetSingleUser(data.id))} className="rounded p-3 bg-green-600 text-white hover:bg-green-900">
                    Update
                  </button>
                </Link>
                <Link to={"/read"} className="flex items-center gap-2">
                  
                  <button onClick={() => dispatch(DeleteUser(data.id))} className="rounded p-3 bg-red-600 text-white hover:bg-red-900">
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      <div className=" flex items-center justify-center gap-10 h-16">
        <Link to={'/create'}>
          <button className="rounded p-3 bg-blue-600 text-white hover:bg-blue-900" >
            Create +
          </button>

        </Link>
      </div>
    </div>
  );
};

export default Read;
