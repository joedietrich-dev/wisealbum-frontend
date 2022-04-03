import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import MediaCard from "../components/MediaCard";
import PageCard from "../components/PageCard";
import SectionTitle from "../components/SectionTitle";
import Subtitle from "../components/Subtitle";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import { useAuth } from "../helpers/AuthorizationProvider";
import { editAlbumValidation } from "../helpers/validationSchemas/editAlbumValidation";

function AlbumEdit() {
  const { organizationId, albumId } = useParams();
  const { user, loading } = useAuth();

  const handleSubmit = (f) => f;

  return (
    <PageCard>
      <Title>Edit Album - {}</Title>
      <Subtitle>Edit your album here. Add some media!</Subtitle>
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={editAlbumValidation}
      >
        <Form>
          <TextInput label="Album Name" name="name" />
          <TextInput label="Album Description" name="description" />
          <Button type="submit">Save</Button>
        </Form>
      </Formik>
      <SectionTitle>Media</SectionTitle>
      <div style={{ width: "100%", padding: "32px", textAlign: "center", boxSizing: "border-box", border: "1px dotted black" }}>Media uploader</div>
      <MediaCard />
      <Button>Delete</Button>
      <Button>Publish</Button>
      <Button>Delete</Button>
    </PageCard>
  );
}

export default AlbumEdit;
