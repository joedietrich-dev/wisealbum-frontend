import { Formik } from "formik";
import Form from "../components/Form";
import React from "react";
import AlbumCard from "../components/AlbumCard";
import Card from "../components/Card";
import CardText from "../components/CardText";
import CardTitle from "../components/CardTitle";
import Deck from "../components/Deck";
import DeckHorizontal from "../components/DeckHorizontal";
import DeleteButton from "../components/DeleteButton";
import FormArea from "../components/FormArea";
import MediaCard from "../components/MediaCard";
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
import ToggleField from "../components/ToggleField";
import Uploader from "../components/Uploader";
import UploaderField from "../components/UploaderField";
import PrimaryButton from "../components/PrimaryButton";
import ButtonGroup from "../components/ButtonGroup";
import CardContent from "../components/CardContent";

const HR = () => <hr style={{ margin: "32px" }} />;

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
  {
    id: 5,
    name: "This is an album name",
    cover_image_path: "https://wisealbum-media.s3.amazonaws.com/organizations/44/logo/ChurchChristmas.jpg",
    description: longText,
  },
  {
    id: 6,
    name: "Named Album",
    cover_image_path: "https://wisealbum-media.s3.amazonaws.com/albums/9/cover/ADS%20BRAINSTORM.png",
    description: "This is shorter description text",
  },
  {
    id: 7,
    name: "Whoever named this album should be shot",
    cover_image_path: "https://wisealbum-media.s3.amazonaws.com/albums/9/inspo_1904_p.jpg",
    description: "This is shorter description text",
  },
  {
    id: 8,
    name: "Happy Path Album",
    cover_image_path: "https://wisealbum-media.s3.amazonaws.com/albums/9/mood_layers.jpg",
    description: "Photos taken yesterday and the day before when we ate chicken in the restaurant.",
  },
];

const media = [
  {
    id: 83,
    file_type: "image/png",
    url: "https://wisealbum-media.s3.amazonaws.com/albums/9/Annotation 2020-04-07 224141.png",
    description: "Photos taken yesterday and the day before when we ate chicken in the restaurant.",

    order: 1,
    is_blocked: false,
    is_published: true,
    album_id: 9,
    created_at: "2022-04-15T01:21:21.556Z",
    updated_at: "2022-04-15T01:21:44.558Z",
  },
  {
    id: 84,
    file_type: "image/png",
    url: "https://wisealbum-media.s3.amazonaws.com/albums/9/Annotation 2020-04-14 222954.png",
    description: "This is shorter description text",

    order: 2,
    is_blocked: false,
    is_published: true,
    album_id: 9,
    created_at: "2022-04-15T01:21:22.115Z",
    updated_at: "2022-04-15T01:22:06.736Z",
  },
  {
    id: 85,
    file_type: "image/png",
    url: "https://wisealbum-media.s3.amazonaws.com/albums/9/Annotation 2020-04-17 162957.png",
    description: "Photos taken yesterday and the day before when we ate chicken in the restaurant.",
    order: 3,
    is_blocked: false,
    is_published: true,
    album_id: 9,
    created_at: "2022-04-15T01:21:22.960Z",
    updated_at: "2022-04-15T01:22:11.704Z",
  },
  {
    id: 86,
    file_type: "image/jpeg",
    url: "https://wisealbum-media.s3.amazonaws.com/albums/9/inspo_1904_p.jpg",
    description: "This is shorter description text",

    order: null,
    is_blocked: false,
    is_published: false,
    album_id: 9,
    created_at: "2022-04-16T17:01:58.146Z",
    updated_at: "2022-04-16T17:01:58.146Z",
  },
  {
    id: 88,
    file_type: "video/mp4",
    url: "https://wisealbum-media.s3.amazonaws.com/albums/test/2021-02-20_19-50-18.mp4",
    description: "Now is the time for all good people",
    order: 4,
    is_blocked: false,
    is_published: true,
    album_id: 9,
    created_at: "2022-04-16T17:02:06.232Z",
    updated_at: "2022-04-16T17:02:06.232Z",
  },
  {
    id: 87,
    file_type: "image/jpeg",
    url: "https://wisealbum-media.s3.amazonaws.com/albums/9/mood_layers.jpg",
    description: null,
    order: null,
    is_blocked: false,
    is_published: false,
    album_id: 9,
    created_at: "2022-04-16T17:02:06.232Z",
    updated_at: "2022-04-16T17:02:06.232Z",
  },
];

const mediaDescription = "Lorem ipsum dolor sit amet. Adleipsing edit marcono lapis. Enim ego ad usque monsteram ludetis.";
const tags = "cheese, crackers, friendship";
const order = 9;
const mediaExample = {
  album_id: 9,
  created_at: "2022-04-15T01:21:22.115Z",
  description: "This is shorter description text",

  file_type: "image/png",
  id: 84,
  is_blocked: false,
  is_published: true,
  order: 2,
  updated_at: "2022-04-15T01:22:06.736Z",
  url: "https://wisealbum-media.s3.amazonaws.com/albums/9/Annotation 2020-04-14 222954.png",
};
const isPublished = true;

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
            <ButtonGroup justify="space-between">
              <DeleteButton onDelete={(f) => f}>Delete</DeleteButton>
              <PrimaryButton type="submit">Save</PrimaryButton>
            </ButtonGroup>
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
      <HR />
      <SectionTitle>Decks and Cards</SectionTitle>
      <Subtitle>Dashboard</Subtitle>
      <Deck>
        <Card>
          <CardContent>
            <CardTitle>Users</CardTitle>
            <CardText>Total Users: {users.length}</CardText>
          </CardContent>
          <PrimaryButton>Edit Users</PrimaryButton>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Albums</CardTitle>
            <CardText>Total Albums: {users.length}</CardText>
          </CardContent>
          <PrimaryButton>Edit Albums</PrimaryButton>
        </Card>
      </Deck>
      <HR />
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
            isEditable
          />
        ))}
      </Deck>
      <HR />

      <SectionTitle>Media</SectionTitle>
      <Uploader filePath={`albums/test/`} onUpload={(f) => f} />
      <DeckHorizontal>
        {media.map((mediaFile) => (
          <MediaCard key={mediaFile.id} mediaFile={mediaFile} onEditMediaClick={(f) => f} onDeleteMediaClick={(f) => f} />
        ))}
      </DeckHorizontal>
      <HR />

      <SectionTitle>Edit Media</SectionTitle>
      <FormArea>
        <Formik
          initialValues={{
            description: mediaDescription,
            tags,
            is_published: isPublished,
            order,
          }}
          onSubmit={(f) => f}
        >
          <Form>
            <ToggleField label="Published" name="is_published" />
            <TextAreaInput label="Media Description" name="description" />
            <TextInput label="Tags" name="tags" />
            <TextInput label="Order" name="order" type="number" />
            <ButtonGroup justify="space-between">
              <DeleteButton onDelete={(f) => f}>Delete</DeleteButton>
              <PrimaryButton type="submit">Save</PrimaryButton>
            </ButtonGroup>
          </Form>
        </Formik>
        <MediaPreview media={mediaExample} />
      </FormArea>
    </PageCard>
  );
}

export default ComponentTestPage;
