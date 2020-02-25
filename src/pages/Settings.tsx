import { Form, Slider, Switch, Numpad } from '@mobiscroll/react';
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Settings.css';

const Settings: React.FC = () => {
  const [enabled, setEnabled] = useState(true);

  const toggleNotifications = (ev: any) => {
    setEnabled(ev.target.checked);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Form>
          <div className="app-tab">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Sound</div>
              <Slider value={100} data-icon="phone">Ring</Slider>
              <Slider value={60} data-icon="music">Media</Slider>
              <Slider value={80} data-icon="alarm2">Alarm</Slider>
            </div>
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Notifications</div>
              <Switch onChange={toggleNotifications} checked={enabled}>
                Enable notifications
                <span className="mbsc-desc">Allow notifications on this device</span>
              </Switch>
              <Switch className="settings-notify" defaultChecked disabled={!enabled}>
                Message
                <span className="mbsc-desc"> Get notifications when someone sends you a message</span>
              </Switch>
              <Switch className="settings-notify" defaultChecked disabled={!enabled}>
                Birthdays
                <span className="mbsc-desc"> Get notifications about your friends ' birthdays</span>
              </Switch>
              <Switch className="settings-notify" defaultChecked disabled={!enabled}>
                Tags
                <span className="mbsc-desc"> Get notifications when you 're tagged</span>
              </Switch>
            </div>
            <div className="mbsc-form-group-title"> Security</div>
            <label>
              Set PIN
              <Numpad
                template="dddd"
                allowLeadingZero={true}
                placeholder="-"
                mask="*"
                validate={(event) => {
                  return {
                    invalid: event.values.length !== 4
                  };
                }}
                type="password"
              />
            </label>
          </div>
        </Form>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
