import React from 'react'
import { Layout } from 'antd';
import SlideCom from './Slide'
import './index.less'
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
                <Content>Content123</Content>
            </Layout>
        </Layout>
    )
}

export default LayoutCom