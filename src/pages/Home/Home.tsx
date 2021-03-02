import styled from 'styled-components';

const StyledInner = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 40px 24px 40px;
`;

const Home: React.FC = ({ children }) => <StyledInner>{children}</StyledInner>;

export default Home;