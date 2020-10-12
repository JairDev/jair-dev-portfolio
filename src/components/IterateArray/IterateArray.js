import React from "react"

function IterateArray({array, Component, type}) {
  return(
    array.map((item) => {
        switch (type) {
          case "userInfo":
            return <Component
              name={item.name}
              lastName={item.lastName}
              userOccupation={item.occupation} />;
          case "socialMedia":
            return <Component iconClass={item.iconClass} />;
          case "skills":
            return <Component skillName={item.name} iconClass={item.iconClass} />;
          default: console.log("error");
        }
      })
  )
}

export default IterateArray