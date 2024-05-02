Clone the project repository from GitHub:
bash
Copy code
git clone https://github.com/alaeldin91/unversity-united-arab.git
Navigate into the project directory:
bash
Copy code
cd unversity-united-arab
Install project dependencies using npm:
bash
Copy code
npm install
Run the project in development mode:
bash
Copy code
npm run dev
After setting up the project, you mentioned that you want to integrate React Testing Library and Axios. Here's how you can proceed:

Install React Testing Library:
bash
Copy code
npm install --save @testing-library/react @testing-library/jest-dom
Install Axios for making HTTP requests:
bash
Copy code
npm install axios
Regarding the project structure and components, it seems like you've organized it in a Model-View-Controller (MVC) architecture. Here's a breakdown of the components you mentioned:

Model (M):

UniversityAPI: Represents the model responsible for handling data related to universities.
Views (V):

Components:
listItem: Component to display individual items in a list.
pageList: Component for paginating the list.
searchBar: Component for searching/filtering items.
Controller (C):

App.tsx: Main controller component responsible for orchestrating the views and model interactions.
Additionally, you mentioned various other components like listPage, Details Dialog, Sorting, and Search Bar. These seem to be part of the view layer, handling different aspects of the user interface.
