import Avatar from "react-avatar";

export default function LoginAvatar() {
  return (
    <div>
      <Avatar
        name="Pratik"
        round={true}
        size="50"
        color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
      />
    </div>
  );
}
