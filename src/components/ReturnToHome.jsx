import { useNavigate } from "react-router-dom";

export const ReturnToHome = () => {
  const naviage = useNavigate();
  return (
    <div className="flex flex-col gap-6 items-center justify-center max-w-7xl min-h-[320px]">
      <h2 className="text-2xl font-bold text-gray-800">Please fill the for to get slip page</h2>{" "}
      <button
        onClick={() => naviage("/")}
        className="text-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
      >
        Generate Slip
      </button>{" "}
    </div>
  );
};
