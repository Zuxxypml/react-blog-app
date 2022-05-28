import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState();
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch Data");
          } else return res.json();
        })
        .then((data) => {
          setError(null);
          setdata(data);
        })
        .catch((e) => {
          setError(e.message);
        });
      setisPending(false);
    }, 2000);
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
