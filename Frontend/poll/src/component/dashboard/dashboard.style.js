
import styled from "styled-components";


export const Container = styled.div({
    backgroundColor: 'rgb(24,28,36)',
    display: "flex",
    flexDirection:"column",
    justifyContent: "space-between",
    alignItems: "normal",
    width: '100%',
    height: '100vh',
});


export const Navbar = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '12vh',
    backgroundColor: "rgb(24,28,36)"

});

export const NavbarLeftLogo = styled.div({
    width: "50%",
    height: "10vh",
    backgroundColor:"rgb(24,28,36)",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    marginLeft:"30px",
});

export const CompanyLogo = styled.img({

    padding:"20px",
    // backgroundColor:"lightseagreen"

});

export const CompanyNameLabel = styled.label({
    //  width:"25%",
    //  height:"8vh",
     color:"white",
     fontWeight:"bold",
     fontSize:"18px",
    // backgroundColor:"red"
});


export const NavbarRightLogo = styled.div({
    width: "50%",
    height: "10vh",
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"center",
    backgroundColor:"rgb(24,28,36)"

});

export const UserProfile = styled.img({
 
    padding:"20px",
  
});

export const ContainerSidebarDisplayScreen = styled.div({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    height: '88vh',
    backgroundColor: "white"

});

export const LeftSidevar = styled.div({
    width: "8%",
    height: "100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor: "rgb(24,28,36)"

});

export const ContentDisplayScreen = styled.div({
    width: "92%",
    height: "100%",
    backgroundColor: "white",
    // borderRadius:"50px,0px 0px 0px"

});



export const Image = styled.img`
    padding: 20px;
    margin-top: 10px;
    background-color: rgb(52, 60, 76);
    background-clip: padding-box;
    -webkit-background-clip: padding-box;
    border-radius: 15px;
    position: relative;
    transition: background 0.3s;

    &:hover,
    &:active {
        background: linear-gradient(to bottom, #e0040e 40%, #a12895 60%);
    }
`;







