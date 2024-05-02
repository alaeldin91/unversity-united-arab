import React, { useState } from "react";

interface Item {
  id: string;
  stateProvince: string;
  name: string;
  web_pages: string;
  alpha_two_code: string;
  country: string;
}

interface ListingItemProps {
  item: Item;
  onClick: (itemId: string) => void;
  onDelete: (itemId: string) => void;
}

const ListingItem: React.FC<ListingItemProps> = ({
  item,
  onClick,
  onDelete,
}) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);

  const handleDetailsClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault(); 
    event.stopPropagation();
    setShowDetailsDialog(true);
  };

  const closeDetailsDialog = () => {
    setShowDetailsDialog(false);
  };

  const handleDeleteClick = () => {
    setShowConfirmDialog(true);
  };

  const confirmDelete = () => {
    setIsDeleted(true);
    onDelete(item.id);
    setShowConfirmDialog(false);
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
  };

  return (
    <>
      {!isDeleted && (
        <tr onClick={() => onClick(item.id)}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.stateProvince ? item.stateProvince : "N/A"}</td>
          <td>{item.country}</td>
          <td>{item.web_pages}</td>
          <td>{item.alpha_two_code}</td>
          <td>
            <button className="remove" onClick={handleDeleteClick}>
              Remove
            </button>
            <button className="details" onClick={handleDetailsClick}>
              Details
            </button>
          </td>
        </tr>
      )}
      {showConfirmDialog && (
        <div className="custom-dialog">
          <p>Are you sure you want to delete this item?</p>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={cancelDelete}>No</button>
        </div>
      )}
      {showDetailsDialog && (
        <div className="details-dialog">
          <div className="details-content">
            <h3 className="title-details">Details for {item.name}</h3>
            <table className="universities">
              <thead>
                <tr className="listing-item">
                  <th>Id</th>
                  <th>Name</th>
                  <th>StateProvince</th>
                  <th>Country</th>
                  <th>Domain</th>
                  <th>AlphaTwoCode</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.stateProvince ? item.stateProvince : "N/A"}</td>
                  <td>{item.country}</td>
                  <td>{item.web_pages}</td>
                  <td>{item.alpha_two_code}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={closeDetailsDialog}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ListingItem;
