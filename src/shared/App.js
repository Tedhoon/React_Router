import React , { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home , About } from 'pages'




class App extends Component {
    render(){
        return(
            <div>
                <Route exact path ="/" component = {Home} />  
                {/* exact가 붙으면 주어진 경로와 정확하게 맞아 떨어져야 컴포넌트를 보여준다 */}
                {/* 라우팅과 함께 컴포넌트를 불러준다! 와씨 여기에서 component를 Component로 써주면 안되네 ㅋㅋㅋ */}
                <Route path = "/about" component = {About} />
            </div>
        );
    }

}

export default App;