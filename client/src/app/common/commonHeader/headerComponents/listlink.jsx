import styled from "styled-components"
import { Link ,withRouter } from 'react-router-dom'
  
const ListStyle = styled.ul`
    display: flex;
    flex-direction: row;
    font-size: 20px;
`
const LiStyle = styled.li`
    list-style: none;
    margin-right: 80px;
    margin-top: 14px;
    cursor: pointer;
   
`

const LinkStyle = styled(Link)`
    color: gray;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
        color: black;
    }
`

const WrapperList = styled.div`
    width: 20%;
`
const LinkList = () => {

    const List = [
        'accueil',
        'découvrir+',
        'règles',
        'tarifs'
    ]

    return(

        <WrapperList>
            <ListStyle>
                {   List.map
                    (link => 
                        <LiStyle key={link}>
                            <LinkStyle to={`/${link}`} >{link}</LinkStyle>
                        </LiStyle>
                    )
                }
            </ListStyle>
        </WrapperList>

    )
}

export default withRouter(LinkList)