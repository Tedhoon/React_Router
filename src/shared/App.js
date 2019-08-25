import React , { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home , About } from 'pages' //index.js를 통해 한번에 불러줄 수 있음
import Menu from '../components/Menu';
import NavLinkMenu from '../components/NavLinkMenu';



class App extends Component {
    render(){
        return(
            <div>
                <Menu />
                <NavLinkMenu />
                <Route exact path ="/" component = {Home} />  
                {/* exact가 붙으면 주어진 경로와 정확하게 맞아 떨어져야 컴포넌트를 보여준다 */}
                {/* 라우팅과 함께 컴포넌트를 불러준다! 와씨 여기에서 component를 Component로 써주면 안되네 ㅋㅋㅋ */}

                <Route exact path = "/about" component = {About} />
                {/* 위 '/' 의 exact를 빼면 about페이지에 home이 같이 렌더링 된다(about에도 /가 있기 때문에) */}
                <Route path = "/about/:name" component = {About} />
                {/* params는 :foo 형식으로 붙여주면됩니당 */}
                {/* 그리고 해당 컴포넌트 안에 {match}를 인자로 주면 됨 */}
                
            </div>
        );
    }

}

export default App;