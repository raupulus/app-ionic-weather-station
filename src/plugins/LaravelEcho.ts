import Pusher from 'pusher-js';
import Echo from "laravel-echo"

// TODO: Obtener esta parte de un archivo de configuración
const VueEchoConfig = {
    broadcaster: 'pusher',
    key: process.env.VUE_APP_PUSHER_KEY,
    cluster: process.env.VUE_APP_PUSHER_CLUSTER,
    encrypted: process.env.VUE_APP_PUSHER_ENCRYPTED === 'true' ? true : false,
    wsHost: process.env.VUE_APP_PUSHER_HOST ?? '127.0.0.1',
    wsPort: parseInt(process.env.VUE_APP_PUSHER_PORT) ?? 6001,
    forceTLS: process.env.VUE_APP_PUSHER_FORCE_TLS === 'true' ? true : false,
    disableStats: false,
};

//console.log(VueEchoConfig);

const VuePusherConfig = new Pusher(process.env.VUE_APP_PUSHER_KEY, VueEchoConfig);

export function LaravelEcho() {
    return new Echo({
        ...VueEchoConfig,
        client: VuePusherConfig,
    });
}
