// import { useState } from 'react'
import "./App.css";
import NotificationBody from "./components/Body";

function App() {
  return (
    <main className="max-w-screen-sm mx-auto my-0 md:my-10 bg-gray-100 font-plusJakartaSans">
      <section className="rounded-none md:rounded-xl px-4 bg-white">
        <div className="flex justify-between items-center pt-6 pb-8">
          <p className=" text-very-dark-blue font-semibold">
            Notifications{" "}
            <span className="bg-noti-blue px-2 py-1 text-white rounded">3</span>
          </p>
          <p className="cursor-pointer text-grayish-blue">Mark all as read</p>
        </div>
        <NotificationBody />
      </section>
    </main>
  );
}

export default App;
