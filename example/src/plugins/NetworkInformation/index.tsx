import { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import {
  ConnectionType,
  Connection,
} from "@awesome-cordova-library/network-information/";
import useNetworkInformation from "@awesome-cordova-library/network-information/lib/react";

const NetworkInformation: React.FC = () => {
  const [connectionType, setConnectionType] = useState<ConnectionType>(
    Connection.UNKNOWN
  );
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const { getNetworkType, onOffline, onOnline } = useNetworkInformation();

  useEffect(() => {
    const networkType = getNetworkType();
    setConnectionType(networkType);
    setIsOnline(
      networkType !== Connection.UNKNOWN && networkType !== Connection.NONE
    );
    setInterval(() => {
      setConnectionType(getNetworkType());
    }, 1000);
  }, [getNetworkType]);

  useEffect(() => {
    onOnline(() => setIsOnline(true));
  }, [onOnline]);

  useEffect(() => {
    onOffline(() => setIsOnline(false));
  }, [onOffline]);

  return (
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>Connection type: {connectionType}</Grid.Column>
          <Grid.Column>Is online: {String(isOnline)}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default NetworkInformation;
