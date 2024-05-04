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
    }
};



// here we can define the base url for the api
  