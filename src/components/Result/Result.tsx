import { S } from './styled';
import Tag from '../Tag';

interface ResultProps {
    tags: string[]
}

const Result: React.FC<ResultProps>= ({ tags }) => (
    <S.Wrapper>
        <div className="description">
            Showing <span>{tags.length}</span> results by...
        </div>
        <S.TagsWrapper>
            {tags.map(tag => (
                <Tag text={tag} key={tag} />
            ))}
        </S.TagsWrapper>
    </S.Wrapper>
);

export default Result;