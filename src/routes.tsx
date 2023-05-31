import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import TemplatePage from "./pages/TemplatePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<TemplatePage><></></TemplatePage>} />
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}