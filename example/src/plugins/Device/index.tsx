import useDevice from "@awesome-cordova-library/device/lib/react";
import { Container, Grid } from "semantic-ui-react";

const Device: React.FC = () => {
  const { getModel, getPlatform, getUuid, getVersion, getManufacturer } =
    useDevice();

  return (
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>Model: {getModel()}</Grid.Column>
          <Grid.Column>Platform: {getPlatform()}</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>Uuid: {getUuid() || "null"}</Grid.Column>
          <Grid.Column>Version: {getVersion()}</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>Manufacturer: {getManufacturer() || "null"}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Device;
