import styled from "styled-components";
import { ImageBlueTeam } from "../../../assets/assets";
import { FitParentBoxWidthCenteredImage } from "../../common/utils/pictures.style";
import { LorepIpsum } from "../../common/utils/text";
import { TextArea } from "../rules/components/textArea";


const FlexContainer = styled.div`
  display: flex;

  align-items: center;
  min-height: inherit;
  height: inherit;
`;

const SquareContent = styled.div`
  position: relative;

  width: 45%;
  padding: 2.5rem;
  margin: auto;
`;

const mainProps = {
  title: "Je suis un etablissement scolaire",
  description: LorepIpsum,
};

const RegisterForm = styled.form`
  position: relative;

  padding: 2rem;
  margin: auto;
  border-radius: 24px;
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: 1px solid #eee;
`;

const FormInput = styled.input`
  position: relative;

  padding: 0.75rem;
  border: none;
  border-bottom: 1px solid #eee;
`;

const Hseparator = styled.hr`
  width: 75%;
  heigth: 1px;
  border: none;
  background-color: silver;
`;

const SubmitButton = styled.button`
  position: relative;
  padding: 0.75rem;
  border: none;
  background-color: #2daae1;
  color: white;
  width: fit-content;
  margin-left: auto;
  border-radius: 24px;
`;

const Price = styled.div`
  width: 500px;
  height: 500px;

  background-color: #2daae155;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 24px;
  font-size: 2rem;
`;

const Register = () => {
  return (
    <>
      <FlexContainer>
        <SquareContent>
          <TextArea title={mainProps.title} description={mainProps.description}></TextArea>
        </SquareContent>
        <SquareContent>
          <FitParentBoxWidthCenteredImage
            src={ImageBlueTeam}
            alt="image_blue_team"
          />
        </SquareContent>
      </FlexContainer>
      <FlexContainer>
        <SquareContent>
          <Price>
            9.99 € <br /> PAR LICENCE <br /> MENSUEL
          </Price>
        </SquareContent>
        <SquareContent>
          <RegisterForm>
            <FormInput
              name="etablissement"
              type="text"
              placeholder="Nom de l'etablissement"
            />
            <FormInput name="siret" type="text" placeholder="Numero de siret" />
            <FormInput
              name="nombre_user"
              type="text"
              placeholder="Nombre d'utilisateur"
            />

            <Hseparator />
            <FormInput
              name="telephone"
              type="text"
              placeholder="Numero de telephone"
            />
            <FormInput
              name="email"
              type="email"
              placeholder="Votre adresse email"
            />
            <FormInput name="rue" type="text" placeholder="Rue" />
            <FormInput
              name="code_postal"
              type="number"
              placeholder="Code postale"
            />
            <FormInput name="ville" type="text" placeholder="Ville" />

            <Hseparator />
            <SubmitButton type="submit">Envoyer la demande</SubmitButton>
          </RegisterForm>
        </SquareContent>
      </FlexContainer>
    </>
  );
}

export default Register
