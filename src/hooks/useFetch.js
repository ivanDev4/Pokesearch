import React, { useEffect, useState } from "react";

const localCache = {};

export default function useFetch(url) {
  const stateLoading = {
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  };

  const [state, setState] = useState(stateLoading);

  const getFetch = async () => {
    setLoadingState();

    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    const resp = await fetch(url);
    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
    localCache[url] = data;
  };
  const setLoadingState = () => {
    setState(stateLoading);
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
