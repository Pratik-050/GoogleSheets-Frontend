import { useContext } from "react";
import Avatar from "react-avatar";
import AuthContext from "../Store/AuthContext";

export default function LoginAvatar() {
  const pic = localStorage.getItem("profilePic");
  const authContext = useContext(AuthContext);
  return (
    <div>
      <Avatar
        src={pic}
        name={authContext.email}
        round={true}
        size="50"
        color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
      />
    </div>
  );
}
