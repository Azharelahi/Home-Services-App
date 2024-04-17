import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-southeast-2.hygraph.com/v2/clt8p47c61i7c07uzdbjq14ac/master";

const getSlider = async () => {
  const query = gql`
    query GetSliders {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching sliders:", error);
    return null; // or handle the error as needed
  }
};
const getCatagory =async()=>{
  const query=gql`
  query GetCatagories {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  
  `
  
  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching sliders:", error);
    return null; 
  }
};


export default {
  getSlider,getCatagory
};
