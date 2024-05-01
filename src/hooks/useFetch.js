import React, { useEffect, useState } from "react";

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
    const resp = await fetch(url);
    // await new Promise((resolve) => setTimeout(resolve, 200));
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
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState(stateLoading);
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
