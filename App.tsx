import React, { useState }from "react";
import { WebView } from "react-native-webview";
import { ActivityIndicator, View } from "react-native";
import Keys from "./keys";

export function MyWebview() {
  const [loadingState, setLoadingState] = useState(true);

  return (
  <View style={{ flex: 1 }}>
    <WebView 
    onLoad={() => setLoadingState(false)}
    source={{ uri: Keys.URL }} 
    />
    {loadingState && (
        <ActivityIndicator
          style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
          size="large"
        />
      )}
  </View>
  );
}
export default class App extends React.Component {
  
  render() {
    return <MyWebview></MyWebview>
  }
}