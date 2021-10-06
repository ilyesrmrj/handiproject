import Card from "./card/card"
import styled from "styled-components"
import { ArticleList } from "../utils/articleList"


 const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center ;
    align-content: space-between;
    margin: 25px;
`

 const CardComponent = () => (
    <CardWrapper>
        {ArticleList.map(article => <Card key={article.title} title={article.title} img={article.img}/> )}
    </CardWrapper>
    )
 
 export default CardComponent
 