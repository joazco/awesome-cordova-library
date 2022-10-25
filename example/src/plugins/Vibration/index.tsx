import { useCallback, useState } from "react";
import useVibration from "@awesome-cordova-library/vibration/lib/react";
import { Button, Container, Grid, Input } from "semantic-ui-react";

const Vibration: React.FC = () => {
  const [vibrateValue, setVibrateValue] = useState<number | null>(3);
  const vibrate = useVibration();

  const applyVibrate = useCallback(() => {
    if (vibrateValue) {
      vibrate(vibrateValue * 1000);
    }
  }, [vibrateValue, vibrate]);

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Input
              label="secondes"
              labelPosition="right"
              value={vibrateValue}
              fluid
              type="number"
              min="1"
              max="10"
              onChange={(e) => {
                const value = e.target.value;
                if (value === "") {
                  setVibrateValue(null);
                  return;
                }
                const valueNumber = Number(value);
                if (valueNumber > 10) {
                  setVibrateValue(10);
                } else if (valueNumber < 1) {
                  setVibrateValue(1);
                } else {
                  setVibrateValue(Number(e.target.value));
                }
              }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button primary fluid onClick={() => applyVibrate()}>
              Vibrate
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Vibration;
