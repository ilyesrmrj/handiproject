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
    title: 'Premium',
    accessPre: 'Accès a toutes les formations',
    checkPre: <FontIconCheck icon="fa-solid fa-check" />,
  },
  {
    title: 'Freemium',
    accessFree: 'Accès aux cours généraux',
    check: <FontIconCheck icon="fa-solid fa-check" />,
    cross: <FontIconCross icon="fa-solid fa-xmark" />,
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
            {offer.nbCours || offer.accessPre || offer.accessFree}
          </CardContain>
          <CardContain>
            {offer.rdFin || offer.checkPre || offer.check}
          </CardContain>
          <CardContain>
            {offer.progess || offer.checkPre || offer.check}
          </CardContain>
          <CardContain>
            {offer.mindMap || offer.checkPre || offer.cross}
          </CardContain>
          <CardContain>
            {offer.accomp || offer.checkPre || offer.cross}
          </CardContain>
          <CardContain>
            {offer.certif || offer.checkPre || offer.cross}
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
