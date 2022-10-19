import * as React from "react"

const Menu = (props) => (
  <svg
    aria-hidden="true"
    className="pre-nav-design-icon"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M21 5.25H3M21 12H3m18 6.75H3"
    />
  </svg>
)

export default Menu
