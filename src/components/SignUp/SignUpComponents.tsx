import React, { FC, useContext, useState } from 'react';
import './SignUpComponent.css';
import { ISignUpInformation } from '../Interfaces/Login';
import { Input } from '../Assets/Input/Input';
import { Button } from '../Assets/Button/Button';
import { handleChangeTemplate, signInInitialValue } from '../Utils/Utils';
import { PrincipalStateContext } from '../Global/ContextData/ContextData';
import { sendSignUp } from './SignUpFunctions';

export const SignUpComponents: FC<{ className: string }> = ({ className }) => {
    const state = useContext(PrincipalStateContext);
    const [{ email, password, passConfirm }, setState] = useState<ISignUpInformation>(signInInitialValue);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (value: { [key: string]: string }) => {
        handleChangeTemplate<{ [key: string]: string }, ISignUpInformation>(value, setState);
    };

    return (
        <>
            <div className={className}>
                <p className="g-title g-mb-1 g-mt-2">Sign Up</p>
                <Input
                    condition={!/[^\w\d.@]/gi.test(email) && !(email.length > 0 && !email.includes('@'))}
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        handleChange({ email: e });
                    }}
                    className="g-mb-1 g-mt-1"
                />
                <Input
                    label="Password"
                    type="password"
                    condition={!(password.length > 0 && password.length < 8)}
                    value={password}
                    onChange={(e) => {
                        handleChange({ password: e });
                    }}
                    className="g-mb-1 g-mt-1"
                />
                <Input
                    label="Confirm Password"
                    type="password"
                    condition={!(passConfirm.length > 0 && (passConfirm !== password || passConfirm.length < 8))}
                    value={passConfirm}
                    onChange={(e) => {
                        handleChange({ passConfirm: e });
                    }}
                    className="g-mb-1 g-mt-1"
                />
                <Button
                    needLoading={loading}
                    onClick={() => {
                        sendSignUp({ email, password, state, passConfirm }, { setLoading });
                    }}
                    className="g-mt-1"
                    label="Send"
                />
            </div>
        </>
    );
};
