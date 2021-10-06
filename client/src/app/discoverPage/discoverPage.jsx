import React from "react"
import TextCommonComponent from "../common/commonComponents/textCommonComponent"
import { Wrapper } from "../common/utils/style"
import { DiscoverPageTitle, DiscoverPageText, DiscoverButtonLabel } from "../common/utils/text"
import { ImageDiscoverComponent } from "../common/utils/image"

const DiscoverPage = () => {
    return(
        <Wrapper>
            <TextCommonComponent title={DiscoverPageTitle} text={DiscoverPageText} buttonLabel={DiscoverButtonLabel} />
            <ImageDiscoverComponent/>
        </Wrapper>
    )
}

export default DiscoverPage
