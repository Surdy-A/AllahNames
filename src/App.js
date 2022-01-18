import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NameList from "./containers/NameList";
import AppNavigator from "./components/AppNavigator";
import NameDetails from "./containers/NameDetails";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Favourites from "./containers/Favourites";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigator />
          <Route exact path="/" component={NameList} />
          <Route exact path="/name/:id" component={NameDetails} />
          <Route exact path="/favourites" component={Favourites} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
