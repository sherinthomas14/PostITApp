import user from "../Images/sherin.jfif";
import { useSelector } from "react-redux";
import Location from "./Location";
const User = () => {
  const defaultImage = "http://localhost:3001/uploads/user.png";
  const email = useSelector((state) => state.users.user.email);
  const name = useSelector((state) => state.users.user.name);
  return (
    <div className="userInfos">
      <img src={user} className="userImage" />
      <p>{name}</p>
      <p>{email}</p>
      <Location />
    </div>
  );
};

export default User;
