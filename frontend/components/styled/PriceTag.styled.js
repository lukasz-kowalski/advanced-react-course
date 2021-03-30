import styled from 'styled-components';
import colors from '../../shared/colorPalette';

export const PriceTag = styled.span`
  background: ${colors.red};
  transform: rotate(3deg);
  color: white;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;
