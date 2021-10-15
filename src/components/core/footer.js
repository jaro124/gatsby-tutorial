import React from "react"

const Footer = () => {
  return (
    <div>
      This is the footer content
      <p>
        Site developed by me &copy; {new Date().getFullYear().toString()}{" "}
      </p>
    </div>
  )
}

export default Footer