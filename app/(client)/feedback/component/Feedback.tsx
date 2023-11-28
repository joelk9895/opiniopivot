interface FeedbackItemProps {
  id: string;
  heading: string;
  description: string;
  upvote: number;
}

export default function FeedbackItem({
  heading,
  description,
  upvote,
  id,
}: FeedbackItemProps): JSX.Element {
  const upVote = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8080/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error("Error:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`kanban border-2 rounded-lg p-3 pb-10 mt-2 mb-2 w-[300px] min-w-[300px] max-w-[300px] min-h-[50px] relative`}
    >
      <h3 className="text-xl font-bold mb-7">{heading}</h3>
      <p>{description}</p>
      <button
        onClick={() => upVote(id)} // Pass a function reference
        className="kanbanUp font-bold bg-black rounded-lg w-10 text-white text-center"
      >
        {upvote}
      </button>
    </div>
  );
}
