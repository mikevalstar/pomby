import { ApolloProvider } from '@apollo/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import apollo from './lib/apollo';
// Import the generated route tree
import { routeTree } from './routeTree.gen';
import './styles/globals.css';

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Create a new router instance
const router = createRouter({ routeTree });

function App() {
  return (
    <ApolloProvider client={apollo}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
