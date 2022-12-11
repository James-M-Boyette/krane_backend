/**
 * If you are looking to add OAuth 1.0 / 2.0, please create a
 * separate client or hook to make the fetch
 */

import { useEffect, useState } from "react";
import axios from "axios";
// axios.defaults.proxy.host = "http://www.demoapp.com"
// baseURL ("axios.defaults.baseURL")
// axios.defaults.baseURL = "http://localhost:7777";
axios.defaults.baseURL = "http://127.0.0.1:7777";

export const useFetch = (url: string, body?: any) => {
  const [response, setResponse] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  const [abort, setAbort] = useState(() => {});

  useEffect(() => {
    console.log(`url: ${url}`); // TODO DELETEME
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        // const { data } = await axios.get(url, {
        //   proxy: {
        //     host: "localhost",
        //     port: 7777,
        //   },
        // });
        // const { data } = await axios.get(`http://localhost:7777${url}`); // TODO DELETEME
        console.log(`data: ${data}`);
        setResponse(data);
      } catch (error: any) {
        error.message !==
          `Unexpected token '<', "<!DOCTYPE "... is not valid JSON` &&
          setError(error.message || "Unknown error");
      }
    };
    fetchData();
  }, []);

  return [response, setResponse, error, abort];
};
