# INTRODUCCIÓN

Tenía que crear un panel que pudiera dar avisos en mis directos, exponiendo mensajes para el público y que fuera importante para todos. Sumado a esto, también tenía que exponer el código de Forest, que permite ingresar a salas compartidas, los que conocen la app entienden que es de utilidad relacionado con la concentración y registro de tiempos de productividad. Esta es una de las actividades que realizamos en los descansos de Cuarto de Chenz.

Con conocimiento basico de React y con el fin de practicar lo aprendido de algunos de los cursos de BluueWeb, decidí implementarlo,  incluso dejarlo alojado en vercel. El resultado es aceptable, aunque se puede mejorar. Es muy simple, pero cumple la función para la que fue creada que tiene que ver con una necesidad en este canal de Twitch. Con el paso de  tiempo integraré todas estas funciones en una sola App, hablando del timer y los avisos de actividades que pueden encontrar en los proyectos realizados de mi repositorio.
[![Introducci-n.png](https://i.postimg.cc/P5GFCKZY/Introducci-n.png)](https://postimg.cc/Whn7KG51)

# EJECUCIÓN
La ejecución es simple, con el comando !aviso se deja registrado el mensaje, por lo general corto para no modificar el estilo del contenedor, y esto también permite claridad en lo que se quiere escribir. Este mensaje estará visible en pantalla con el nombre del canal todo el tiempo, excepto al ingresar el código de sala de forest.
[![image.png](https://i.postimg.cc/rmb7QTdY/image.png)](https://postimg.cc/2bQHSP74)
Al ingresar el comando !codigo + el código de la sala, el contenedor visualizará el código de sala por 7 minutos, por lo cual el aviso anterior no se mostrará en pantalla hasta consumirse el recurso. De todas maneras cualquier nueva aviso quedará registrado y al terminar se mostrará con normalidad.
[![image.png](https://i.postimg.cc/PfzgT2QR/image.png)](https://postimg.cc/bdrCR0Mx)

##COMANDOS
- !aviso: ingresado el comando más el aviso pertinente queda registrado para mostrarse en pantalla.
- !codigo + codigo de la sala: Mostrará el código en pantalla durante 7 minutos.

## CONFIGURACIÓN
Primero debemos configurar las variables de entorno en el archivo .env.local:
VITE_APP_USERNAME= el username del canal
VITE_APP_PASSWORD= La clave oauth que te ofrece la página https://twitchapps.com/tmi/
VITE_APP_CHANNELS= el nombre del canal donde se va a ejecutar.

Estas variables estarán en el useEffect preconfigurada para que una vez introduccidas las credenciales en el archivo .env.local.

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
A partir de aquí solo hay que configurar el nombre del usuario que puede usar los comandos. Por defecto también estan habilitados los moderados del canal vinculado.

    if (command === "codigo") {
            if (username === 'cuartodechenz' || mod) { // Aquí deberias habilitar al usuario que manipule los comandos.
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
