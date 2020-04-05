/* 
路由鉴权页面
参考 react-router-config配置
*/
import React from "react";
import { Switch, Route } from "react-router";
import store from '@/store'

function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  console.log('7778888')
  console.log(routes)
  return(
    routes ? (
      <Switch {...switchProps}>
        {routes.map((route, i) => (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props =>
              route.render ? (
                route.render({ ...props, ...extraProps, route: route })
              ) : (
                <route.component {...props} {...extraProps} route={route} />
              )
            }
          />
        ))}
      </Switch>
    ) : null
  )
}

export default renderRoutes;