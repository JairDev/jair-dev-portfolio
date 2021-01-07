import React from "react";

function IterateArray({ array, Component, type }) {
  return array.map((item) => {
    switch (type) {
      case "userInfo":
        return (
          <Component
            key={item.name}
            name={item.name}
            lastName={item.lastName}
            userOccupation={item.occupation}
          />
        );
      case "socialMedia":
        return <Component key={item.iconClass} iconClass={item.iconClass} />;
      case "skills":
        return (
          <Component
            key={item.name}
            skillName={item.name}
            iconClass={item.iconClass}
          />
        );
      case "tools":
	return <Component key={item.iconClass} skillName={item.name} iconClass={item.iconClass}/>;
      case "projects":
        return (
          <Component
            key={item.name}
            img={item.imgSrc}
            projectName={item.name}
            projectDescription={item.description}
            linkGit={item.linkGit}
            linkDemo={item.linkDemo}
          />
        );
      default:
        console.log("error");
    }
  });
}

export default IterateArray;

