import styled from "styled-components";
import { BREAK_POINTS } from "../../styles/Responsive";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary.blue};
  text-align: center;
  ${BREAK_POINTS.desktop`
    text-align: left;
  `};
`;

const HR = styled.div`
  display: none;
  height: 0;
  margin-bottom: ${({ theme }) => theme.layout.spaces.extraLarge};
  display: block;
  border-bottom: 1px #cacada solid;
  ${BREAK_POINTS.desktop`
  margin: 0;      
  `};
`;

const BottomBar = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  ${BREAK_POINTS.desktop`
    flex-wrap: nowrap;
    padding: 40px 80px 60px;
    justify-content: space-between;
  `};
`;

const Menu = styled.div`
  margin-bottom: ${({ theme }) => theme.layout.spaces.extraLarge};
  min-width: 50%;
  ${BREAK_POINTS.desktop`
    min-width: unset;
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.layout.spaces.extraLarge};
  `}
`;

const MenuHead = styled.div`
  margin-bottom: ${({ theme }) => theme.layout.spaces.small};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 900;
  line-height: 1.11;
  color: ${({ theme }) => theme.colors.white};
`;

const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 2;
  color: ${({ theme }) => theme.colors.primary.pink};
  ${BREAK_POINTS.desktop`
    white-space: nowrap;
  `}
`;

const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  font-size: ${({ theme }) => theme.fontSize.regularSmall};
  line-height: 1.33;
  color: white;
  margin: 0 20px;
`;

const PolicyRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;

const menu = [
  {
  },
];

export default function Footer() {
  return (
    <FooterContainer>
      <HR />
      <BottomBar>
      </BottomBar>
    </FooterContainer>
  );
}
