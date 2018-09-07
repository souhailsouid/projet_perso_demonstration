
import React from 'react'
import classNames from 'classnames'

const ProfilImage = ({profil, classes}) => (
    <div>
    	{profil.imageURL}
									
                                        {profil.firstName}
                                         {profil.lasttName}
    </div>
)
	
export default ProfilImage