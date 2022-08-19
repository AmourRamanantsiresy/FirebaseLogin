import { ConnectionState } from '../../components/Global/Variables/VariablesInterface';

export function checkStateConnection(connectionState: ConnectionState): ConnectionState {
  if (connectionState === ConnectionState.SIGN_UP) {
    return ConnectionState.SIGN_IN;
  }
  return ConnectionState.SIGN_UP;
}
