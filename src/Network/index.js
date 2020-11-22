import React, { useState, useEffect } from "react";
import axios from "axios";

function Data(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.post();
      setData(response.data);
    })();
  }, []);

  if (data === null) {
    return "Loading...";
  }
  return data;
}
