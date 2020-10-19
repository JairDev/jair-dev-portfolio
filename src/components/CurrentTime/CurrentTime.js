import React, {useState, useEffect, useCallback} from "react";

function CurrentTime() {
  const [date, setDate] = useState(new Date())
  const hours = date.getHours()
  const minutes = date.getMinutes()
  let pmOrAm = ""
  if (hours < 12) {
    pmOrAm = "AM"
  }else if(hours >= 12 && hours < 24) {
    pmOrAm = "PM"
  }else if(hours > 23) {
    pmOrAm = "AM"
  }
  const clock = `${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? "0" : ""}${minutes} ${pmOrAm}`
  const [time, setTime] = useState(clock)
  
  const currentTime = useCallback(() => {
    setDate(new Date())
    setTime(clock)
  },[clock])

  useEffect(() => { 
    const interval = setInterval(() => {
      currentTime()
    }, 1000);

    return () => clearInterval(interval)
  }, [currentTime])
  return (
    <div className="content-date">
      <span>{time}</span>
    </div>
  )
  
}

export default CurrentTime