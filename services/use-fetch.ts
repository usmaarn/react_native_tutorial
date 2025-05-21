import { useEffect, useState } from "react";

export const useFetch = <T>(
  fetchFunction: () => Promise<T>,
  autoFetch = true
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const run = async () => {
    try {
      setLoading(true);

      const result = await fetchFunction();
      setData(result);
    } catch (error: any) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("An error occurred!"));
      }
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      run();
    }
  }, []);

  return { data, loading, error, run, reset };
};
