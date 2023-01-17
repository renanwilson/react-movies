import { useState } from "react";
import { api } from "services/api";

export function getImageFromApi(url) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);

  api.get(url).then((resp) => {
    setData(resp.data.results[0]);
  });
  return { data };
}
