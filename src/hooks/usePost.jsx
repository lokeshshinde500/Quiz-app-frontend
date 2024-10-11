import React from "react";
import axios from "axios";

export default async function usePost(data) {
  const response = await axios.post(
    "https://quiz-app-backend-q7v7.onrender.com/api/auth/register",
    data
  );
  return response;
}
