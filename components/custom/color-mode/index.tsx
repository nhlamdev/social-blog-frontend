"use client";
import { COLOR_THEME_CASE } from "@/constant";
import React, { useState } from "react";

export const ThemeToggleButton = () => {
  return (
    <button
      title="Toggle Theme"
      onClick={() => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem(COLOR_THEME_CASE, "dark");
      }}
      className={`w-12 h-6 rounded-full p-1 bg-gray-200 dark:bg-gray-400 relative transition-colors 
        duration-500 ease-in focus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-600
        focus:border-transparent shadow-md
      `}
    >
      <div
        id="toggle"
        className={`rounded-full w-4 h-4 bg-blue-600 dark:bg-blue-500 select-none
          relative 
          ml-0
          dark:ml-6
          pointer-events-none 
          transition-all 
          duration-300 
          ease-out
        `}
      />
    </button>
  );
};
