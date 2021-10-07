import styled from "styled-components";
import { Theflechedroite } from "../../common/utils/image";

const FormationgratuiteETpayante = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const Formationgratuite = styled.div`
font-family: Berlin Sans FB;
padding: 10% 10% 10% 10%;
width: 50%;
background-color: rgba(252, 228, 110, 0.48);
`

const Soustitregratuit = styled.div`
font-size: 100%;
font-family: Segoe UI;
margin: 5% 0% 0% 0%;
`
const Titregratuit = styled.div`
font-size: 170%;
font-weight: bold;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
margin: 5% 40% 5% 0%;
`
const Textegratuit = styled.div`
font-size: 125%;
font-family: Segoe UI;
margin: 5% 0% 5% 0%;
`
const Avantagegratuit1 = styled.div`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
margin: auto;
padding: 1% 0% 0% 0%;
`
const Avantagegratuit2 = styled.div`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
padding: 1% 16% 0% 0%;
margin: auto;
`
const Avantagegratuit3 = styled.div`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
padding: 1% 16% 0% 0%;
margin: auto;
`

const Formationpayante = styled.div`
font-family: Berlin Sans FB;
padding: 10% 10% 10% 10%;
width: 50%;
`

const Soustitrepayant = styled.div`
font-size: 100%;
font-family: Segoe UI;
margin: 5% 0% 5% 0%;
`

const Lesdeuxblocs = styled.div`
display: flex;
flex-direction: row;
margin: 5% 0% 5% 0%;
`
const Titrepayant = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bold;
font-size: 170%;
width: 95%;
`
const Infopayant = styled.div`
width: 50%;
font-size: 90%;
font-family: Segoe UI;
`
const Textepayant = styled.div`
font-size: 125%;
font-family: Segoe UI;
margin: auto;
`
const Avantagepayant1 = styled.div`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
padding: 1% 35% 0% 0%;
margin: auto;
`
const Avantagepayant2 = styled.div`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
padding: 1% 0% 0% 0%;
margin: 0% 0% 0% 10%;
`
const Avantagepayant3 = styled.div`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
padding: 1% 0% 0% 0%;
margin: 0% 0% 0% 10%;
`
const Avantagepayant4 = styled.div`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
padding: 1% 11% 0% 0%;
margin: auto;
    `
const Boutton = styled.button`
margin: 10% 0% 5% 60%;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 90%;
background-color: rgba(252, 228, 110, 0.48);
border : 1px transparent solid;
border-radius: 40px;
`
const Assemblerflechesettexte = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 5% 0% 10% 0%;
`

const HandiFormation = () => {
    
    return(
        <FormationgratuiteETpayante>

            <Formationgratuite>
                <Soustitregratuit>Formation pour tous</Soustitregratuit>
                <Titregratuit>Votre formation gratuite</Titregratuit>

                <Textegratuit>D'autres fonctionnalités d'édition sont cachées sous Gestionnaire de Filtre Vidéo dans lequel 
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
dans un fichier en utilisant son format de conteneur.</Textegratuit>

                <Assemblerflechesettexte>{Theflechedroite()}  <Avantagegratuit1>Cours généraux(Français - maths - géo ...)</Avantagegratuit1>
                </Assemblerflechesettexte>

                <Assemblerflechesettexte>{Theflechedroite()} <Avantagegratuit2> Résumé à la fin de chaque cours</Avantagegratuit2>
                </Assemblerflechesettexte>
                
              <Assemblerflechesettexte>  {Theflechedroite()} <Avantagegratuit3> Suivi simplifié de votre handicap</Avantagegratuit3>
              </Assemblerflechesettexte>

</Formationgratuite>



            
            
            <Formationpayante>
            
                <Soustitrepayant>Formation premium</Soustitrepayant>
                
                <Lesdeuxblocs>
                <Titrepayant>Votre formation payante </Titrepayant>
                <Infopayant>Formation éligible au CPF (compte professionnel de formation)</Infopayant>
                </Lesdeuxblocs>
                
                <Textepayant>D'autres fonctionnalités d'édition sont cachées sous Gestionnaire de Filtre Vidéo dans lequel 
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
dans un fichier en utilisant son format de conteneur.</Textepayant>

<Assemblerflechesettexte>
{Theflechedroite()}<Avantagepayant1>  Accès à tous les cours </Avantagepayant1>
</Assemblerflechesettexte>
<Assemblerflechesettexte>
{Theflechedroite()}<Avantagepayant2> Résumé à la fin de chaque cours + Mind MAP(carte cognitive,carte mentale du cours) </Avantagepayant2>
</Assemblerflechesettexte>
<Assemblerflechesettexte>
{Theflechedroite()}<Avantagepayant3> Accompagnement complet, de votre évolution à la mise en relation avec un professionnel.</Avantagepayant3>
</Assemblerflechesettexte>
<Assemblerflechesettexte>
{Theflechedroite()}<Avantagepayant4> Remise d'un certificat d'adaptibilité</Avantagepayant4>
</Assemblerflechesettexte>

                <Boutton>Vérifier mon éligibilité</Boutton>


            </Formationpayante>
        </FormationgratuiteETpayante>
    )
}

export default HandiFormation