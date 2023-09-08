import React from "react";
import Button from '../../components/Button/Button'
import { css } from "@emotion/css";
import useLocalStorage from '../../hooks/useLocalStorage'

const Header = () => {
    
    const [test, setTest] = useLocalStorage('test')
    const handleOnClick = () => {
        console.log('signup hasbeen clicked')
        setTest('this is sample info')
    }
    return(
    <div
    className={css`
        display: flex;
        width: 100%;
        justify-content: right;
    `}
>
    <div>
        <Button>
            sign in
        </Button>
        <Button onClick = {handleOnClick}>
            login in
        </Button>
    </div>
</div>
    )
}

export default Header