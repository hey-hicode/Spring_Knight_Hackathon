import { useState, useEffect, useCallback } from 'react';

const useFetch = (url:string, method = 'GET', body = null, headers = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submit, setSubmit] = useState(false);

  const fetchData = useCallback(async () => {
    if (!submit) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: body ? JSON.stringify(body) : null,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setData(data);
    } catch (error) {
        
    } finally {
      setLoading(false);
      setSubmit(false);
    }
  }, [method, url, body, headers, submit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, setSubmit };
};

export default useFetch;
