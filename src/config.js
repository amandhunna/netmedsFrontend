const root = process.env.REACT_APP_ROOT_URL || 'http://localhost:4000/api';

const config = {
    url: {
        user: `${root}/user`,
        cart: `${root}/order`,
        order: `${root}/tests`,
    }
}

export default config;
