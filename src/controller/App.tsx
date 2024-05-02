import React, { useEffect, useState } from "react";
import { UniversityAPI } from "../models/UniversityAPI";
import ListingPage from "../components/ListingPage";
import "../App.css";
import SearchBar from "../components/SearchBar";
interface Item {

  id: string;
  stateProvince: string;
  name: string;
  web_pages: string;
  alpha_two_code: string;
  country: string;

}

declare const localStorage: Storage;
const App: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [, setSelectedItem] = useState<Item | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      try {
        const localData = localStorage.getItem("universityData");
        if (localData) {
       
          setData(JSON.parse(localData));
          return;
        }
        
        const universityApi = new UniversityAPI();
        const fetchedData = await universityApi.fetchData();
        const formattedData: Item[] = fetchedData.map((item, index) => ({
        
          id: (index + 1).toString(),
          stateProvince: item.stateProvince,
          name: item.name,
          web_pages: item.web_pages[0],
          alpha_two_code: item.alpha_two_code,
          country: item.country,
        
        }));

        setData(formattedData);
        //Save Data Local Storage
        localStorage.setItem("universityData", JSON.stringify(formattedData));
      } catch (error) {
        
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndSetData();
  }, []);

  const handleItemClick = (itemId: string) => {
    const selectedItem = data.find((item) => item.id === itemId);
    setSelectedItem(selectedItem || null);
  };

  //search Filter Passed on The Search Keyword
  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  // Filter data based on the search keyword
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="top-page">
          <h3 className="title">Universities</h3>

          <SearchBar onSearch={handleSearch} />
        </div>

        <ListingPage data={filteredData} onItemClick={handleItemClick} />
      </div>
    </>
  );
};

export default App;
