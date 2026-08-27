module.exports = {
  apps: [
    {
      name: 'syndicatedrestomod',
      script: 'dist/server/index.mjs',
      cwd: '/var/www/syndicatedrestomod.com',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      env_file: '.env',
      env: {
        NODE_ENV: 'production',
        PORT: '3020',
      },
    },
  ],
};
