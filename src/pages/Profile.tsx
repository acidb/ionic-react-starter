import mobiscroll, { Button, Form, Input, Segmented, Select } from '@mobiscroll/react';
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Profile.css';

const Profile: React.FC = () => {
  const [language, setLanguage] = useState('en');
  const [birthday, setBirthday] = useState(new Date(2000, 4, 16));

  const updateLanguage = (ev: any) => {
    setLanguage(ev.valueText);
  }

  const updateBirthday = (ev: any, inst: any) => {
    setBirthday(inst.getVal());
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Form>
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Personal Data</div>
            <Input defaultValue="Angelica">First Name</Input>
            <Input defaultValue="Geary">Last Name</Input>
            <label>
              Language
                <Select value={language} onSet={updateLanguage}>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
                <option value="es">Espa&#241;ol</option>
                <option value="fr">Fran&#231;ais</option>
                <option value="it">Italiano</option>
              </Select>
            </label>
            <label>
              Birthday
              <mobiscroll.Date value={birthday} onSet={updateBirthday} />
            </label>
            <Segmented name="gender" value="male">Male</Segmented>
            <Segmented name="gender" value="female" defaultChecked>Female</Segmented>
          </div>
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Account</div>
            <Input type="email" defaultValue="angelica.geary@gmail.com">Email</Input>
            <Input type="password" passwordToggle={true}>Password</Input>
          </div>
          <div className="mbsc-padding">
            <Button block={true}>Save</Button>
          </div>
        </Form>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
