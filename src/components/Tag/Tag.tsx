import { S } from './styled';

interface TagProps {
    text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => (
    <S.Wapper>
        <S.TagContainer>
            {text}
            <S.Close />
        </S.TagContainer>
    </S.Wapper>
);

export default Tag;