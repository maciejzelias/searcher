import { getApiCallUrl } from "./getApiCallUrl";

export const getSearches = async (queryParam: string) => {
  const response = await fetch(getApiCallUrl(queryParam));

  if (!response.ok) {
    return {
      data: [],
      msg: "Couldn't fetch data, reload the page or check your internet connection",
    };
  } else {
    const data = await response.json();
    return { data, msg: "" };
  }
};
