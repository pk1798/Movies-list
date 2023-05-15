import React from "react";

export default function MovieInfo({ setSelectedMovie }) {
  return (
    <>
      <div>MovieInfo</div>
      <button className="btn btn-primary" onClick={() => setSelectedMovie("")}>
        Back
      </button>
    </>
  );
}
