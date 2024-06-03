import { useEffect, useState } from "react";
import { makeRequest } from "../axios";

export const useGetRequest = (url, params = null) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getResponse = async () => {
            const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjAwNDNkZGE0ZmE3MjJkYWI5NTc3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjI3MjM1MCwiZXhwIjoxNzE2NzA0MzUwfQ.1oPBJLhi_6xPvF6SaWpgcPTMflx-SbVCFZnDI74WAZY";
            try {
                const res = await makeRequest(params? url + params : url, {
                    headers: {
                        accessToken: "Bearer " + accessToken,
                      }
                });
                setResponse(res.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        }

        getResponse();

    }, [url, params]);

    return { response, error, loading };
}