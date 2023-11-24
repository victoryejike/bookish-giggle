/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "./Card";
import { Notification } from "../constants/Mock";
// import { NotificationType } from "../constants/Mock";

const Body: React.FC = () => {
  return (
    <div className="pb-3">
      {Notification.map((notice: any) => (
        <Card key={notice.profileName} data={notice} />
      ))}
    </div>
  );
};

export default Body;
