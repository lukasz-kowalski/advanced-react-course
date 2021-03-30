import Link from 'next/link';
import Nav from '../Nav';
import * as S from './Header.styled';

const Header = () => (
  <S.Header>
    <S.Bar>
      <S.Logo>
        <Link href="/" passHref>
          <S.LogoLink>Sick fits</S.LogoLink>
        </Link>
      </S.Logo>
      <Nav />
    </S.Bar>

    <S.SubBar>
      <p>Search</p>
    </S.SubBar>
  </S.Header>
);

export default Header;
