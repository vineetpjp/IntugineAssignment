import axios from "axios";

const Data = async () => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer tTU3gFVUdP",
  };
  const dataa = {
    email: "vineet981013@gmail.com",
  };

  const response = await axios.post(
    "https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/vineet",
    dataa,
    { headers }
  );

  if (response.data === null) {
    return "Loading...";
  }
  return response.data;
};

export default Data;
