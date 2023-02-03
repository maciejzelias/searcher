import { getApiCallUrl } from "./getApiCallUrl";

type Result = {
  date_published: string;
  id: string;
  risk_score: number;
  snippet: string;
  title: string;
  url: string;
};

type ResponseType = {
  results: Result[];
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
