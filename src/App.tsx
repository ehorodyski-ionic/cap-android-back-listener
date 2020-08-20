import React, { useEffect } from "react";
import {
  IonButton,
  IonPage,
  IonHeader,
  IonContent,
  IonApp,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import { Plugins, PluginListenerHandle } from "@capacitor/core";

const MyApp: React.FC = () => {
  let handle: PluginListenerHandle;

  useEffect(() => {
    console.log("I am a one-time useEffect");
    const { App } = Plugins;
    handle = App.addListener("backButton", () => {
      alert("You are blocked");
    });
  }, []);

  const removeHandler = () => {
    handle.remove();
  };

  return (
    <IonApp>
      <IonPage>
        <IonHeader></IonHeader>
        <IonContent>
          <IonButton onClick={() => removeHandler()}>Remove Handler</IonButton>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default MyApp;
