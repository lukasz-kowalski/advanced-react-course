import GlobalStyles from '../shared/GlobalStyles';
import Header from './Header/Header';
import * as S from './Container/Container.styled';

const Page = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    <S.Container>{children}</S.Container>
  </div>
);

export default Page;
