import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import CarPage from "./pages/Car";
import CarCategoryPage from "./pages/CarCategory";
import ClientPage from "./pages/Client";
import PageNotFound from "./pages/PageNotFound";
import RootPage from "./pages/Root";
import SchedulingPage from "./pages/Scheduling";
import WashingServicePage from "./pages/WashingService";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      ErrorBoundary={PageNotFound}>
      <Route path='/' element={<RootPage />} />
      <Route path='/car' element={<CarPage />} />
      <Route path='/car-category' element={<CarCategoryPage />} />
      <Route path='/client' element={<ClientPage />} />
      <Route path='/scheduling' element={<SchedulingPage />} />
      <Route path='/washing-service' element={<WashingServicePage />} />
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}