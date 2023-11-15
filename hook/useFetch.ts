import { useState, useEffect } from "react";
import axios from "axios";

interface ParamsType {
  name?: string;
  muscle?: string;
  difficulty?: string;
  type?: string;
}

const useFetch = (params: ParamsType) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const baseUrl = "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises";
  // const urlParams = new URLSearchParams(params as Record<string, string>);
  // const url = `${baseUrl}?${urlParams.toString()}`;

  const options = {
    method: "GET",
    url: baseUrl,
    params: params,
    headers: {
      "X-RapidAPI-Key": "ddd6ecda34msh402aa5245d4b601p1d8272jsnd2bfa97b0bee",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error as Error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
