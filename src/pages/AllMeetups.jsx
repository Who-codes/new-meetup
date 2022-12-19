import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const AllMeetups = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://meetup-bd2f7-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
      );
      const data = await res.json();
      const meetups = [];
      for (let key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }
      setLoadedMeetups(meetups);
    };

    getData();
  }, []);

  return (
    <div className="k-d-flex-col k-gap-10 k-align-items-center k-p-5">
      <Cards meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetups;
