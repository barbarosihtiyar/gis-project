import axios from "axios";

export const BASE_URL = "https://data.ibb.gov.tr/api/3/action/datastore_search";

const options = {
  params: {
    resource_id: 'f4f56e58-5210-4f17-b852-effe356a890c', // the resource id
    limit: 5, // get 5 results
    q: 'jones' // query for 'jones'
  },
  
};

export const fetchFromApi = async (url) => {
  const  data  = await axios.get(`${BASE_URL}`, options);
  console.log(data)
};
