import { S } from './styled';

interface TagProps {
    text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => (
    <S.Wrapper>
        <S.TagContainer>
            {text}
            <S.Close />
        </S.TagContainer>
    </S.Wrapper>
);

export default Tag;