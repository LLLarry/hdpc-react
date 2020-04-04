import React,{ Component } from 'react'
import { Menu } from 'antd'
const { SubMenu } = Menu;
class SlideCom extends Component {
    render(){
        return(
            <div>
                <Menu>
                    <SubMenu>
                        <Menu.Item>Option 1</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
export default SlideCom