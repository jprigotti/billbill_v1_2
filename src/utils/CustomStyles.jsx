import styled from 'styled-components';


const CustomStyles = {};

CustomStyles.title1 = styled.h1.attrs({
  // className: 
})`
  font-family: var(--poppins);
  font-size: 4.5rem;
  font-weight: 700;
  color: var(--primary-dark);
  `;

CustomStyles.title2 = styled.h1.attrs({
  // className: 
})`
  font-family: var(--poppins);
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--primary-white);

  `;

CustomStyles.title3 = styled.h1.attrs({
  // className: 
})`
  font-family: var(--poppins);
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 3px var(--jungle-green);
  color: var(--color3);
  `;
CustomStyles.title4 = styled.h1.attrs({
  // className: 
})`
  font-family: var(--poppins);
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 3px var(--jungle-green);
  color: var(--color4);
  `;
CustomStyles.title5 = styled.h1.attrs({
  // className: 
})`
  font-family: var(--poppins);
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 3px var(--jungle-green);
  color: var(--color5);
   `;

CustomStyles.title6 = styled.h1.attrs({
  // className: 
})`
  font-family: var(--poppins);
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 3px var(--heavy-metal);
  color: var(--eucalyptus);
   `;


   CustomStyles.title7 = styled.h1.attrs({
    // className: 
  })`
    font-family: var(--poppins);
    font-size: 4rem;
    font-weight: 700;
    color: var( --contrast-1);
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

CustomStyles.buttonSend = styled.button.attrs({
  //   className: "btn btn-success btn-sm"
})`
  /* Your custom styles */
  /* Add any additional custom styles here */
  all: unset;
  width: 200px;
  padding: 0.5rem 1rem;
  color: var(--heavy-black);
  font-family: var(--poppins);
  font-weight: 600;
  font-size: 1rem;
  background-color: var(--gray-nurse);
  border: 2px solid var(--gray-nurse);
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  transition: 0.3s all;

  &:hover {
    border: 2px solid var(--gray-nurse);
    background-color: transparent;
    color: var(--gray-nurse);
  }
`;

CustomStyles.buttonBook = styled.p.attrs({
  //   className: "btn btn-success btn-sm"
})`
  /* Your custom styles */
  /* Add any additional custom styles here */
  all: unset;
  width: 200px;
  padding: 0.5rem 1rem;
  color: var(--primary-white);
  font-family: var(--poppins);
  font-weight: 600;
  font-size: 1rem;
  background-color: transparent;
  border: 2px solid var(--primary-white);
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  transition: 0.3s all;

  &:hover {
    border: 2px solid var(--color-room-1);
    background-color: var(--color-room-1);
    color: var(--gray-nurse);
  }
`;

export default CustomStyles;
