import React, { FC, useContext, useState } from 'react';
import './SignInComponent.css';
import { ILoginInformation } from '../Interfaces/Login';
import { Input } from '../Assets/Input/Input';
import { Button } from '../Assets/Button/Button';
import { handleChangeTemplate } from '../Utils/Utils';
import { PrincipalStateContext } from '../Global/ContextData/ContextData';
import { sendLogin } from './SignInFunctions';

export const SignInComponents: FC<{ className: string }> = ({ className }) => {
    const initialValue: ILoginInformation = { email: '', password: '' };
    const [{ email, password }, setState] = useState<ILoginInformation>(initialValue);
    const state = useContext(PrincipalStateContext);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (value: { [key: string]: string }) => {
        handleChangeTemplate<{ [key: string]: string }, ILoginInformation>(value, setState);
    };

    return (
        <>
            <div className={className}>
                <p className="g-title g-mb-1 g-mt-2">Login</p>
                <Input
                    condition={!/[^\w\d.@]/gi.test(email) && !(email.length > 0 && !email.includes('@'))}
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => handleChange({ email: e })}
                    className="g-mb-1 g-mt-1"
                />
                <Input
                    label="Password"
                    value={password}
                    condition={!(password.length > 0 && password.length < 8)}
                    onChange={(e) => handleChange({ password: e })}
                    className="g-mb-1 g-mt-2"
                    type="password"
                />
                <Button
                    onClick={() => {
                        sendLogin({ email, password, state }, { setLoading });
                    }}
                    needLoading={loading}
                    className="g-mt-1"
                    label="Sign In"
                />
            </div>
        </>
    );
};
