import styled from "styled-components";
import { Theflechedroite } from "../../../common/utils/pictures";
import { FreemiumText, FreemiumTitle, PremiumText, PremiumTitle, PremiumInfo } from '../../../common/utils/text';

const FormationgratuiteETpayante = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-family:Arial;
`

const Formationgratuite = styled.div`
padding: 10% 10% 10% 10%;
width: 50%;
background-color: rgba(252, 228, 110, 0.48);
`

const Soustitregratuit = styled.div`
font-size: 100%;
margin: 5% 0% 0% 0%;
`
const Titregratuit = styled.div`
font-size: 170%;
font-weight: bold;
margin: 5% 40% 5% 0%;
`
const Textegratuit = styled.div`
font-size: 125%;
margin: 5% 0% 5% 0%;
`
const Avantagegratuit1 = styled.div`
text-align: left;
font-size: 90%;
margin: auto;
padding: 1% 0% 0% 0%;
`
const Avantagegratuit2 = styled.div`
text-align: left;
font-size: 90%;
padding: 1% 16% 0% 0%;
margin: auto;
`
const Avantagegratuit3 = styled.div`
text-align: left;
font-size: 90%;
padding: 1% 16% 0% 0%;
margin: auto;
`

const Formationpayante = styled.div`
padding: 10% 10% 10% 10%;
width: 50%;
`

const Soustitrepayant = styled.div`
font-size: 100%;
margin: 5% 0% 5% 0%;
`

const Lesdeuxblocs = styled.div`
display: flex;
flex-direction: row;
margin: 5% 0% 5% 0%;
`
const Titrepayant = styled.div`
font-weight: bold;
font-size: 170%;
width: 95%;
`
const Infopayant = styled.div`
width: 50%;
font-size: 90%;

`
const Textepayant = styled.div`
font-size: 125%;

margin: auto;
`
const Avantagepayant1 = styled.div`
text-align: left;
font-size: 90%;
padding: 1% 35% 0% 0%;
margin: auto;
`
const Avantagepayant2 = styled.div`
text-align: left;
font-size: 90%;

padding: 1% 0% 0% 0%;
margin: 0% 0% 0% 10%;
`
const Avantagepayant3 = styled.div`
text-align: left;
font-size: 90%;

padding: 1% 0% 0% 0%;
margin: 0% 0% 0% 10%;
`
const Avantagepayant4 = styled.div`
text-align: left;
font-size: 90%;

padding: 1% 11% 0% 0%;
margin: auto;
    `
const Boutton = styled.button`
font-size: 14px;
background-color: rgba(252, 228, 110, 0.48);
border : 1px transparent solid;
border-radius: 40px;
padding: .5em;
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
                <Titregratuit>{FreemiumTitle}</Titregratuit>
                <Textegratuit>{FreemiumText}</Textegratuit>
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
                <Titrepayant>{PremiumTitle}</Titrepayant>
                <Infopayant>{PremiumInfo}</Infopayant>
                </Lesdeuxblocs>
                <Textepayant>{PremiumText}</Textepayant>
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