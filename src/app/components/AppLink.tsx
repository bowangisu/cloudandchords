import { Link as RouterLink, type LinkProps, useParams } from "react-router";

export function Link({ to, ...props }: LinkProps) {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang === "cn" ? "/cn" : "/en";

  const localizedTo =
    typeof to === "string" && to.startsWith("/")
      ? `${prefix}${to === "/" ? "" : to}`
      : to;

  return <RouterLink {...props} to={localizedTo} />;
}
