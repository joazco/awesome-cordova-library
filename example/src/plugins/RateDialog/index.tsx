import React, { useMemo } from "react";
import { Container, Grid, Button, Select } from "semantic-ui-react";
import useRateDialog from "@awesome-cordova-library/ratedialog/lib/react";

const RateDialog: React.FC = () => {
  const languageOptions = useMemo(() => {
    return [
      { key: "french", value: "fr", text: "French" },
      { key: "english", value: "en", text: "English" },
    ];
  }, []);

  const { promptForRating, setLocale } = useRateDialog({
    appName: "Cordova Awesome Library",
    locale: "en",
    usesUntilPrompt: 3,
    storeAppURL: {
      ios: "1234567",
      android: "com.joazco.cordovaawesomelibrary",
    },
  });

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Select
              fluid
              search
              clearable
              selection
              options={languageOptions}
              onChange={(_, data) => {
                if (data.value === "fr") {
                  setLocale("fr");
                } else {
                  setLocale("en");
                }
              }}
              placeholder="Select language"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button primary fluid onClick={() => promptForRating(true)}>
              Open Rate Dialog
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default RateDialog;
