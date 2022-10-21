import React, { useCallback } from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import useDialogs from "@awesome-cordova-library/dialogs/lib/react";

const Dialogs: React.FC = () => {
  const { alert, confirm, prompt, beep } = useDialogs();

  const openDialogs = useCallback(() => {
    alert("Alert content", () => {}, "Alert", "OK");
    const c = confirm(
      "Confirm content",
      (buttonIndex) => {
        console.log("confirm buttonIndex  " + buttonIndex);
      },
      "Confirm ?",
      ["OK", "May be later", "No"]
    );
    if (c) {
      console.log("confirm");
    }
    prompt(
      "Hello Prompt",
      (results) => {
        console.log(JSON.stringify(results));
      },
      "Prompt",
      ["OK", "Cancel"],
      "42"
    );
    beep();
  }, [alert, beep, confirm, prompt]);

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button primary fluid onClick={openDialogs}>
              Open Dialogs
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Dialogs;
