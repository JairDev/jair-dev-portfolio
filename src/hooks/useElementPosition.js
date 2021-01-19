import { useEffect, useRef, useState } from "react";

function useElementPosition() {
  const elementRef = useRef(null);
  const [count, setCount] = useState(0);
  const [classTop, setClassTop] = useState("");
  const [classBottom, setClassBottom] = useState("");

  const handleTop = (e) => {
    e.preventDefault();
    setCount((prev) => (prev += 1));
  };

  const handleBottom = (e) => {
    e.preventDefault();
    setCount((prev) => (prev -= 1));
  };

  const handlePosition = () => {
    const element = elementRef.current;
    const coords = element.getBoundingClientRect();
    const nodes = element.childNodes;
    const nodesHeight = nodes[0].offsetHeight;
    const realSizeElements = nodesHeight * nodes.length;
    const outSize = coords.height - realSizeElements;
    const marginAdd = outSize / (nodes.length - 1);
    const translate = (marginAdd + nodesHeight) * count;
    if (count >= nodes.length - 1) {
      setClassTop("deactivate-top");
    } else {
      setClassTop("");
    }
    console.log(count)

    if (count > 0) {
      setClassBottom("activate-bottom");
    } else {
      setClassBottom("");
    }
    element.style = `transform: translateY(-${translate}px)`;
  };

  useEffect(() => {
    handlePosition();
  }, [count]);

  return { count, handleTop, handleBottom, elementRef, classTop, classBottom };
}

export default useElementPosition;
