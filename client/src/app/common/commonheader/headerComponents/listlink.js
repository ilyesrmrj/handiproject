import styled from "styled-components"

const ListStyle = styled.ul`
    display: flex;
    flex-direction: row;
    font-size: 20px;
`
const LiStyle = styled.li`
    list-style: none;
    margin: 15px 20px;
`

const WrapperList = styled.div`
    width: 20%;
`
const LinkList = () => {
    const List = [
        'lorem',
        'lorem',
        'lorem',
        'lorem',
        'lorem'
    ]
    return(
        <WrapperList>
            <ListStyle>
                {List.map(link => <LiStyle>{link}</LiStyle>)}
            </ListStyle>
        </WrapperList>
    )
}

export default LinkList