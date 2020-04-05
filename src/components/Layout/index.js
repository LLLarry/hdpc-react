import React from 'react'
import { Layout } from 'antd';
import SlideCom from './Slide'
import './index.less'
import Authen from '@/router/Authen'
import { superAdminRouter } from '@/router/router.config.js'
const { Header, Footer, Sider, Content } = Layout;
console.log(process.env.NODE_ENV)
function LayoutCom() {
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider className="slide">
                    <SlideCom />
                </Sider>
                <Content>
                    {
                        Authen(superAdminRouter[0].children)
                    }
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutCom