import React, { Component } from 'react'

function asyncComponent(importComponent) {
    class asyncComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                component: null,
            }
        }
        /**
         * @Description: 这里使用同步的原因是等到 对应的模块资源加载完成之后，再进行渲染 
         */
        async componentDidMount() {
            // 变量名与属性名不一致的情况下，必须这样写
            // default 是返回的，赋值给 component
            const { default: component } = await importComponent();
            this.setState({ component });
        }
        render() {
            var C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
    return asyncComponent;
}

export default asyncComponent;