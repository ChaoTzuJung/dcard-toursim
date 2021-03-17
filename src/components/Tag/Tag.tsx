import React from 'react';
import { S } from './styled';

type TagProps = {
    text: string;
    onClick: (text: string) => void;
};

const Tag: React.FC<TagProps> = ({ text, onClick }) => (
    <S.Wrapper>
        <S.TagContainer>
            {text}
            <S.Close onClick={() => onClick(text)} />
        </S.TagContainer>
    </S.Wrapper>
);

export default React.memo(Tag);