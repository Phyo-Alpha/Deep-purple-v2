import React from 'react';

export const UsernameContext = React.createContext({
    selectedUsername: "",
    setSelectedUsername: (_username: string) => {},
});