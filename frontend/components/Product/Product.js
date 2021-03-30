import Link from 'next/link';
import { Item } from '../styled/Item.styled';
import { Title } from '../styled/Title.styled';
import { PriceTag } from '../styled/PriceTag.styled';
import formatMoney from '../../utils/formatMoney';

const Product = ({ product }) => (
  <Item>
    <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />{' '}
    <Title>
      <Link href={`/product/${product.id}`}>{product.name}</Link>
    </Title>
    <PriceTag>{formatMoney(product.price)}</PriceTag>
    <p>{product.description}</p>
  </Item>
);

export default Product;
