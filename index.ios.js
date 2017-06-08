import React, { Component } from 'react';
import { AppRegistry, WebView } from 'react-native';

class OwensWebviewer extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://hyfn.com'}}
        style={{marginTop: 20}}
      />
    );
  }
}
AppRegistry.registerComponent('OwensWebviewer', () => OwensWebviewer);
