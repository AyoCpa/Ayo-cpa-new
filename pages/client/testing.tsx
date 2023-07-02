import { Space } from 'antd'
import React from 'react'
import SidebarNavbar from './sidebarNavbar'

const Testing = () => {
  return (
    <div className='testig'>
        <Space className='SideMenuandPageContent'>
            <SidebarNavbar></SidebarNavbar>
            {/* PageContent */}
        </Space>
    </div>
  )
}

export default Testing