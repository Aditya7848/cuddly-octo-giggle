import "../styles/App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./applayout/AppLayout";
import FlightMain from "./flight/FlightMain";
import HotelsLayout from "./hotels/HotelsLayout";
import HotelsMain from "./hotels/HotelsMain";
import HotelsList from "./hotels/HotelsList";
import TrainsLayout from "./trains/TrainsLayout";
import TrainsMain from "./trains/TrainsMain";
import TrainsList from "./trains/TrainsList";
import BusesLayout from "./buses/BusesLayout";
import BusesMain from "./buses/BusesMain";
import BusesList from "./buses/BusesList";
import Offers, { loader as offerLoader } from "./offers/Offers";
import FlightList from "./flight/FlightList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route
        index
        element={
          <>
            <FlightMain />
            <Offers />
          </>
        }
      />
      <Route
        path="flights"
        element={
          <>
            <FlightMain />
            <Offers />
          </>
        }
      />
      <Route path="/flights/search" element={<FlightList />} />

      <Route path="hotels" element={<HotelsLayout />}>
        <Route
          index
          element={
            <>
              <HotelsMain />
              <Offers />
            </>
          }
        />
        <Route path="search" element={<HotelsList />} />
      </Route>

      <Route path="trains" element={<TrainsLayout />}>
        <Route
          index
          element={
            <>
              <TrainsMain />
              <Offers />
            </>
          }
        />
        <Route path="search" element={<TrainsList />} />
      </Route>

      <Route path="buses" element={<BusesLayout />}>
        <Route
          index
          element={
            <>
              <BusesMain />
              <Offers />
            </>
          }
        />
        <Route path="search" element={<BusesList />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
