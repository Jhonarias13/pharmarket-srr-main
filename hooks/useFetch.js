import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await axios.get(endpoint);
    setData(response.data.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [endpoint]);

  return data;
};

export default useFetch;