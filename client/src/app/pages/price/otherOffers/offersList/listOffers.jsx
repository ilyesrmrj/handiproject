import { Title, Wrapper } from '../../../../common/utils/style'
import {
  CardPrice,
  WrapperPrice,
  CardContain,
  ButtonPrice,
  TitlePrice,
  FontIconCheck,
  FontIconCross,
} from './listOffers.style'

const ListOffers = [
  {
    title: 'Catégories',
    nbCours: 'Nombre de cours',
    rdFin: 'Rendu de fin',
    progess: 'Suivi de Progression',
    accomp: 'Accompagnement',
    mindMap: 'Mind-Map',
    certif: 'Certificat',
  },
  {
    title: 'Freemium',
    accessFree: 'Accès aux cours généraux',
    check: <FontIconCheck icon="fa-solid fa-check" />,
    cross: <FontIconCross icon="fa-solid fa-xmark" />,
  },
  {
    title: 'Premium',
    accessPre: 'Accès a toutes les formations',
    checkPre: <FontIconCheck icon="fa-solid fa-check" />,
  },
]

const ListOffersComponent = () => (
  <WrapperPrice>
    <Title>Nos Différentes offres :</Title>
    <Wrapper>
      {ListOffers.map((offer) => (
        <CardPrice>
          <TitlePrice>{offer.title}</TitlePrice>
          <CardContain>
            {offer.nbCours || offer.accessFree || offer.accessPre}
          </CardContain>
          <CardContain>
            {offer.rdFin || offer.check || offer.checkPre}
          </CardContain>
          <CardContain>
            {offer.progess || offer.check || offer.checkPre}
          </CardContain>
          <CardContain>
            {offer.mindMap || offer.cross || offer.checkPre}
          </CardContain>
          <CardContain>
            {offer.accomp || offer.cross || offer.checkPre}
          </CardContain>
          <CardContain>
            {offer.certif || offer.cross || offer.checkPre}
          </CardContain>
          {offer.accessPre || offer.accessFree ? (
            <ButtonPrice>Subscribe</ButtonPrice>
          ) : (
            <></>
          )}
        </CardPrice>
      ))}
    </Wrapper>
  </WrapperPrice>
)

export default ListOffersComponent
