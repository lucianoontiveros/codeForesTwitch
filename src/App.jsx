import { useEffect, useState } from 'react'
import tmi from 'tmi.js'
import env from 'dotenv'
import Code from './Components/Code.jsx';
import Banner from './Components/Banner.jsx';
import { Flowbite } from 'flowbite-react';


function App() {
  const [code, setCode] = useState(false);
  const [timer, setTimer] = useState(null);
  const [codigoSala, setCodigoSala] = useState('')
  const [aviso, setAviso] = useState("Bienvenidos a un canal de estudio #tercermundista !info !chenz !horario !reglas !comandos !tutoriales !page !code")

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
      const args = message.slice(1).split(' ');
      const command = args.shift().toLowerCase();

      if (command === "codigo") {
        if (username === 'cuartodechenz' || isMod) {
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

      if (command === "code") {
        client.say(channel, ('Este es el codigo de la salita actual https://www.forestapp.cc/join-room?token=' + codigoSala))
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
  );
};

export default App
