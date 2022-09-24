import React from "react";

const CustomLink = React.forwardRef(({ onClick, href }, ref) => {
  return <a href={href} onClick={onClick} ref={ref}></a>;
});

export default CustomLink;
