import { useEffect, useState } from "react";
import Axios from "axios";

const useFetch = (endPoint) => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await Axios.get(endPoint);
    setData(response.data.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  },[]);
  console.log(data);
  return data;
};

export default useFetch;