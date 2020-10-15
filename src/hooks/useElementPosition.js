import { useEffect, useRef, useState } from "react";

function useElementPosition() {
  const elementRef = useRef(null)
  const [count, setCount] = useState(0)
  const [classTop, setClassTop] = useState("")
  const [classBottom, setClassBottom] = useState("")

  const position = (e) => {
    let element = e.target
    element.className === "top" ? top() : bottom()
  
  }
  const top = () => {
    setCount(prev => prev += 1)
    
  }

  const bottom = () => {
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
    const bottom = coords.height - nodesHeight
    if(count >= node.length) {
      console.log("return")
      return
    }
    if(count >= node.length - 1) {
      setClassTop("deactivate-top")
      console.log("deactivate-top")
    }else {
      console.log("activate-top")
      setClassTop("")
    }
   
    if(count > 0) {
      console.log("activate-bottom")
      setClassBottom("activate-bottom")
    }else {
      console.log("deactivate-bottom")
      setClassBottom("")
    }
  
    // console.log(coords)
    console.log(count)
    // console.log(translate)
    element.style = `transform: translateY(-${translate}px)`
    // console.log("useElementPosition -> bottom", bottom)
    // console.log(translate)

  }, [count])

  return {elementRef, position, classTop, classBottom}
}

export default useElementPosition