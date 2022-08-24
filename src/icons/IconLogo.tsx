import { SVGProps } from 'react'

const IconLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.7}
      d="M11.302 0v8.01H0v5.911h17.214V0h-5.912Z"
      fill="#00866D"
    />
    <path
      d="M3.292 17.349H0V32h5.915v-8.736h11.299v-5.915H3.292Z"
      fill="#00866D"
    />
  </svg>
)

export default IconLogo
