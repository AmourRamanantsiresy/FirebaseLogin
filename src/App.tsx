import React, { useEffect, useState } from 'react';
import { changePrincipalStateTemplate, closeSnackBar } from './components/Utils/Utils';
import { IPrincipalState } from './components/Global/ContextData/ContextDataInterface';
import { Login } from './Pages/Login/Login';
import { HomePage } from './Pages/HomePage/HomePage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/Connection/Auth';
import { Loading } from './components/Assets/Loading/Loading';
import { homeSnackbarInitialState, principalValues } from './components/Global/Variables/Variables';
import { HomeStatus, IPrincipalValues, ConnectionState } from './components/Global/Variables/VariablesInterface';
import { PrincipalStateContext } from './components/Global/ContextData/ContextData';
import { Snackbar } from './components/Assets/Snackbar/Snackbar';
import './App.css';

function App() {
    const [state, setState] = useState<IPrincipalValues>(principalValues);
    const [snackbar, setSnackbar] = useState(homeSnackbarInitialState);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                setState((initialState) => ({
                    ...initialState,
                    homeStatus: HomeStatus.HOME,
                    id: user.uid,
                    token: user.refreshToken || 'token',
                    email: user.email || 'email',
                }));
            } else {
                setState((initialState) => ({
                    ...initialState,
                    homeStatus: HomeStatus.HOME_LOGIN,
                }));
            }
        });
    }, [state.id]);

    const PrincipalStateValues: IPrincipalState = {
        values: state,
        setState,
        setConnection: (state) => changePrincipalStateTemplate<ConnectionState>('stateConnection', state, setState),
        setSnackbar,
    };

    return (
        <PrincipalStateContext.Provider value={PrincipalStateValues}>
            <div className="App g-wh-100">
                <Snackbar
                    onClose={() => closeSnackBar(setSnackbar)}
                    className="app--snackbar"
                    type={snackbar.type}
                    label={snackbar.label}
                    open={snackbar.open}
                />
                {state.token.length === 0 && state.homeStatus === HomeStatus.HOME_LOGIN ? (
                    <Login />
                ) : state.homeStatus === HomeStatus.HOME ? (
                    <HomePage />
                ) : (
                    <Loading />
                )}
            </div>
        </PrincipalStateContext.Provider>
    );
}

export default App;
