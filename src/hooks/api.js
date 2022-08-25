import { useCallback, useEffect, useState } from "react";

/**
 * Call to a generic Json API
 * @param {String} url URL to call
 * @param {String} args Standart fetch args
 */
export default function useJsonAPI(url, args = {}) {
  const [{ loading, error, data }, setRequest] = useState({
    loading: true,
    error: undefined,
    data: undefined,
  });

  const fetchData = useCallback(() => {
    setRequest(() => ({ loading: true, error: undefined, data: undefined }));
    fetch(url, args)
      .then((response) => response.json())
      .then((response) =>
        setRequest(() => ({ loading: false, error: undefined, data: response }))
      )
      .catch((err) =>
        setRequest(() => ({ loading: false, err: err, data: undefined }))
      );
  }, []);

  const refresh = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
    error,
    data,
    refresh,
  };
}
