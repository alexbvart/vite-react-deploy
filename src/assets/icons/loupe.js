import * as React from "react"

const Loupe = (props) => (
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
      d="M13.962 16.296a6.716 6.716 0 0 1-3.462.954 6.728 6.728 0 0 1-4.773-1.977A6.728 6.728 0 0 1 3.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0 1 10.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0 1 17.25 10.5a6.726 6.726 0 0 1-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
    />
  </svg>
)

export default Loupe
