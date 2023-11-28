"use client";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      setMessage(data);

      if (!response.ok) {
        console.error("Error:", response.statusText);
        return;
      }


      document.cookie = `refreshToken=${data.refreshToken}; secure; samesite=None; path=/`;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="w-full h-full flex flex-col items-center justify-start">
      <h3 className="font-bold text-xl mt-10 mb-8">SignUp</h3>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          className="bg-gray-100 border border-gray-300 p-2 rounded-md w-96 mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          className="bg-gray-100 border border-gray-300 p-2 rounded-md w-96 mb-4"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white p-2 font-normal rounded-md"
        >
          Sign up
        </button>
      </form>
      <p className="text-red-500 mt-4">{message}</p>
    </main>
  );
}
