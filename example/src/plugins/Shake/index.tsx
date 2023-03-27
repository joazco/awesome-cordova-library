import React, { useEffect, useMemo, useState } from "react";
import { Container, Grid, Button, Select } from "semantic-ui-react";
import useShake from "@awesome-cordova-library/shake/lib/react";

const Shake: React.FC = () => {
  const [nbShake, setNbShake] = useState<number>(0);

  const { startWatch, stopWatch } = useShake();

  useEffect(() => {
    startWatch(() => setNbShake((s) => s + 1), 40);
    return () => {
      stopWatch();
    };
  }, []);

  return (
    <Container>
      <Grid>
        <Grid.Row>Nb of shake: {nbShake} </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Shake;
