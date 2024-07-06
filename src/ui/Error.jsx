import { useNavigate } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error({ error, resetErrorBoundary }) {
  const navigate = useNavigate();

  return (
    <div className="max mx-auto max-w-5xl">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
      <button onClick={() => navigate(-1)}></button>
    </div>
  );
}

export default Error;
