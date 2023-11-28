"use client";
import { useEffect, useState } from "react";
import FeedbackItem from "./component/Feedback";

interface Task {
  id: string;
  heading: string;
  description: string;
  upvote: number;
}

export default function FeedBack(): JSX.Element {
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch("http://localhost:8080/tasks/");
        if (!response.ok) {
          console.error("Error:", response.statusText);
          return;
        }
        const fetchedData: Task[] = await response.json();
        console.log(fetchedData);
        setData(fetchedData);
      } catch (err) {
        console.error(err);
      }
    };

    fetching();
  }, []);

  return (
    <main className="flex flex-col items-center w-full h-full">
      {data.map((item) => (
        <FeedbackItem
          key={item.id}
          id={item.id}
          heading={item.heading}
          description={item.description}
          upvote={item.upvote}
        />
      ))}
    </main>
  );
}
