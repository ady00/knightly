import styled from "styled-components";

const AboutContainer = styled.div`
  height: auto;
  max-width: 1400px;
  margin: 15px;
`;

export default function About() {
  return (
    <AboutContainer>
      <h1> About knightly</h1>

      <p>Welcome to knightly!</p>

      <p>
        knightly is an open-source Chess platform that was built as a fun
        playground with friends that you can go ahead and help in improving
        playing enjoyable chess for players of all levels. 
      </p>

      <p>
        We hope to see you on the board!
      </p>
    </AboutContainer>
  );
}
