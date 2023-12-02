import React, {useState, useEffect, createContext, useContext, Children} from 'react';

const Authcontext = createContext();

const Usercontext = ({children}) => {
    const [userauth, setuserauth] = useState({ user:null, token:"" })

    useEffect(()=>{
        const userdata =localStorage.getItem("auth")
        if(userdata){
            const parsedata =JSON.parse(userdata)
            setuserauth({...userauth,user:parsedata.existuser,token:parsedata.token})
        }
    },[])

  return (
    <div>
      <Authcontext.Provider value={[userauth, setuserauth]}>
        {children}
      </Authcontext.Provider>
    </div>
  )
}

// custom hook
const useAuth = () => useContext(Authcontext);

export {useAuth, Usercontext}
