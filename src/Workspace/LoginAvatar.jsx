import { useContext } from "react";
import Avatar from "react-avatar";
import AuthContext from "../Store/AuthContext";

export default function LoginAvatar() {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <Avatar
        name={authContext.email}
        round={true}
        size="50"
        color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
      />
    </div>
  );
}
