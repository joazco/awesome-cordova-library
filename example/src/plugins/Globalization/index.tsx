import React, { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import useGlobalization from "@awesome-cordova-library/globalization/lib/react";

const Globalization: React.FC = () => {
  const { getPreferredLanguage } = useGlobalization();

  const [preferredLanguage, setPreferedLanguage] = useState("");

  useEffect(() => {
    getPreferredLanguage().then((language) => {
      setPreferedLanguage(language.value);
    });
  }, [getPreferredLanguage]);

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            preferred language : {preferredLanguage}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Globalization;
