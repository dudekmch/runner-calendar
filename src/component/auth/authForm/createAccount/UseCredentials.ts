import { useReducer } from "react";

interface ICredentialState {
  email: string | null;
  password: {
    value: string | null;
    isValid: boolean;
    isConfirmed: boolean;
  };
}

const initialICredentialState: ICredentialState = {
  email: null,
  password: {
    value: null,
    isValid: true,
    isConfirmed: true,
  },
};

export enum CredentialActionType {
  checkCredetialValid = "VALIDATION",
}

interface ICredentialAction {
  type: CredentialActionType;
  payload: {
    email: string;
    password: string;
    repeatedPassword: string;
  };
}

const credentialReducer = (
  state: ICredentialState,
  action: ICredentialAction
) => {
  if (action.type === CredentialActionType.checkCredetialValid) {
    return {
      email: action.payload.email,
      password: {
        value: action.payload.password,
        isValid: checkIsPasswordValid(action.payload.password),
        isConfirmed:
          action.payload.password === action.payload.repeatedPassword,
      },
    };
  }
  return state;
};

const checkIsPasswordValid = (password: string): boolean => {
  return password.length >= 8;
};

const useCredentials = () => {
  const [credentialState, dispatchCredential] = useReducer(
    credentialReducer,
    initialICredentialState
  );

  return {
    email : credentialState.email,
    passwordValue: credentialState.password.value,
    isPasswordValid: credentialState.password.isValid,
    isPasswordConfirmed: credentialState.password.isConfirmed,
    dispatchCredential,
  };
};

export default useCredentials;
