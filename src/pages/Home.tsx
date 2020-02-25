import { Form, Listview, Calendar } from '@mobiscroll/react';
import React, { FC, useState, useCallback } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

let itemId = 5;
const defualtData = [{
  id: 1,
  text: 'Do the laundry',
  checked: true
}, {
  id: 2,
  text: 'Don\'t forget mom\'s birthday!',
  checked: true
}, {
  id: 3,
  text: 'Buy new shoes'
}, {
  id: 4,
  text: 'Need ketchup for pizza'
}];

const ListItem: FC = (props: any) => {
  let item = props.item;

  return (
    <li data-id={item.id}><input type="checkbox" data-role="none" defaultChecked={item.checked} />{item.text}</li>
  );
}

const Home: React.FC = () => {
  const [todoDate, setTodoDate] = useState(new Date());
  const [data, setData] = useState(defualtData);

  const updateTodoDate = useCallback((ev, inst) => {
    setTodoDate(inst.getVal());
  }, []);

  const stagesObj = {
    left: [{
      key: 'stage1',
      icon: 'plus',
      color: '#31c6e7',
      text: 'Add',
      percent: 30,
      action: (ev: any) => {
        data.splice(ev.index + 1, 0, { id: itemId++, text: 'New Todo' })
        setData(data.slice(0));
      }
    }],
    right: [{
      key: 'stage2',
      color: '#009688',
      text: 'Remove',
      icon: 'remove',
      percent: -30,
      action: (ev: any) => {
        const newData = data.filter((it) => it.id !== +ev.target.getAttribute('data-id'))
        setData(newData);
      }
    }]
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Form>
          <label>
            Date
            <Calendar
              value={todoDate}
              onSet={updateTodoDate}
            />
          </label>
          <div className="mbsc-divider">Todo List</div>
          <Listview
            // enhance={true}
            itemType={ListItem}
            data={data}
            stages={stagesObj}
          />
        </Form>

      </IonContent>
    </IonPage >
  );
};

export default Home;