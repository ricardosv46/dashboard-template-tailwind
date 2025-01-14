import * as React from 'react'
import { SVGProps } from 'react'

const StatsUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 17 17"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M17 16v1H0v-1h17zM5.203 7.976l4.204 3.026L15 4.751v2.284h1V3h-4.036v1h2.366L9.26 9.665 5.131 6.691.759 10.647l.671.741 3.773-3.412z"
      stroke="none"
    />
  </svg>
)

export default StatsUp
