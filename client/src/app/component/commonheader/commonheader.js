import styled from "styled-components"


const CommonHeaderStyled = styled.div`
    text-align:center ;
    background-color: rgba(0,0,0,0.5);
    padding: 10px;
`

const CommonHeader = () => {

    return(
        <CommonHeaderStyled >
            <p>Header</p>
        </CommonHeaderStyled>
    )
}

export default CommonHeader