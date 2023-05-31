import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import TemplatePage from "./pages/TemplatePage";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route ErrorBoundary={PageNotFound}>
      <Route path='/' element={<TemplatePage><></></TemplatePage>} />
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}