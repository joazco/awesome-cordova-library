import { OrientationLockCordovaType } from "@awesome-cordova-library/screen-orientation";
import React from "react";
import { Dropdown, Container, Grid, Button } from "semantic-ui-react";
import useOrientationScreen from "./useOrientationScreen";

const ScreenOrientation: React.FC = () => {
  const {
    orientationOptions,
    valueOrientation,
    setValueOrientation,
    lock,
    currentOrientation,
  } = useOrientationScreen();
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Dropdown
              placeholder="Select Country"
              fluid
              search
              selection
              options={orientationOptions}
              value={valueOrientation}
              clearable
              onChange={(_, data) => {
                if (data.value === "") {
                  setValueOrientation(undefined);
                } else {
                  setValueOrientation(
                    data.value as OrientationLockCordovaType | undefined
                  );
                }
              }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button
              primary
              fluid
              onClick={() => {
                if (valueOrientation) {
                  lock(valueOrientation);
                }
              }}
            >
              Apply
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button
              onClick={() => {
                setValueOrientation(undefined);
              }}
              fluid
            >
              Set default screen orientation
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button
              onClick={() => {
                alert(currentOrientation());
              }}
              fluid
            >
              Check current orientation
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default ScreenOrientation;
