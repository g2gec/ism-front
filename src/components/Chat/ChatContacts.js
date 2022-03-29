import React, { useEffect, useState } from 'react'
import { ChatAvatarUser } from './ChatAvatarUser'

export const ChatContacts = ({users = []}) => {

    const [search, setSearch] = useState('')
    const [userFilter, setUserFilter] = useState([])

    const handleSearch = (e) => {
      setSearch(e.target.value)
    }

    useEffect(() => {

      setUserFilter(users)

      if (!search ) { 
        setUserFilter(users)
      }
      let filterGeneral = []

      filterGeneral = users.filter(e => 
        e.name.trim().toLowerCase().includes(search.trim().toLowerCase())
        || e.apellido.trim().toLowerCase().includes(search.trim().toLowerCase())
      )

      setUserFilter(filterGeneral)
      
    }, [search, users])


    return (
      <div className="chatPage__mainContacts">
        <div className="chatPage__inputSearch">
          <img src="../../../static/IMAGENES/Icon/SVG/buscar-icon.svg" alt="Vaciar" />
          <input type="text" placeholder="Buscar..." onChange={handleSearch}/>
        </div>
        <ul>
        {
          userFilter.map(e => (

            <ChatAvatarUser
              data={e}
              key={e.id}
            />           
          ))
        }
        </ul>
      </div>
    );
}
