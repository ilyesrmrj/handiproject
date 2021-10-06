import styled from "styled-components"


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
const LinkStyle = styled.a`
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
        'Accueil',
        'Découvrir+',
        'Règles',
        'Tarifs'
    ]

    return(
        <WrapperList>
            <ListStyle>
                {List.map(link => <LiStyle key={link}><LinkStyle href='/'>{link}</LinkStyle></LiStyle>)}
            </ListStyle>
        </WrapperList>
    )
}

export default LinkList