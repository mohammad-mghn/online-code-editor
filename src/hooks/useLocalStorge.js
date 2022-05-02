import { useState, useEffect } from "react";

const PREFIX = "V-Editor-";

function Uselocalstorge(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [Value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(Value));
  }, [Value, prefixedKey]);

  return [Value, setValue];
}

export default Uselocalstorge;
