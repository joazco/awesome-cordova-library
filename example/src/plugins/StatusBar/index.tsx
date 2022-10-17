import useStatusbar from "@awesome-cordova-library/statusbar/lib/react";
import { useCallback, useState } from "react";
import { Button, Container, Grid, Input } from "semantic-ui-react";

const StatusBar: React.FC = () => {
  const {
    overlaysWebView,
    show,
    hide,
    styleDefault,
    styleLightContent,
    isVisible,
    backgroundColorByHexString,
  } = useStatusbar();
  const [isOverlaysWebView, setIsOverlaysWebView] = useState<boolean>(false);
  const [backgroundColorValue, setBackgroundColorValue] =
    useState<string>("ffffff");

  const checkIsVisible = useCallback(() => {
    alert(`Visiblity of status bar: ${isVisible()}`);
  }, [isVisible]);

  const applyBackgroundColor = useCallback(() => {
    backgroundColorByHexString(`#${backgroundColorValue}`);
  }, [backgroundColorValue, backgroundColorByHexString]);

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Button
              onClick={() => {
                overlaysWebView(!isOverlaysWebView);
                setIsOverlaysWebView(!isOverlaysWebView);
              }}
              fluid
            >
              Toggle overlays web view
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button onClick={() => checkIsVisible()} fluid>
              Check if status bar is visible
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Button onClick={() => show()}>Show statusbar</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => hide()}>Hide statusbar</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Button onClick={() => styleDefault()}>Set style Default</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => styleLightContent()}>Set style Light</Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <Input
              label="#"
              value={backgroundColorValue}
              fluid
              onChange={(e) => setBackgroundColorValue(e.target.value)}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button primary fluid onClick={() => applyBackgroundColor()}>
              Apply
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default StatusBar;
