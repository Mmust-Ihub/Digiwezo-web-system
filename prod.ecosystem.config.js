module.exports = {
    apps: [
        {
            name: "Digiwezo-web-system",
            script: "server.js",
            instances: "max",
            exec_mode: "cluster",
            max_memory_restart: "1G",
            autorestart: true, // Automatically restart the app if it crashes.
            watch: false,
            env_production: {
                NODE_ENV: "production",
                PORT: 3000,
            },
        },
    ],
};
  