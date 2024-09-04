import styled from "styled-components";

export const Container = styled.div({
    backgroundColor: 'black',
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: '100%',
    height: '100vh',
});

export const Card = styled.div({
    width: "40%",
    height: "94vh",
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly", 
    alignItems: "center", 
    backgroundColor: 'white',
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    "@media (max-width: 425px)": {
        width: "100%",
        marginRight: "2px",
    },

    "@media (min-width: 426px) and  (max-width: 768px)": {
        width: "70%",
        marginRight: "10px", 
    },

 


});

export const CardHeader = styled.div({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "230px",
});

export const UserForm = styled.div({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
});

export const Container3 = styled.div({
    // width: "100%",
    // marginTop: "40px",
});

export const LabelLogin = styled.label({
    fontWeight: "bold",
    fontSize: "25px",
});

export const LabelPortal = styled.label({
    fontWeight: "bold",
    fontSize: "25px",
});

export const InputContainer = styled.div({
    width: "80%",
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});

export const Div2 = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: "70%",
});

export const Label = styled.label({
    fontSize: "60px",
    color: "black",
    fontWeight: "bolder",
    letterSpacing: "5px",
    "@media (min-width: 320px)": {
        fontSize: "40px",
    },

    "@media (max-width: 319px)": {
        fontSize: "25px",
    },
});

export const NameLabel = styled.label({
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "30px",
    marginBottom: "4px",
    color:"black"
});

export const NameInput = styled.input({
    width: '70%',
    padding: '10px',
    borderRadius: '8px',
});

export const Button = styled.button({
    paddingRight: '50px',
    paddingLeft: '50px',
    paddingTop: '10px',
    paddingBottom: '10px',
    border: '0px',
    borderRadius: '8px',
    backgroundColor: "wheat",
    marginTop: '20px',
});

export const LabelPassword = styled.label({
    fontSize: "15px",
});

export const FooterLabel = styled.label({
});

export const Footer = styled.div({
    marginTop: "20px",
    height: "100px",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
});


export const LabelRegistration = styled.label({
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "0px",
    marginBottom: "4px",
    color:"black"
});

export const Color =styled.p({
    color:'rebeccapurple'
})

