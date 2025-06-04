"use client";

import { useState } from "react";

export const useChatUsername = () => {
  const [username, setUsername] = useState(
    "User" + Math.floor(Math.random() * 1000)
  );

  return { username, setUsername };
};
