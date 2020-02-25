import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, home, person } from 'ionicons/icons';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import mobiscroll from '@mobiscroll/react';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Set Mobiscroll global settings */
mobiscroll.settings = {
  theme: 'ios'
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/settings" component={Settings} exact={true} />
          <Route path="/profile" component={Profile} />
          <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Settings" href="/Settings">
            <IonIcon icon={cog} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
