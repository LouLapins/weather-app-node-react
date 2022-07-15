import React from "react";

export default function ErrorMsg() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-white bg-black">
      <h1 className="m-4 text-xl font-bold">Oh no! Something went wrong.</h1>
      <h2>Please try going back or refreshing the page.</h2>
    </div>
  );
}
