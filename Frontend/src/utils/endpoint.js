export const endpoints = {
    auth: {
        login: '/auth/login',
        register: '/auth/signup',
    },
    job:{
        create: '/job',
        get: '/job',
        update :(id) => `/job/${id}`,
        delete :(id) => `/job/${id}`,
        metrics :'/job/metrics',
    }
};



// this files contains all the api endpoints used in the application
  