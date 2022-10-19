import { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import { BatteryStatusType } from "@awesome-cordova-library/batterystatus";
import useBatteryStatus from "@awesome-cordova-library/batterystatus/lib/react";

const BatteryStatus: React.FC = () => {
  const [batteryStatus, setBatteryStatus] = useState<BatteryStatusType>();
  const { onBatteryStatus } = useBatteryStatus();
  useEffect(() => {
    onBatteryStatus((batterystatus) => {
      setBatteryStatus(batterystatus);
    });
  }, [onBatteryStatus]);

  if (!batteryStatus) {
    return <div />;
  }

  return (
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            Is plugged: {String(batteryStatus.isPlugged)}
          </Grid.Column>
          <Grid.Column>Level: {batteryStatus.level}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default BatteryStatus;
