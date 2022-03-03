module.exports = (on, config) => {
  // copy any needed variables from process.env to config.env
  
  config.env.DASHBOARD_APP_URL = process.env.DASHBOARD_APP_URL;
  
  config.env.PILOTCTL_URI = process.env.PILOTCTL_URI;
  config.env.PILOTCTL_APP_PILOTCTL_ONIX_USER = process.env.PILOTCTL_APP_PILOTCTL_ONIX_USER;
  config.env.PILOTCTL_APP_PILOTCTL_ONIX_PWD = process.env.PILOTCTL_APP_PILOTCTL_ONIX_PWD;

  // do not forget to return the changed config object!
  return config
}