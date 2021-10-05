import styled from "styled-components"


const Composantpage = styled.div`
text-align : left;
font-size : 140%;
font-family: Berlin Sans FB;
background-color : #0fb7ff3d;
margin: 0% 0% 0% 0%;
padding: 10% 10% 10% 10%;
height: 100%;
`

const Composanttexte = styled.div`
text-align: left;
font-family: Segoe UI;
font-size: 90%;
margin: 2% 0% 0% 0%;
padding: 2% 0% 2% 0%;
`

const Composantbutton = styled.button`
text-align: left;
font-size: 65%;
font-family: Segoe UI;
margin: 2% 0% 0% 70%;
padding: 1% 4% 1% 4%;
border: 1px black solid;
border-radius: 40px;
background-color: transparent;
`
const TitleEngagement = styled.h2`
font-weight: lighter;
`

const HandiEngagement = () => {
    
    return(
    <Composantpage>
        <TitleEngagement>Quel est l'engagement de Handi ?</TitleEngagement>
        <Composanttexte>
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
dans un fichier en utilisant son format de conteneur.</Composanttexte>

<Composantbutton>Découvrez nos valeurs</Composantbutton>
        </Composantpage>)
}

export default HandiEngagement
