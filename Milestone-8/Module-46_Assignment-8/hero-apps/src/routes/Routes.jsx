import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import InstalledApps from "../pages/InstalledApps";
import AppsDetails from "../pages/AppsDetails";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "apps/:appId",
        Component: AppsDetails,
      },
      {
        path: "installed",
        Component: InstalledApps,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
