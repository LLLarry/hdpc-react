import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { superAdminMenuList } from '@/menuConfig'
const { SubMenu } = Menu;
import { handleLogin } from '@/require/login'
class SlideCom extends Component {
    constructor(props) {
        super(props)
        this.rootSubmenuKeys = [] //所有子菜单的索引
        this.state = {
            openKeys: ['0'] //当前打开的索引
        }
        this.handleOpenChange = this.handleOpenChange.bind(this)
    }
    componentDidMount() {
        this.rootSubmenuKeys = superAdminMenuList.map(item => item.index)
        handleLogin({
            phone: '15538065635',
            password: '065635',
            isolate: 1
        }).then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <Menu
                    mode="inline"
                    theme="dark"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.handleOpenChange}
                >
                    {
                        superAdminMenuList.map(item => (
                            <SubMenu
                                title={item.title}
                                key={item.index}
                            >
                                {
                                    item.children ?
                                        (
                                            item.children.map(jtem => (

                                                <Menu.Item key={jtem.index} >
                                                    <Link to={jtem.link}>
                                                        {jtem.title}
                                                    </Link>
                                                </Menu.Item>

                                            ))
                                        ) : null
                                }
                            </SubMenu>
                        ))
                    }
                </Menu>
            </div>
        )
    }
    // 处理点击展开菜单
    handleOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
}
export default SlideCom