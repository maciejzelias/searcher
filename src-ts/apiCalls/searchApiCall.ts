import { getApiCallUrl } from "./getApiCallUrl";
import { Card } from "../models/card";

type ResponseType = {
  results: Card[];
  msg: string;
};

export const getSearches = async (
  queryParam: string
): Promise<ResponseType> => {
  const response = await fetch(getApiCallUrl(queryParam));

  if (!response.ok) {
    return Promise.reject(
      new Error(
        "Couldn't fetch data, reload the page or check your internet connection"
      )
    );
  } else {
    const data = await response.json();
    return { results: data.results, msg: "" };
  }
};
