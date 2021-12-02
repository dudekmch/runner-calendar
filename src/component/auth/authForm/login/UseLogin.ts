import useHttp from "../../../../hook/UseHttp";
import { createRequestConfig, LoginCredentials } from "./LoginService";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { authActions, ICurrentUser } from '../../../../store/auth';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";


const useLogin = () => {

    const http = useHttp();
    const dispatch = useDispatch();
    const history = useHistory();

    const sendLoginRequest = (credentials: LoginCredentials) => {

    const requestConfig = createRequestConfig(credentials)

    http.sendRequest(requestConfig, (data: Response) => {
        const authorizationHeaderValue = data.headers.get("Authorization")
        if(authorizationHeaderValue) {
          const token = authorizationHeaderValue.replace('Bearer ', '')
          const decoded = jwtDecode<JwtPayload>(token); 
          dispatch(
            authActions.setUser({
              email: decoded.sub,
              token: token,
            } as ICurrentUser)
          );
          history.push('/trainingTable');
        } else {
          new Error('Response not contains token')
        }
    });
   }

    return {
        sendLoginRequest,
        isLoading: http.isLoading
    }
} 

export default useLogin