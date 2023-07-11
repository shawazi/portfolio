import styled from '@emotion/styled';

const Card = styled.div`
  background-color: #222;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  text-align: center;
`;

const Strong = styled.strong`
  color: #ffcc00;
`;

const hobbies = ["Reading technical documentation", "Experimenting with different workflows", "Studying solution optimizations", "Studying cybersecurity", "Studying data structures and algorithms"]


// Usage
const About = () => (
  <Card>
    <Title><Strong>About Shawaz</Strong></Title>
    <Text>Possessing a background in psychology and a love for information, I spend most of my time on the following:</Text>
    <section>
      <List>
        {hobbies.map((hobby) => (
          <ListItem key={hobby}>{hobby}</ListItem>
        ))}
      </List>
    </section>
  </Card>
);

export default About;
