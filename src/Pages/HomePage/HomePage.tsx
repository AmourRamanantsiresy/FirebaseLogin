import React, { FC, useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./HomePage.css";
import { logOut } from "../../components/Connection/Auth";
import { HomeStatus } from "../../components/Global/Variables/VariablesInterface";
import { PrincipalStateContext } from "../../components/Global/ContextData/ContextData";

export const HomePage: FC = () => {
  const state = useContext(PrincipalStateContext);

  const signOut = () => {
    state.setState && state.setState((e) => ({ ...e, homeStatus: HomeStatus.LOADING }));
    logOut(() => {
      let time = setTimeout(() => {
        clearTimeout(time);
        state.setState &&
        state.setState((e) => ({
          ...e,
          id: "",
          token: "",
          email: "",
          homeStatus: HomeStatus.LOADING
        }));
      }, 2000);
    });
  };

  return (
    <div className="g-bg-primary g-txt-light g-wh-100">
      <div className="hp-navbar g-shadows g-jc-between">
        <div className="g-ai-center">
          <div className="hp-profilePic g-shadows g-pr">
            <img
              className="g-center-absolute-real"
              src={
                state.values.profilePic !== undefined && state.values.profilePic?.length > 0
                  ? state.values.profilePic
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt="ProfilePic"
            />
          </div>
          <div>
            <p className="g-m-inline-1">
              {state.values.name !== undefined && state.values.name?.length > 0
                ? state.values.name
                : state.values.email}
            </p>
          </div>
        </div>
        <div className="hp--outLog g-mr-1 g-pr">
          <div className="hp--in--outLog g-center-absolute-real">
            <p onClick={() => signOut()} className="bi bi-door-closed g-center-absolute-real"></p>
          </div>
        </div>
      </div>
      <div className="g-center-absolute-real">
        <div className="">
          <p className="g-title">
            Welcome to you dashboard{" "}
            {state.values.name !== undefined && state.values.name?.length > 0 ? state.values.name : state.values.email}.
          </p>
          <p>
            Connected by <i className={'bi bi-' + (state.values.loginType === "password" ? 'person-fill': state.values.loginType)}></i>
          </p>
        </div>
      </div>
    </div>
  );
};
