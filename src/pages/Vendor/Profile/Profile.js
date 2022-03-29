import React from 'react'
import { ProfileForm } from '../../../components/Vendor/ProfileForm/ProfileForm'
import './Profile.css'


export const Profile = () => {
    return (
        <div>
        <div className="vendor__mainTitle">
          <h3>Perfil</h3>
        </div>
        <div className="vendor__mainPanel">
          <div className="vendor__panelHeader">
            <button className={"admin__btnHeaderActive"}>Perfil</button>
          </div>
          <div className="vendor__content p-4">
            <ProfileForm/>
          </div>
        </div>
      </div>
    )
}
