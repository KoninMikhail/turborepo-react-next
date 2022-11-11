export const Button = ({ className = "btn", children, ...rest }: any) => {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}
