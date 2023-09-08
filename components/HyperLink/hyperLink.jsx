import { css } from "@emotion/css";
import Link from "next/link";

const Hyperlink = ({children, href}) => (
  <Link href={href} className={css`
  text-decoration: none;
  border: 1px solid blue;
  padding:5px 20px;
  border-radius:10px;

  `
  }>
    {children}
  </Link>
)

export default Hyperlink
