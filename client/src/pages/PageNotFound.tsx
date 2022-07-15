import React from "react";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-white bg-black">
      <h1 className="m-4 text-xl font-bold">Page not found.</h1>
      <h2>Please try going back.</h2>
    </div>
  );
}