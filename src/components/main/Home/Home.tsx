"use client";
import AppButton from "@/components/common/AppButton";
import { useState } from "react";

export default function Home() {
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  return (
    <div className="flex gap-4">
      <AppButton
        onclick={() => {
          setIsLoading1(true);
          setTimeout(() => {
            setIsLoading1(false);
          }, 3000);
        }}
        isLoading={isLoading1}
        btnText="Common Button"
        classnames="bg-blue-600 rounded-lg py-2 px-4 font-bold"
        endIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
              clip-rule="evenodd"
            />
          </svg>
        }
      />
      <AppButton
        onclick={() => {
          setIsLoading2(true);
          setTimeout(() => {
            setIsLoading2(false);
          }, 3000);
        }}
        isLoading={isLoading2}
        btnText="Common Button"
        classnames="bg-blue-600 rounded-lg py-2 px-4 font-bold"
        startIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
          </svg>
        }
      />
    </div>
  );
}
