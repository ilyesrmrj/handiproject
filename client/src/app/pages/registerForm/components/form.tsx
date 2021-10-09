import { CardForm, FormWrapper } from "../../../common/utils/style"
import { InputStyled, LabelStyled, InputLabel, InputDiv, ErrorMessage  } from "./styleFormComponents/styleFormCom"
import { useState } from "react"

const Form = () => {

    const [firstname, setFirstname] = useState('')

    return(
        <FormWrapper>
            <CardForm>
                <InputDiv>
                    <InputLabel>
                        <InputStyled
                        error={false}
                        type="text"
                        name="firstname"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            setFirstname(event.target.value)
                        }
                        // onBlur={(event: React.ChangeEvent<HTMLInputElement>) =>
                        //   checkValidity(event.target)}
                        value={firstname}
                        />
                        {firstname && firstname.length >= 1 ? (
                        <ErrorMessage error={false}>
                            {/* {errorLenght(firstname.length)} */}
                        </ErrorMessage>
                        ) : (
                        <ErrorMessage error={false}>
                            The field is empty
                        </ErrorMessage>
                        )}
                        <LabelStyled>
                        First Name <span>*</span>
                        </LabelStyled>
                    </InputLabel>
                </InputDiv>
            </CardForm>
        </FormWrapper>
        
    )
}

export default Form
