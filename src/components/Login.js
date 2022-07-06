import styled from "styled-components";
// import img from '/images/cta-logo-one.jpg'

import React from 'react'

const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt='image1'/><CTALogoOne/> 
                    <SignUp>GET ALL THERE</SignUp>
                    <Descript>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 06/07/2022, the price of Disney+ and the Disney Bundle will increase by $1.</Descript>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="img2"></CTALogoTwo>
                </CTA>
                <BgImage />
                {/* content */}
            </Content>
        </Container>  
    )
}

const Container = styled.section`
overflow: hidden;
display:flex;
flex-direction:column;
text-align:center;
height :100vh;
`;

const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction :column;
padding:80px 40px;
height:100%;
`;

const BgImage = styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url("/images/login-background.jpg");
position:absolute;
top:0;
right:0;
left:0;
z-index: -1;

`;
const CTA = styled.div`
// margin-bottom:2vw;
// max-width:650px;
// flex-wrap:wrap;
// display:flex;
// flex-direction:column;
// justify-content:center;
// align-items:center;
// text-align:center;
// // background-color:blue;
// margin-top:0;
// margin-right:auto;
// margin-left:auto;

// transition-timing-function:ease-out;
// transition:opacity 0.2s;

max-width:650px;
// width:100%;
display:flex;
flex-direction:column;


`;


const CTALogoOne =styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`

const SignUp = styled.a`
font-size:18px;
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
padding:16.5px 0;
border:1px solid transparent;
border-radius:4px;

&:hover {
background-color:#0483ee ;
}
`

const Descript = styled.p`
/* color: hsla(0,0% , 95.3%, 1); */
/* rgb(243, 243, 243, 0.01) */
color:#F3F3F3;
font-size:11px;
margin: 0 0 24px;
line-height:1.5;
letter-spacing:1.5px ;
`

const CTALogoTwo = styled.img`
max-width: 600px ;
margin-bottom:20px ;

/* transition: transform; */
display:inline-block ;
vertical-align: bottom ;
width:100% ;

/* background-color:white ; */


`
export default Login;