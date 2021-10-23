import { useState } from "react";

export interface IResponseError {
    isError: boolean;
    messages?: string[];
}

const useError = () => {
    const [error, setError] = useState({isError: false} as IResponseError);

    return {
        error,
        setError
    }
}

export default useError