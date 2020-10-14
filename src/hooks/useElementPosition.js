import { useEffect, useRef, useState } from "react";

function useElementPosition() {
  const elementRef = useRef(null)
  const [count, setCount] = useState(0)
  // let count = 0
  const position = () => {
    // console.log(elementRef)
    // count += 1
    setCount(prev => prev += 1)
    
    // const element = elementRef.current
    // const coords = element.getBoundingClientRect()
    // const node = element.childNodes
    // let nodesHeight = 0
    // for(let i = 0; i < node.length; i++) {
    //   nodesHeight = node[i].offsetHeight
    // }
    // let translate = nodesHeight * count
    // element.style = `transform: translateY(-${translate}px)`
  }

  useEffect(() => {
    console.log(count)
    if(count === 3) {
      setCount(0)
      return
    }
    const element = elementRef.current
    const coords = element.getBoundingClientRect()
    const node = element.childNodes
    let nodesHeight = 0
    for(let i = 0; i < node.length; i++) {
      nodesHeight = node[i].offsetHeight
    }
    let translate = nodesHeight * count
    element.style = `transform: translateY(-${25}%)`

  }, [count])

  return {elementRef, position}
}

export default useElementPosition