import * as React from 'react';

const MyContext = React.createContext<{appName?: string}>({});

export default MyContext;
