import { useCallback, useEffect, useMemo, useState } from "react";
import useNativeAudio from "@awesome-cordova-library/nativeaudio/lib/react";
import useDevice from "@awesome-cordova-library/device/lib/react";
import { Button, Container, Grid, Icon } from "semantic-ui-react";

const NativeAudio: React.FC = () => {
  const [sound, setSound] = useState<HTMLAudioElement | undefined>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { playWeb, stopWeb, preloadComplex, stop, loop } = useNativeAudio();

  const { getPlatform } = useDevice();

  const platform = useMemo(() => {
    return getPlatform();
  }, [getPlatform]);

  const playSound = useCallback(() => {
    if (platform === "browser") {
      const s = playWeb("assets/sounds/powerful-beat-121791.mp3", true, 1);
      setSound(s);
    } else {
      loop("mainSound")
        .then(() => {
          console.log("success loop");
        })
        .catch((msg) => {
          console.log("error loop", msg);
        });
    }
    setIsPlaying(true);
  }, [platform, playWeb, loop]);

  const stopSound = useCallback(() => {
    if (platform === "browser" && sound) {
      stopWeb(sound);
      setSound(undefined);
    } else {
      stop("mainSound");
    }
    setIsPlaying(false);
  }, [platform, sound, stopWeb, stop]);

  useEffect(() => {
    if (platform && platform !== "browser") {
      preloadComplex(
        "mainSound",
        "assets/sounds/powerful-beat-121791.mp3",
        1,
        1,
        0
      )
        .then(() => {
          console.log("success preloadComplex");
        })
        .catch(() => {
          console.log("error preloadComplex");
        });
    }
  }, [platform, preloadComplex]);

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <p>powerful-beat-121791.mp3</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {!isPlaying && (
              <Button icon labelPosition="left" fluid onClick={playSound}>
                <Icon name="play" />
                Play
              </Button>
            )}
            {isPlaying && (
              <Button icon labelPosition="left" fluid onClick={stopSound}>
                <Icon name="pause" />
                Pause
              </Button>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default NativeAudio;
