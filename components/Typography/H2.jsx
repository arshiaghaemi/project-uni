import { css } from "@emotion/css";
import theme from "@/configs/theme";

const H2 = ({children}) => {
  return(
    <h1 className={css`
    text-align: center;
    margin: 3rem 0 1.38rem;
    font-weight: ${theme.typography.h2.fontWeight};
    line-height: ${theme.typography.h2.lineHeight};
    margin-top: 0;
    font-size: ${theme.typography.h2.fontSize}em;
    `}>{children}</h1>
  )
}
  


export default H2
