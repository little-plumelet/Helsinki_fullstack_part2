import { useEffect, useState } from "react"


export const useDebounce = (value) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => { setDebouncedValue(value) }, 800)
    return () => clearTimeout(handler)
  }, [value])

  return debouncedValue;
}