import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center min-h-screen max-w-6xl mx-auto ">
      <div className="text-center space-y-7">
        <h1 className="font-extrabold md:text-5xl sm:text-3xl text-xl ">
          404 Not Found{" "}
        </h1>
        <h3 className="text-black/80 text-md sm:text-lg">
          Your visited page not found. You may go home page. 😢
        </h3>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          &larr; Back to home page
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
