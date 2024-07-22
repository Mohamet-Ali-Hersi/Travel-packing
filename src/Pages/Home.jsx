import React from "react";
import { useAuth } from "../hooks/useAuth";
import PackingList from "../Components/PackingList";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to PackingList </h1>
      {user ? (
        <PackingList />
      ) : (
        <p className="mt-4">Please sign in to manage your list❕</p>
      )}
    </div>
  );
};

export default Home;
