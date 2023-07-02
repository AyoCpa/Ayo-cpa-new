import { 
    AppstoreAddOutlined, FileAddOutlined, 
    FolderAddOutlined, AccountBookOutlined,
    PayCircleOutlined, LaptopOutlined,
    CustomerServiceOutlined
 } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'

const SidebarNavbar = () => {
  return (
    <div className='SideNav'>
        <Menu 
        onClick={(item)=>{
            // Item key

        }}
        
        items={[
            {
                label: "Invoices",
                icon: <FileAddOutlined/> ,
                key:'/',
            },
            {
                label: "Dashboard",
                icon: <AppstoreAddOutlined/>,
                key:'/'
            },
            {
                label: "File My Tax",
                icon: <FolderAddOutlined /> ,
                key:'/'
            },
            {
                label: "Accounting Records",
                icon: <AccountBookOutlined /> ,
                key:'/'
            },
            {
                label: "Documents",
                icon: <AppstoreAddOutlined/>,
                key:'/'
            },
            // 
            {
                label: "Payments",
                icon: <PayCircleOutlined /> ,
                key:'/'
            },
            {
                label: "Appointment",
                icon: <FileAddOutlined/>,
                key:'/'
            },
            {
                label: "Remote Access",
                icon: <LaptopOutlined /> ,
                key:'/'
            },
            {
                label: "Contact Support",
                icon: <CustomerServiceOutlined /> ,
                key:'/'
            },
            // 
            {
                label: "Ayo234 Accounting",
                icon: <AppstoreAddOutlined/>,
                key:'/'
            },

        ]}>

        </Menu>

    </div>
  )
}

export default SidebarNavbar