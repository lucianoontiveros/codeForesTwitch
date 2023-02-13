import { useEffect, useState } from 'react'
import tmi from 'tmi.js'
import env from 'dotenv'
import Code from './Components/Code.jsx';
import Banner from './Components/Banner.jsx';


function App() {
  const [code, setCode] = useState(false);
  const [timer, setTimer] = useState(null);
  const [codigoSala, setCodigoSala] = useState('')
  const [aviso, setAviso] = useState("Un canal de estudio y trabajo  #tercermundista")

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

    client.on("message", (channel, userstate, message, self) => {
      if (self) return;
      const username = userstate.username;
      const isMod = userstate.badges?.moderator
      if (self || !message.startsWith('!')) return;
      var args = message.slice(1).split(' ');
      const command = args.shift().toLowerCase();
      if (command === "codigo") {
        if (username === 'cuartodechenz' || username === isMod) {
          console.log(args)
          setCodigoSala(args)
          setCode(true);
          setTimer(
            setTimeout(() => {
              setCode(false);
              setTimer(null);
            }, 780000)
          );
        }
      }

      switch (command) {
        case 'aviso':
          setAviso(message)
          break;
        case 'code':
          if (username === 'cuartodechenz' || isMod) {
            args = '';
            client.say(channel, `Este es el codigo de la salita actual para no quedarte afuera https://www.forestapp.cc/join-room?token=${codigoSala}`)
          }
          break;
        default:
          console.log('La peticion no puede realizarse')
      }
    });

    return () => {
      client.disconnect();
    };
  }, [timer]);

  return (
    <div>
      {code ? (
        <Code codigoSala={codigoSala} />
      ) : (
        <Banner aviso={aviso} />
      )}
    </div>
  )
}

export default App
