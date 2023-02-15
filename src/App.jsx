import { useEffect, useState } from 'react'
import tmi from 'tmi.js'
import env from 'dotenv'
import Code from './Components/Code.jsx';
import Banner from './Components/Banner.jsx';


function App() {
  const [codigoSala, setCodigoSala] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [aviso, setAviso] = useState("Un canal de estudio y trabajo  #tercermundista");

  useEffect(() => {
    const client = new tmi.Client({
      options: { debug: true },
      connection: {
        secure: true,
        reconnect: true
      },
      identity: {
        username: import.meta.env.VITE_APP_USERNAME,
        password: import.meta.env.VITE_APP_PASSWORD,
      },
      channels: [import.meta.env.VITE_APP_CHANNELS]
    });

    client.connect();

    let timerId;
    var codigoActual = '';

    client.on("message", (channel, userstate, message, self) => {
      if (self) return;
      const username = userstate.username;
      const isMod = userstate.badges?.moderator
      const mod = userstate?.mod;
      if (self || !message.startsWith('!')) return;

      var args = message.slice(1).split(' ');
      const command = args.shift().toLowerCase();

      if (command === "codigo") {
        if (username === 'cuartodechenz' || mod) {
          console.log(args)
          setCodigoSala(args)
          codigoActual = args;
          setShowCode(true);
          clearTimeout(timerId);
          timerId = setTimeout(() => {
            setShowCode(false);
            timerId = null;
          }, 480000);
        }
      }

      switch (command) {
        case 'aviso':
          setAviso(message);
          break;
        case 'code':
          if (username === 'cuartodechenz' || mod) {
            args = '';
            const code = `https://www.forestapp.cc/join-room?token=${codigoActual}`;
            client.say(channel, `Este es el codigo de la salita actual para no quedarte afuera ${code}`);
          }
          break;
        default:
          console.log('La petición no puede realizarse');
      }
    });

    return () => {
      client.disconnect();
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);

  return (
    <div>
      {showCode ? <Code codigoSala={codigoSala} /> : <Banner aviso={aviso} />}
    </div>
  );
}

export default App;
