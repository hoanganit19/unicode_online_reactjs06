import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");
  const q = searchParams.get("q");
  const categories = searchParams.getAll("category");
  const paramEntries = Array.from(searchParams.entries());
  const query = {};
  var values = [];
  paramEntries.forEach((item) => {
    if (!query[item[0]]) {
      query[item[0]] = item[1];
    } else {
      if (!values.length) {
        values.push(query[item[0]]);
      }
      values.push(item[1]);
      query[item[0]] = values;
    }
  });
  const handleClick = () => {
    setSearchParams({
      ...query,
      q: "hello",
      status: "inactive",
    });
  };
  return (
    <div>
      <h1>Users</h1>
      <h2>Status: {status}</h2>
      <h2>q: {q}</h2>
      <button onClick={handleClick}>Change Search Params</button>
    </div>
  );
}
