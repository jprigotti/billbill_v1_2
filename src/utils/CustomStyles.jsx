import styled from 'styled-components';


const CustomStyles = {};

CustomStyles.title1 = styled.h1.attrs({
    // className: 
  })`
  font-family: var(--poppins);
  color: var(--color1);
  `;

  CustomStyles.title2 = styled.h1.attrs({
    // className: 
  })`
  font-family: var(--poppins);
  color: var(--color2);
  `;

  CustomStyles.title3 = styled.h1.attrs({
    // className: 
  })`
  font-family: var(--poppins);
  color: var(--color3);
  `;
  CustomStyles.title4 = styled.h1.attrs({
    // className: 
  })`
  font-family: var(--poppins);
  color: var(--color4);
  `;
  CustomStyles.title5 = styled.h1.attrs({
    // className: 
  })`
  font-family: var(--poppins);
  color: var(--color5);
  `;


CustomStyles.div = styled.div.attrs({
  //   className: "form-control py-3 px-3 mb-3",
})`
width: 500px;
margin: 0 auto;
padding: 3rem;
border-radius: 5px;
background-color: rgba(0,0,0,0.6);
display: flex;
flex-direction: column;
align-items: center;
`;



CustomStyles.form = styled.form.attrs({
  //   className: "form-control py-3 px-3 mb-3",
})`
  /* Your custom styles */
  /* Add any additional custom styles here */
  display: flex;
  flex-direction: column;
  width: 100%;


`;

CustomStyles.input = styled.input.attrs({
  //   className: "form-control mb-3"
})`
  /* Your custom styles */
  /* Add any additional custom styles here */

  all: unset;
  padding: 1rem;
  margin-bottom: 0.5rem;
  color: #f2f2f2;
  background-color: #333;
  outline: none;
  box-shadow: none;
  font-family: arial !important;
  font-weight: 100;

`;

CustomStyles.button = styled.button.attrs({
  //   className: "btn btn-success btn-sm"
})`
  /* Your custom styles */
  /* Add any additional custom styles here */
  all: unset;
  margin: 1rem 0;
  padding: 1rem;
  color: #fff;
  font-family: arial !important;
  font-weight: 100;
  font-size: 1rem;
  background-color: #e50914;
  cursor: pointer;
  text-align: center;
`;

export default CustomStyles;
