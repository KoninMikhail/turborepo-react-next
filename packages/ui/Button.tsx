import * as React from "react"

export const Button = ({ className = "btn", ...rest }: any) => {
  return (
    <button className={className} {...rest}>
      Boop
    </button>
  )
}
