'use client'
import React from "react";
import { useAppSelector } from "@/lib/hooks";

const Page = () => {
  // Assuming 'state.counter.value' is the correct path to your Redux state
  const count = useAppSelector((state) => state.counter.value);

  return <div>{count}</div>;
};

export default Page;
