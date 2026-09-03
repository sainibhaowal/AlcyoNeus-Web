module.exports = {
  apps: [
    {
      name: 'alcyoneus-web',
      // Run the standalone server for minimal memory footprint:
      script: '.next/standalone/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
