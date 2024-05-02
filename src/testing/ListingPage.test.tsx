import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ListingPage from "../components/ListingPage";

describe("ListingPage", () => {
  const mockData = [
    {
      id: "1",
      stateProvince: "State 1",
      name: "Item 1",
      web_pages: "example.com",
      alpha_two_code: "AE",
      country: "United Arab Emirates	 1",
    },
    {
      id: "2",
      stateProvince: "State 2",
      name: "Item 2",
      web_pages: "example.com",
      alpha_two_code: "AE",
      country: "United Arab Emirates",
    },
    {
      id: "3",
      stateProvince: "State 3",
      name: "Item 3",
      web_pages: "example.com",
      alpha_two_code: "AE",
      country: "United Arab Emirates",
    },
  ];

  it("renders table headers", () => {
    render(<ListingPage data={mockData} onItemClick={() => {}} />);
    expect(screen.getByText("Id")).toBeInTheDocument();
    expect(screen.getByText("stateProvince")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Domains")).toBeInTheDocument();
    expect(screen.getByText("AlphaTwoCode")).toBeInTheDocument();
    expect(screen.getByText("Country")).toBeInTheDocument();
  });

  it("renders table rows with data", () => {
    
    render(<ListingPage data={mockData} onItemClick={() => {}} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
    expect(screen.getByText("Item 4")).toBeInTheDocument();
    expect(screen.getByText("Item 5")).toBeInTheDocument();
    expect(screen.getByText("Item 6")).toBeInTheDocument();
  
});

  it("sorts data when table header is clicked", () => {

    render(<ListingPage data={mockData} onItemClick={() => {}} />);
    fireEvent.click(screen.getByText("Name"));
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
    expect(screen.getByText("Item 4")).toBeInTheDocument();
    expect(screen.getByText("Item 5")).toBeInTheDocument();
    expect(screen.getByText("Item 6")).toBeInTheDocument();

});

  it("handles item deletion", () => {
    
    const deleteMock = jest.fn();
    render(<ListingPage data={mockData} onItemClick={() => {}} />);
    fireEvent.click(screen.getByText("Remove"));
  
  });
});
