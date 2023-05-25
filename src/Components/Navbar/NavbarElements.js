import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  height: 80px;
  margin-top: -80px;
  background: var(--bg-clr);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${"" /* height: 80px; */}
  z-index: 1;
  width: 100%;
  ${"" /* padding: 0 24px; */}
  ${"" /* max-width: 1100px; */}
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding-left: 4%;
    padding-right: 4%;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  ${"" /* justify-self: flex-start; */}
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  ${"" /* margin-left: 24px; */}
  font-weight: bold;
  z-index: 10;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    ${
      "" /* position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%); */
    }
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    align-items: center;
    display: flex;
  }
`;
// export const NavMenu = styled.ul`
//   display: flex;
//   gap: 20px;
//   ${
//     "" /* align-items: center;
//   justify-content: center; */
//   }
//   list-style: none;
//   ${"" /* text-align: center; */}
//   ${"" /* margin-right: -22px; */}
//   margin-bottom : 0;

//   @media screen and (max-width: 768px) {
//     display: none;
//     color: var(--text-clr);
//     z-index: 10;
//     margin-top: -10px;
//   }
// `;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: 30px;
  list-style: none;
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 0;
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: sticky;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    margin-top: 0;
    position: absolute;
    margin-left: 0;
    top: 0px;
    padding-left: 0px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    opacity: 1;
    z-index: 5;
    transition: all 0.5s ease;
    background-color: var(--bg-clr);
  }
`;

export const Navitem = styled.li`
  ${"" /* height: 80px; */}
  ${"" /* height: 80px; */}
  margin-top: -15px;
`;
export const NavLinks = styled(LinkS)`
  color: var(--text-clr);
  display: flex;
  align-items: center;
  text-decoration: none;
  ${"" /* padding: 0 1rem; */}
  ${"" /* height: 100%; */}
  cursor: pointer;
  position: relative;

  ${
    "" /* &:hover {
    color: red;
  } */
  }

  &::after {
    content: "";
    width: 0%;
    height: 5%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #28b86b;
    transition: all 0.3s ease-in;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover {
    color: #28b86b;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
    margin-top: 0px;
    margin-right: 45px;
    ${"" /* margin-top: 0px; */}
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  margin-top: 0px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--text-clr);
    color: var(--bg-clr);
  }
`;
