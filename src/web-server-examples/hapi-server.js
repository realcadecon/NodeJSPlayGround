import Hapi from '@hapi/hapi';


const server = Hapi.server({
    port: 3000,
    host: 'localhost',
});


server.route({
    method: 'GET',
    path: '/',
    handler: async (req, h) => {
        return 'Hello from hapi!';
    },
})

server.start()
    .then(() => console.log("hapi server is listening on port 3000"));