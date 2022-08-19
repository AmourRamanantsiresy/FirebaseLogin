import React, { FC, useContext } from 'react';
import './SocialIcons.css';
import { googleSignIn } from '../Connection/Google';
import { facebookSignIn } from '../Connection/Facebook';
import { githubSignIn } from '../Connection/Github';
import { PrincipalStateContext } from '../Global/ContextData/ContextData';

export const SocialIcons: FC<{ className: string }> = ({ className }) => {
    const state = useContext(PrincipalStateContext);

    return (
        <div className={className}>
            <div className="g-col-4 g-m-inline-1 g-jc-around">
                <div className="lsf--icons" onClick={() => googleSignIn(state)}>
                    <i className="bi bi-google"></i>
                </div>
                <div className="lsf--icons" onClick={() => facebookSignIn(state)}>
                    <i className="bi bi-facebook"></i>
                </div>
                <div className="lsf--icons" onClick={() => githubSignIn(state)}>
                    <i className="bi bi-github"></i>
                </div>
            </div>
        </div>
    );
};
