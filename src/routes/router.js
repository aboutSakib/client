import { createBrowserRouter } from "react-router-dom";
import Add from "../components/addUser/Add";
import User from "../components/getUser/User";
import Edit from "../components/updateUser/Edit";

const routes = createBrowserRouter([
  { path: "/", element: <User /> },
  { path: "/add", element: <Add /> },
  { path: "/edit/:id", element: <Edit /> },
  { path: "/delete", element: "Delete Page" },
]);

export default routes;
