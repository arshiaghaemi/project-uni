import { css } from "@emotion/css";
import theme from "@/configs/theme";

const H1 = ({children, align = 'right'}) => {
  return(
    <h1 className={css`
    text-align: ${align}
    margin: 3rem 0 1.38rem;
    font-weight: ${theme.typography.h1.fontWeight};
    line-height: ${theme.typography.h1.lineHeight};
    margin-top: 0;
    font-size: ${theme.typography.h1.fontSize}em;
    text-transform:uppercase;
    `}>{children}</h1>
  )
}
  


export default H1
