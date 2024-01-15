import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export const SignOut = () => {
  toast(
    (t) => (
      <div className="toast-content">
        <p className="text-right">
          {/* <button onClick={() => >❌</button>} */}
        </p>
        <LogOut clickToCancel={() => toast.dismiss()} />
      </div>
    ),
    {
      duration: 3000000,
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        boxShadow: "none",
        background: "transparent",
        height: "100vh",
        width: "100vw",
      },
    }
  );
};

const LogOut = ({ clickToCancel }) => {
  const [logOut, setLogout] = useState(false);
  return (
    <div className=" border p-5 bg-cyan-800 text-white rounded-[12px] ">
      <p className="font-bold text-xl "> Sign Out?</p>
      <p className="font-bold text-sm my-2">
        {" "}
        Are you sure you want to sign out?
      </p>
      <button className="bg-green-500 text-white font-bold  w-full py-3 rounded-full">
        Sign Out
      </button>
      <button
        onClick={clickToCancel}
        className=" text-green-500 border my-4 font-bold  w-full py-3 rounded-full"
      >
        Cancel
      </button>
    </div>
  );
};
