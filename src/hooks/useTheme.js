import React, { useState, useEffect } from "react";

function useTheme(defaultTheme) {
  if (localStorage.getItem("V-Editor-Theme") == null) {
    localStorage.setItem("V-Editor-Theme", JSON.stringify(defaultTheme));
  }
  const [Theme, setTheme] = useState(() => {
    const jsonValue = localStorage.getItem("V-Editor-Theme");
    console.log(jsonValue);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
  });
  useEffect(() => {
    console.log("sf", Theme);
    localStorage.setItem("V-Editor-Theme", JSON.stringify(Theme));
  }, [Theme]);
  return [Theme, setTheme];
}

export default useTheme;
