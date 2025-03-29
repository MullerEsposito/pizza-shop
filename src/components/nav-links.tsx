import { Link, LinkProps, useLocation } from "react-router-dom";

export function NavLink(props: LinkProps) {
  const { pathname: currentPath } = useLocation();

  return (
    <Link
      data-isactive={currentPath === props.to}
      className="flex items-center gap-1.5 text-sm font-medium hover:text-foreground text-muted-foreground data-[isactive=true]:text-foreground"
      {...props}
    />
  )
}