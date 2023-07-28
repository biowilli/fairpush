import {React, useState, useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
import Header from '../components/Header'
import Pusher from 'pusher-js';
//import { askForPermissionToReceiveNotifications } from './push-notification';

function Main() {

  // Design Pattern: Adapter Pattern mit Server-Sent-Events / WebSockets
  let [messages, setMessages] = useState([])
  let [message, setMessage] = useState([])
  Pusher.logToConsole = true;

  const pusher = new Pusher('dcd708b64396c779c954', {
    cluster: 'eu'
  });

  const channel = pusher.subscribe('server-channel');
  channel.bind('server-event', function(data) {
    console.log(data)
  });

  useEffect(() => {

  } , [])

  return (
    <div>
        <h1>Pusher Test: Server Sent Events</h1>
        <h1>{message}</h1>
        <button onClick={console.log("test")} >
          Click to receive notifications
        </button>
        
	  </div>
  );
}

export default Main;



const button = document.getElementById('notifications');
button.addEventListener('click', () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
      console.log('Notification permitted');
    }
  });
})

const eventSource = new EventSource('/sse');
eventSource.onmessage = e => {
  let tmpMessage = message;
  tmpMessage.push(e.data)
  setMessage(e.data)
  new Notification('Neu Meldung', { body: e.data});
  console.log(`Received message: ${e.data}`);
};
