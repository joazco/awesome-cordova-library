import { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import Appversion from "@awesome-cordova-library/appversion";

const AppVersion: React.FC = () => {
  const [appName, setAppName] = useState<string>("");
  const [packageName, setPackageName] = useState<string>("");
  const [versionNumber, setVersionNumber] = useState<string>("");
  const [versionCode, setVersionCode] = useState<string>("");

  useEffect(() => {
    Appversion.getAppName().then((value) => value && setAppName(value));
    Appversion.getPackageName().then((value) => value && setPackageName(value));
    Appversion.getVersionNumber().then(
      (value) => value && setVersionNumber(value)
    );
    Appversion.getVersionCode().then((value) => value && setVersionCode(value));
  }, []);

  return (
    <Container>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>App name: {appName}</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>App package name: {packageName}</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            Version Number: <br />
            {versionNumber}
          </Grid.Column>
          <Grid.Column>
            Version Code: <br />
            {versionCode}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default AppVersion;
