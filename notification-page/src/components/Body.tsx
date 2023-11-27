import Card from "./Card";
import { anotherProxy } from "../constants/Mock";
import { NotificationType } from "../constants/Mock";

const Body: React.FC = () => {
  return (
    <div className="pb-3">
      {anotherProxy.map((notice: NotificationType) => (
        <Card key={notice.profileName} data={notice} />
      ))}
    </div>
  );
};

export default Body;
