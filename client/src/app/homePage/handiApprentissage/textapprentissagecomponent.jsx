import styled from "styled-components"

const Composenttitlepage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
font-size: 140%;
font-family: Berlin Sans FB;
margin: 0% 5% 10% 0%;
padding: 0% 0% 0% 0%;
width: 59%;
`

const Composenttext = styled.div`
text-align: left;
font-family: Segoe UI;
font-size: 90%;
margin: 6% 7% 0% 5%;
padding: 2% 0% 2% 0%;
`

const Composentbutton = styled.button`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
margin: 3% 0% 0% 75%;
padding: 1% 4% 1% 4%;
border: 1px black solid;
border-radius: 40px;
background-color: transparent;
`

const TitleEngagement = styled.h1`
font-weight: lighter;
margin: 10% 10% 0% 5%;
padding: 0% 25% 0% 0%;
` 

const Textapprentissage = () =>{
    return(
        <Composenttitlepage>
            <TitleEngagement>Comment se passe l'apprentissage ?</TitleEngagement>
            <Composenttext>
                D'autres fonctionnalités d'édition sont cachées sous Gestionnaire de Filtre Vidéo dans lequel 
vous pouvez recadrer, faire pivoter, retourner et ajouter des bordures, des logos ou même 
des images en double pour une durée donnée.
De plus, vous pouvez ajouter des sous-titres codés en SRT, ASS et SSA à la vidéo ou modifier 
la saturation, la luminosité et la couleur de vos vidéos éditées.
D'un autre côté, l'interface manque de ligne chronologique et n'est pas intuitive pour moi, et lors de 
la prévisualisation, vous ne pouvez prévisualiser que le filtre appliqué sélectionné mais 
pas tous les filtres appliqués, ce qui n'est pas pratique pour moi.

Cet outil est parfait pour les débutants qui ont des besoins très basiques et 
doivent apprendre rapidement, car il ne vous permettra pas d'avoir plus de contrôles. 
Un bon avantage de cet outil d'édition est que la vidéo et l'audio sont enregistrés 
dans un fichier en utilisant son format de conteneur.    
                <Composentbutton>Les règles</Composentbutton>
            </Composenttext>
        
        </Composenttitlepage>
    )
}

export default Textapprentissage