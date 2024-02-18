import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import './styles/globals.css';

// Create a new router instance
export const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
