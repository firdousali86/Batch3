import React, {createContext, useContext, useState, useEffect} from 'react';

const MyContext = createContext();

export function MyContextProvider({children, value}) {
  const [somedata, setData] = useState(null);

  const contextValue = {somedata, setData};
  //   useEffect(() => {
  //     setData(value);
  //   }, [value]);

  //   const updateData = newdata => {
  //     setData(newdata);
  //   };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
