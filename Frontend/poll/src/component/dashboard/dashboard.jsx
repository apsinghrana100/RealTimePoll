import React from "react";
import {
  CompanyLogo,
  CompanyNameLabel,
  Container,
  ContainerSidebarDisplayScreen,
  ContentDisplayScreen,
  Image,
  LeftSidevar,
  Navbar,
  NavbarLeftLogo,
  NavbarRightLogo,
  UserProfile,
} from "./dashboard.style";
// import ErrorPageComponent from "../../Asset/ErrorPage";
import Logo from "../../asset/home.svg";
import home from "../../asset/home.svg";
import phone from "../../asset/phone.svg";
import wifi from "../../asset/wifi.svg";
import folder from "../../asset/folder.svg";
import instagram from "../../asset/instagram.svg";
import profilelogo from "../../asset/Userlogo.svg";
import Poll from "../Poll";

const Dashborad = () => {
  return (
    <>
      <Container>
        <Navbar>
          <NavbarLeftLogo>
            <CompanyLogo src={instagram}></CompanyLogo>
            <CompanyNameLabel>
              <h2>DUSSINESS PORTAL</h2>
            </CompanyNameLabel>
          </NavbarLeftLogo>
          <NavbarRightLogo>
            <UserProfile src={profilelogo}></UserProfile>
          </NavbarRightLogo>
        </Navbar>

        <ContainerSidebarDisplayScreen>
          <LeftSidevar>
            <Image src={home} />
            <Image src={phone} />
            <Image src={wifi} />
            <Image src={folder} />
          </LeftSidevar>
          <ContentDisplayScreen>
            <Poll />
          </ContentDisplayScreen>
        </ContainerSidebarDisplayScreen>
      </Container>
    </>
  );
};

export default Dashborad;
