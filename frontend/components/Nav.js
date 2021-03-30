import Link from 'next/link';
import * as S from './styled/Nav.styled';

const Nav = () => (
  <S.Nav>
    <Link href="/products">Products</Link>
    <Link href="/sell">Sell</Link>
    <Link href="/orders">Orders</Link>
    <Link href="/account">Account</Link>
  </S.Nav>
);

export default Nav;
