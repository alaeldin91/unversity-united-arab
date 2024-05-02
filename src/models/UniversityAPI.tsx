import axios, { AxiosResponse } from "axios";

const ApiUrl = "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates";

interface UniversityData {
  id: any;
  domains: string[];
  stateProvince: string;
  name: string;
  web_pages: string[];
  alpha_two_code: string;
  country: string;
}

export class UniversityAPI {
  async fetchData(): Promise<UniversityData[]> {
    try {
   
      const response: AxiosResponse<UniversityData[]> = await axios.get(ApiUrl);

      return response.data;
    
    }
    
    catch (error) {
    
        console.error("Error fetching university data:", error);
        throw new Error("Failed to fetch university data");
    
    }
  }
}
