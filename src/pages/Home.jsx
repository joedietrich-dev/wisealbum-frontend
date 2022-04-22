import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import CardText from "../components/CardText";
import PageCard from "../components/PageCard";
import PageText from "../components/PageText";
import connectIcon from "../connection.svg";
import galleryIcon from "../gallery.svg";

function Home() {
  return (
    <>
      <HeroContainer>
        <HeroTitle>WiseAlbum</HeroTitle>
        <HeroSubtitle>Create Your Own Media Gallery</HeroSubtitle>
        <HeroText>Create albums and connect with your audience</HeroText>
      </HeroContainer>
      <PageCard>
        <CenteredDeck>
          <Card>
            <SmallCardContainer>
              <SmallCardImage src={galleryIcon} alt="Create a Gallery" />
            </SmallCardContainer>
            <CardContent>
              <LargeCardTitle>Create</LargeCardTitle>
              <CardText>Create a photo or image gallery and express yourself. Curate the best you have to offer!</CardText>
            </CardContent>
          </Card>
          <Card>
            <SmallCardContainer>
              <SmallCardImage src={connectIcon} alt="Making Connections" />
            </SmallCardContainer>
            <CardContent>
              <LargeCardTitle>Connect</LargeCardTitle>
              <CardText>Connect with your family, clients, or co-workers! Share photos and videos with those you want to reach!</CardText>
            </CardContent>
          </Card>
        </CenteredDeck>
        <PageText>
          <Link to="/login">Login</Link> to continue, or <Link to="/signup">Signup</Link> to join in on the action.
        </PageText>
      </PageCard>
    </>
  );
}

const HeroContainer = styled.div`
  color: white;
  background: linear-gradient(-180deg, #5b6b79, rgb(20, 55, 90));
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`;
const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-top: 0;
`;
const HeroSubtitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;
const HeroText = styled.p``;
const SmallCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  width: 100%;
  height: 200px;
`;
const SmallCardImage = styled.img`
  width: auto;
  height: 100%;
`;
const LargeCardTitle = styled.h2`
  text-align: center;
`;
const CenteredDeck = styled.div`
  margin-top: 36px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 25%));
  gap: 24px;
`;

export default Home;
