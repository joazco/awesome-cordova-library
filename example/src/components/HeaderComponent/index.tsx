import { Container, Grid, Header } from "semantic-ui-react";

const HeaderComponent: React.FC = () => {
  return (
    <Grid.Row>
      <Grid.Column width={16}>
        <header>
          <Container fluid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header>@awesome-cordova-library</Header>
              </Grid.Column>
            </Grid.Row>
          </Container>
        </header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default HeaderComponent;
