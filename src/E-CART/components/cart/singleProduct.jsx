import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBackCircleOutline } from "react-icons/io5";import oops from "../cart/remove.png";
import { DeleteUser, getUserFetch } from "../../../store/action";
import CustomHooks from "../../../components/Toastify/customHooks";
import { Link } from "react-router-dom";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.myFirstReducer.users);
    useEffect(() => {
        dispatch(getUserFetch());
    }, []);

    const { handleNotification, triggerNotifications } = CustomHooks("top-left");

    const handleItemDeletion = (id) => {
        dispatch(DeleteUser(id));
        triggerNotifications({
            type: "warning",
            message: "Item removed succesfully",
            duration: 2000,
        })
    }
    return (
        <div className="p-3">
            <div className="flex items-center justify-between">
                <p className="text-4xl p-3">Shopping cart</p>
                <Link to={'/products'} title="Products" className="flex items-center hover:text-blue-500"><IoArrowBackCircleOutline size={30}/></Link>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {users?.map((item) => (
                        <tbody key={item.id}>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                                >
                                    <div className="relative flex items-center justify-center">
                                        <img
                                            className="h-fit w-max lg:w-36 lg:h-auto"
                                            src={item.image ? item.image : oops}
                                            alt="item-image"
                                        />
                                    </div>{" "}
                                </th>
                                <td className="px-6 py-4 ">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2 ">
                                            <h2 className="text-xl">{item.title}</h2>
                                            <p className="text-black font-semibold">
                                                {item.description > 50
                                                    ? item.description
                                                    : item.description.slice(0, 50)}
                                                ....
                                            </p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => handleItemDeletion(item.id)}
                                                className="rounded p-3 bg-red-600 text-white hover:bg-red-900"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-4">${item.price}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            {handleNotification}
        </div>
    );
};

export default SingleProduct;
