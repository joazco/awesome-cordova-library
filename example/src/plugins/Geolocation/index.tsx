import useGeolocation from "@awesome-cordova-library/geolocation/lib/react";
import { useState } from "react";
import { Button, Container, Grid } from "semantic-ui-react";

const Geolocation: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [position, setPosition] = useState<GeolocationPosition | undefined>();
  const { getCurrentPosition } = useGeolocation();

  return (
    <Container>
      <Grid>
        {position && (
          <Grid.Row columns={2}>
            <Grid.Column>Latitude: {position.coords.latitude}</Grid.Column>
            <Grid.Column>Longitude: {position.coords.longitude}</Grid.Column>
          </Grid.Row>
        )}
        <Grid.Row>
          <Grid.Column>
            <Button
              primary
              fluid
              loading={loading}
              onClick={() => {
                setLoading(true);
                getCurrentPosition()
                  .then((p) => {
                    setPosition(p);
                  })
                  .finally(() => {
                    setLoading(false);
                  });
              }}
            >
              Get current position
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Geolocation;
