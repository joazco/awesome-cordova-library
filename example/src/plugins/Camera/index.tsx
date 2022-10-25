import { useCallback, useState } from "react";
import { Button, Container, Grid } from "semantic-ui-react";
import useCamera from "@awesome-cordova-library/camera/lib/react";
import { DestinationType } from "@awesome-cordova-library/camera";

const Camera: React.FC = () => {
  const [srcImage, setSrcImage] = useState<string | undefined>();
  const { getPicture } = useCamera();

  const takePicture = useCallback(() => {
    getPicture(
      (imageData) => setSrcImage(imageData),
      () => {
        alert("Error to take picture");
      },
      {
        destinationType: DestinationType.DATA_URL,
      }
    );
  }, [getPicture]);

  return (
    <Container>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Button fluid primary onClick={takePicture}>
              Get Picture
            </Button>
          </Grid.Column>
        </Grid.Row>
        {srcImage && (
          <Grid.Row>
            <Grid.Column>
              <img
                style={{ width: "100%", maxWidth: "400px" }}
                src={`data:image/jpeg;base64,${srcImage}`}
                alt=""
              />
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    </Container>
  );
};

export default Camera;
