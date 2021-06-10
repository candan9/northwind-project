import React from 'react'
import { Dropdown , Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                 <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4D03AQGwjRaZS0LZVA/profile-displayphoto-shrink_100_100/0/1561058991818?e=1628121600&v=beta&t=NFzYU_t6GxV_yL5mVI_lc35-iSrB8xsvE0HCEg_K2XE">

                 </Image>
                 <Dropdown pointing="top right" text="Emre">
                     <Dropdown.Menu>
                         <Dropdown.Item text="Bilgilerim" icon="info"/>
                         <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign-out"/>
                         
                     </Dropdown.Menu>
                 </Dropdown>
            </Menu.Item>
        </div>
    )
}
