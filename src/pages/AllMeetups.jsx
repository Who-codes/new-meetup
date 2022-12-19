import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";

const AllMeetups = () => {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "allPosts", "posts");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setMeetup((prevMeetup) => [...prevMeetup, docSnap.data()]);
      }
    };

    getData();
  }, []);

  console.log(meetup);

  return <div></div>;
};

export default AllMeetups;
