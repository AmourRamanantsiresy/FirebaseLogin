import React, { FC, useContext } from 'react';
import './Login.css';
import { CardGlassOne } from '../../components/Card/GlassOne/CardGlassOne';
import { Logo } from '../../components/Assets/Logo/Logo';
import { SignUpComponents } from '../../components/SignUp/SignUpComponents';
import { PrincipalStateContext } from '../../components/Global/ContextData/ContextData';
import { ConnectionState } from '../../components/Global/Variables/VariablesInterface';
import { SignInComponents } from '../../components/SignIn/SignInComponents';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { SocialIcons } from '../../components/SocialIcons/SocialIcons';
import { labelForConnection } from '../../components/Utils/Utils';
import { checkStateConnection } from './LoginFunctions';

export const Login: FC = () => {
  const state = useContext(PrincipalStateContext);
  const { SIGN_IN } = ConnectionState;
  const connectionState = state.values.stateConnection;
  const handleClick = () => {
    state.setConnection !== undefined && state.setConnection(checkStateConnection(connectionState));
  };

  return (
    <div className="ls-container g-ai-center g-jc-center g-wh-100">
      <CardGlassOne className="g-row g-jc-around g-pr">
        <div className="g-col-5 g-col-min g-jc-center g-ai-center ls--image">
          <Logo h={300} w={300} className="ls--logo" />
        </div>
        <div className="g-jc-center g-center-absolute-min g-pr g-col-min g-col-5 g-ai-center">
          {connectionState === SIGN_IN ? (
            <SignInComponents className="g-center-absolute" />
          ) : (
            <SignUpComponents className="g-center-absolute" />
          )}
        </div>
        <div className="ls--footer g-w-100 g-jc-between">
          <SocialIcons className="g-col-5 g-row" />
          <div className="g-col-5 g-jc-end">
            <small className="g-m-inline-1" onClick={() => handleClick()}>{labelForConnection(connectionState)}</small>
          </div>
        </div>
      </CardGlassOne>
    </div>
  );
};
