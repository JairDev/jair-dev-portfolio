import { useEffect, useRef } from "react";

function useElementPosition() {
  const elementRef = useRef(null)

  const position = () => {
    const element = elementRef.current
    const coords = element.getBoundingClientRect()
    // if(element)
  }
  // useEffect(() => {
  //   console.log(elementRef.current)
  // })
  return {elementRef, position}
}

export default useElementPosition