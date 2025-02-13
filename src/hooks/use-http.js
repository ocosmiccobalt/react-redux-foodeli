import { useState, useCallback, useEffect } from 'react';

import sendHttpRequest from '../util/send-http-request.js';

function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  function clearError() {
    setError(null);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);

      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || 'Something went wrong.');
      }

      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }
  }, [config, sendRequest]);

  return {
    data,
    isLoading,
    error,
    clearData,
    clearError,
    sendRequest
  };
}

export default useHttp;
