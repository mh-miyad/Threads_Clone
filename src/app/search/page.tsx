import SearchComp from "@/components/SearchComponents/SearchComp";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Search Your Dream",
  description: "CodiTalk Search Page",
};
const Search = () => {
  return (
    <div>
      <SearchComp />
    </div>
  );
};

export default Search;
