import { NotificationType } from "../constants/Mock";

type CardProps = {
  data: NotificationType;
};
const Card: React.FC<CardProps> = ({ data }) => {
  let cardContent;
  if (data.type === "reaction") {
    cardContent = (
      <div className="pl-3 text-sm lg:text-base">
        <p className={``}>
          <span className=" text-very-dark-blue font-semibold">
            {data.profileName}
          </span>{" "}
          reacted to your recent post{" "}
          {data?.notificationFor?.post && (
            <span className=" text-very-dark-blue font-bold cursor-pointer hover:text-noti-blue hoverfont-bold">
              {data?.notificationFor?.post}
            </span>
          )}{" "}
          {data.readStatus ? (
            <span className="w-2 h-2 bg-noti-red inline-block rounded-full"></span>
          ) : (
            ""
          )}
        </p>
        <p>{data.time}</p>
      </div>
    );
  }

  if (data.type === "follow") {
    cardContent = (
      <div className="pl-3 text-sm lg:text-base">
        <p className={``}>
          <span className=" text-very-dark-blue font-semibold">
            {data.profileName}
          </span>{" "}
          followed you{" "}
          {data?.notificationFor?.post && (
            <span className=" text-very-dark-blue font-bold cursor-pointer hover:text-noti-blue hoverfont-bold">
              {data?.notificationFor?.post}
            </span>
          )}{" "}
          {data.readStatus ? (
            <span className="w-2 h-2 bg-noti-red inline-block rounded-full"></span>
          ) : (
            ""
          )}
        </p>
        <p>{data.time}</p>
      </div>
    );
  }

  if (data.type === "image-comment") {
    cardContent = (
      <div className="pl-3 text-sm lg:text-base grid grid-cols-3 grow">
        <div className=" col-span-2">
          <p className={``}>
            <span className=" text-very-dark-blue font-semibold">
              {data.profileName}
            </span>{" "}
            commented on your picture{" "}
          </p>
          <p>{data.time}</p>
        </div>
        <img
          src={data.notificationFor.post && data.notificationFor.post}
          alt="picture"
          className="w-10 h-10 object-contain ml-auto"
        />
      </div>
    );
  }

  if (data.type === "join" || data.type === "left-group") {
    cardContent = (
      <div className="pl-3 text-sm lg:text-base">
        <p className={``}>
          <span className=" text-very-dark-blue font-semibold">
            {data.profileName}
          </span>{" "}
          {data?.notificationFor?.newGroupMember
            ? "has joined your group"
            : "left the group"}{" "}
          {data?.notificationFor?.groupName && (
            <span className=" text-very-dark-blue font-bold cursor-pointer hover:text-noti-blue hoverfont-bold">
              {data?.notificationFor?.groupName}
            </span>
          )}{" "}
          {data.readStatus ? (
            <span className="w-2 h-2 bg-noti-red inline-block rounded-full"></span>
          ) : (
            ""
          )}
        </p>
        <p>{data.time}</p>
      </div>
    );
  }

  if (data.type === "message") {
    cardContent = (
      <div className="pl-3 text-sm lg:text-base">
        <div className={``}>
          <span className=" text-very-dark-blue font-semibold">
            {data.profileName}
          </span>{" "}
          sent you a private message
          {data.readStatus ? (
            <span className="w-2 h-2 bg-noti-red inline-block rounded-full"></span>
          ) : (
            ""
          )}
          <p>{data.time}</p>
          <div className="border border-grayish-blue p-3 rounded mt-2 hover:bg-light-grayish-blue-1 hover:border-light-grayish-blue-1">
            {data?.notificationFor?.post && (
              <span className=" text-dark-grayish-blue cursor-pointer">
                {data?.notificationFor?.post}
              </span>
            )}{" "}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={` ${
          data.readStatus ? "bg-light-grayish-blue-2" : "bg-white"
        } w-full rounded-lg h-full p-3 cursor-pointer my-2 `}
      >
        <div className="flex justify-start items-start">
          <img
            src={data.avatar}
            alt="avatar"
            className="object-contain w-10 h-10 rounded-full"
          />

          {cardContent}
        </div>
      </div>
    </>
  );
};

export default Card;
