import axios from "axios";

export default async function useLogin(data) {
  const response = await axios.post(
    "https://quiz-app-backend-q7v7.onrender.com/api/auth/login",
    data
  );
  return response;
}
