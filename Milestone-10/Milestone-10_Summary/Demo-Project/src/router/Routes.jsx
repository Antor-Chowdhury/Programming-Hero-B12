import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import PlantDetails from "../pages/PlantDetails";
import ForgetPass from "../pages/ForgetPass";
import Error from "../pages/Error";
import AddPlants from "../pages/AddPlants";
import MyPlants from "../pages/MyPlants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/forget/:email",
        element: <ForgetPass></ForgetPass>,
      },
      {
        path: "/add-plants",
        element: (
          <PrivateRoute>
            <AddPlants></AddPlants>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-plants",
        element: <MyPlants></MyPlants>,
      },
    ],
  },
]);

export default router;
