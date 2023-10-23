import styled from "@emotion/styled";
import Link from "next/link";

const Index = () => {
  return (
    <Container>
      <Logo>
        <Link href={'/'}>Logo</Link>
      </Logo>
      <Nav>
        <ul>
          <li><Link href={'/board'}>Board</Link></li>
          <li><Link href={'/'}>He</Link></li>
          <li><Link href={'/'}>Ha</Link></li>
        </ul>
      </Nav>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled.header`

`;

const Nav = styled.header`
  ul {
    display: flex;
    align-items: center;
    gap: 16px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 48px;
      height: 48px;
    }
  }
`;

export default Index;