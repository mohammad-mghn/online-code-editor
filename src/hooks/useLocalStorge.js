import { useState, useEffect } from "react";

const PREFIX = "V-Editor-";

function Uselocalstorge(key) {
  const prefixedKey = PREFIX + key;

  const [Value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(Value));
  }, [Value]);

  return [Value, setValue];
}

export default Uselocalstorge;
