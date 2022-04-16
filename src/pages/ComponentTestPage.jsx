import { Form, Formik } from "formik";
import React from "react";
import AlbumCard from "../components/AlbumCard";
import Button from "../components/Button";
import Card from "../components/Card";
import CardText from "../components/CardText";
import CardTitle from "../components/CardTitle";
import Deck from "../components/Deck";
import FormArea from "../components/FormArea";
import MediaPreview from "../components/MediaPreview";
import PageCard from "../components/PageCard";
import SectionTitle from "../components/SectionTitle";
import Subtitle from "../components/Subtitle";
import Table from "../components/Table";
import TableBody from "../components/TableBody";
import TableData from "../components/TableData";
import TableHead from "../components/TableHead";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import TextAreaInput from "../components/TextAreaInput";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import UploaderField from "../components/UploaderField";

const imagePath = "https://wisealbum-media.s3.amazonaws.com/organizations/44/logo/ChurchChristmas.jpg";
const name = "Joe Dietrich";
const greeting = "hello";
const longText =
  "Lorem ipsum dolor sit descriptionamet consectetur adipisicing elit. Harum odit amet similique quis nesciunt hic placeat fugit numquam deserunt. Amet aut molestias quo natus maiores veritatis quam culpa quia quae!";
const users = [
  { id: 1, full_name: "Joe Dietrich", email: "joe.dietrich@gmail.com", role_id: 2 },
  { id: 2, full_name: "Joe Smith", email: "joe.dietrich@gmail.com", role_id: 2 },
  { id: 3, full_name: "Jolene Artemie", email: "joe.dietrich@gmail.com", role_id: 2 },
  { id: 4, full_name: "Harvardine Germanian", email: "joe.dietrich@gmail.com", role_id: 2 },
];
const albums = [
  {
    id: 1,
    name: "This is an album name",
    cover_image_path: "https://wisealbum-media.s3.amazonaws.com/organizations/44/logo/ChurchChristmas.jpg",
    description: longText,
  },
  {
    id: 2,
    name: "Named Album",
    cover_image_path: "https://wisealbum-media.s3.amazonaws.com/albums/9/cover/ADS%20BRAINSTORM.png",
    description: "This is shorter description text",
  },
  {
    id: 3,
    name: "Whoever named this album should be shot",
    cover_image_path: "https://wisealbum-media.s3.amazonaws.com/albums/9/inspo_1904_p.jpg",
    description: "This is shorter description text",
  },
  {
    id: 4,
    name: "Happy Path Album",
    cover_image_path: "https://wisealbum-media.s3.amazonaws.com/albums/9/mood_layers.jpg",
    description: "Photos taken yesterday and the day before when we ate chicken in the restaurant.",
  },
];

function ComponentTestPage() {
  return (
    <PageCard>
      <Title>Test Page</Title>
      <Subtitle>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nam minus consequatur voluptate aperiam consectetur sed alias tempora,
        architecto atque voluptatum voluptatibus? Itaque, doloremque. Assumenda iusto officiis vero illo! Iste?
      </Subtitle>
      <FormArea>
        <Formik initialValues={{ name, greeting, imagePath, longText }}>
          <Form>
            <TextInput label="name" name="name" />
            <TextInput label="greeting" name="greeting" />
            <TextAreaInput label="Long Text" name="longText" />
            <UploaderField filePath={`test/`} placeholderText="Upload a logo" name="imagePath" />
          </Form>
        </Formik>
        <MediaPreview media={{ url: imagePath, file_type: "image" }} />
      </FormArea>
      <SectionTitle>Collaborators</SectionTitle>
      <Subtitle>Invite Teammates</Subtitle>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Full Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableData>{user.full_name}</TableData>
              <TableData>{user.email}</TableData>
              <TableData>{user.role_id}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SectionTitle>Decks and Cards</SectionTitle>
      <Subtitle>Dashboard</Subtitle>
      <Deck>
        <Card>
          <CardTitle>Users</CardTitle>
          <CardText>Total Users: {users.length}</CardText>
          <Button>Edit Users</Button>
        </Card>
        <Card>
          <CardTitle>Albums</CardTitle>
          <CardText>Total Albums: {users.length}</CardText>
          <Button>Edit Albums</Button>
        </Card>
      </Deck>
      <SectionTitle>Image Decks and Cards</SectionTitle>
      <Subtitle>Albums</Subtitle>
      <Deck>
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            coverImage={album.cover_image_path}
            description={album.description}
            name={album.name}
            onEditAlbum={(f) => f}
            id={album.id}
          />
        ))}
      </Deck>
    </PageCard>
  );
}

export default ComponentTestPage;
