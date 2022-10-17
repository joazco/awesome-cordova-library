import { Grid, Header } from "semantic-ui-react";

type PluginViewComponentProps = {
  pluginName: string;
  children: React.ReactNode;
};

const PluginViewComponent: React.FC<PluginViewComponentProps> = (props) => {
  const { pluginName, children } = props;
  return (
    <Grid.Row>
      <Grid.Column width={16}>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2">{pluginName}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>{children}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <hr />
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  );
};

export default PluginViewComponent;
