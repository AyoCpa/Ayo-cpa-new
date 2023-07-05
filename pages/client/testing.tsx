import { Space } from 'antd'
import React from 'react'
import SidebarNavbar from './sidebarNavbar'
import PortalNavbar from '@/components/Nav/PortalNavbar'

const Testing = () => {
  return (
    <div className='testing bg-[#D2D2D2] '>
      <PortalNavbar />
        <Space className='SideMenuandPageContent'>
            <SidebarNavbar></SidebarNavbar>
            {/* PageContent */}
        </Space>
    </div>
  )
}

export default Testing