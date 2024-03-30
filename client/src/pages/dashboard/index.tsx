import { selectCurrentUser } from "features/users/user.slice";
import { useSelector } from "react-redux";
import DashboardPanel from "./dashboardPanel";
import { Navigate } from "react-router-dom";
import { CoursesPath } from "routes/paths";

export default function Dashboard() {
  const currentUser = useSelector(selectCurrentUser);
  return currentUser.role === 'admin' ? <DashboardPanel /> : <Navigate to={CoursesPath.COURSES} />
}
