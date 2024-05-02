import React, { useEffect, useState } from "react";
import ListingItem from "./ListItem";

interface Item {
  id: string;
  stateProvince: string;
  name: string;
  web_pages: string;
  alpha_two_code: string;
  country: string;
}

interface ListingPageProps {
  data: Item[];
  onItemClick: (itemId: string) => void;
}

const ListingPage: React.FC<ListingPageProps> = ({ data, onItemClick }) => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );
  const [items, setItems] = useState<Item[]>(data);
  const handleDeleteItem = (itemId: string) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };
  
 
  const [sortBy, setSortBy] = useState<keyof Item | null>(null);
  const handleSort = (property: keyof Item) => {
    if (property === sortBy) {
   
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    }
      else {
   
        setSortBy(property);
      setSortDirection("asc");
    }
  };

  const sortedData = [...data];
  if (sortBy) {
   
    sortedData.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }

  useEffect(() => {
    handleSort("id");
  }, []);

  return (
    <div className="container-table">
      <table className="universities">
        <thead>
          <tr className="listing-item">
            <th onClick={() => handleSort("id")}>
              Id
              {sortBy === "id" && (
                <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
              )}
            </th>
            <th onClick={() => handleSort("name")}>
              Name
              {sortBy === "name" && (
                <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
              )}
            </th>
            <th>StateProvince</th>
            <th onClick={() => handleSort("country")}>
              Country
              {sortBy === "country" && (
                <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
              )}
            </th>
            <th>Domain</th>
            <th>AlphaTwoCode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <ListingItem
              key={item.id}
              item={item}
              onClick={() => onItemClick(item.id)}
              onDelete={handleDeleteItem}
            />
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export default ListingPage;
