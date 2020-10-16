import { useEffect, useRef, useState } from "react";

function useElementPosition() {
  const elementRef = useRef(null)
  const [count, setCount] = useState(0)
  const [classTop, setClassTop] = useState("")
  const [classBottom, setClassBottom] = useState("")

  const handleTop = (e) => {
    e.preventDefault()
    console.log("top")
    setCount(prev => prev += 1)
  }

  const handleBottom = (e) => {
    e.preventDefault()
    console.log("bottom")
    setCount(prev => prev -= 1)
  }

  useEffect(() => {
    const element = elementRef.current
    const coords = element.getBoundingClientRect()
    const node = element.childNodes
    const nodesHeight = node[0].offsetHeight
    const realSizeElements = nodesHeight * node.length
    const outSize = coords.height - realSizeElements
    const marginAdd = outSize / (node.length - 1)
    const translate = (marginAdd + nodesHeight) * count

    if(count >= node.length - 1) {
      setClassTop("deactivate-top")
    }else {
      setClassTop("")
    }
   
    if(count > 0) {
      setClassBottom("activate-bottom")
    }else {
      setClassBottom("")
    }
    element.style = `transform: translateY(-${translate}px)`
  }, [count])

  return {handleTop, handleBottom, elementRef, classTop, classBottom}
}

export default useElementPosition