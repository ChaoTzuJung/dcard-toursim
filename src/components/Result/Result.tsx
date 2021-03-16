import Tag from '../Tag';
import { ICheckbox, IToursim } from '../../types';
import { S } from './styled';

type ResultProps = {
    data: IToursim[];
    tags: ICheckbox;
    onClick: (text: string) => void;
}

const Result: React.FC<ResultProps>= ({ data, tags, onClick }) => (
    <S.Wrapper>
        <div className="description">
            Showing <span>{data.length}</span> results by...
        </div>
        <S.TagsWrapper>
            {Object
                .keys(tags)
                .filter(key => tags[key])
                .map(name => <Tag key={name} text={name} onClick={onClick} />)
            }
        </S.TagsWrapper>
    </S.Wrapper>
);

export default Result;