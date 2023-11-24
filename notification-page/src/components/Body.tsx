/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "./Card";
// import { Notification, NotificationType } from "../constants/Mock";
import { NotificationType } from "../constants/Mock";
type BodyType = {
  data: NotificationType[];
};

const Body: React.FC<BodyType> = ({ data }) => {
  return (
    <div className="pb-3">
      {data.map((notice: any) => (
        <Card key={notice.profileName} data={notice} />
      ))}
    </div>
  );
};

export default Body;
