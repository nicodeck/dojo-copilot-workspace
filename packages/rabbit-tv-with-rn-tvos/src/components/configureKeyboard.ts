import { Directions, SpatialNavigation } from 'react-native-tv-spatial-navigation/src';
import { SupportedKeys } from './remote-control/SupportedKeys';
import RemoteControlManager from './remote-control/RemoteControlManager';

SpatialNavigation.configureKeyboard({
  keyboardSubscriber: (callback) => {
    const mapping = {
      [SupportedKeys.Right]: Directions.RIGHT,
      [SupportedKeys.Left]: Directions.LEFT,
      [SupportedKeys.Up]: Directions.UP,
      [SupportedKeys.Down]: Directions.DOWN,
      [SupportedKeys.Enter]: Directions.ENTER,
    };

    const keyboardListener = (keyEvent: SupportedKeys) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore TODO fix me, but this is just a demo anyway
      callback(mapping[keyEvent]);
    };

    return RemoteControlManager.addKeydownListener(keyboardListener);
  },

  keyboardUnsubscriber: (keyboardListener) => {
    RemoteControlManager.removeKeydownListener(keyboardListener);
  },
});
