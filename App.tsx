import * as React from "react";
import { WebView } from "react-native-webview";
import Keys from "./keys";

export default class App extends React.Component {
  render() {
    return (
      <WebView 
      source={{ uri: Keys.URL }} 
      style={{ marginTop: 20 }} 
      />
    );
  }
}