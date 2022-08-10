module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd62e3763701eaaa29453a707f862acaa'),
  },
});
