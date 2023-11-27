import { useEffect, useState } from "react";
import "./App.css";
import NotificationBody from "./components/Body";
import { anotherProxy, Notification } from "./constants/Mock";

function App() {
  const [count, setCount] = useState(0);
  const [read, setRead] = useState(Notification);

  useEffect(() => {
    const unread = read.filter(
      (notification) => notification.readStatus === true
    ).length;
    setCount(unread);
  }, [read]);

  const handleClick = () => {
    anotherProxy.map((prev) => (prev.readStatus = false));
    setRead(anotherProxy);
  };

  return (
    <main className="max-w-screen-sm mx-auto my-0 md:my-10 bg-gray-100 font-plusJakartaSans">
      <section className="rounded-none md:rounded-xl px-4 bg-white">
        <div className="flex justify-between items-center pt-6 pb-8">
          <p className=" text-very-dark-blue font-semibold">
            Notifications{" "}
            <span className="bg-noti-blue px-2 py-1 text-white rounded">
              {count}
            </span>
          </p>
          <p className="cursor-pointer text-grayish-blue" onClick={handleClick}>
            {count !== 0 ? "Mark all as read" : "Mark as unread"}
          </p>
        </div>
        <NotificationBody />
      </section>
    </main>
  );
}

export default App;
