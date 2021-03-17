import { S } from './styled';

type ErrorMessageProps = {
    error: { message: string }
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
    if (!error) return null;
    return (
        <S.ErrorStyles>
            <p>
                <strong>Shoot!</strong>
                {error}
            </p>
        </S.ErrorStyles>
    );
};

export default ErrorMessage;