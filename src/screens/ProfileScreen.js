import React from "react";
import Nav from "../Nav";
import Avtar from "../assets/Netflix-avatar.png";
import "../screens/ProfileScreen.css";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <div className="profileScreen">
        <Nav />
        <div className="profileScreen__body">
          <div className="profileScreen__info">
            <img src={Avtar} alt="Avtar" />
            <div className="profileScreen__details">
              <h2>{user.email}</h2>
              <div className="profileScreen__plans">
                <h3>Plans</h3>
                <button
                  onClick={() => auth.signOut()}
                  className="profileScreen__signout">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
