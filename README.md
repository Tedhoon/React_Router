<h1>PIP LIST</h1>

```code 
$ yarn add react-router-dom
$ yarn add cross-env --dev
```
`cross-env` : 프로젝트에서 NODE_PATH 를 사용하여 절대경로로 파일을 불러오기 위하여 환경 변수를 설정 할 때 운영체제마다 방식이 다르므로 공통적인 방법으로 설정 할 수 있게 해주는 라이브러리

---

<h1>디렉토리</h1>
<li>src/components: 컴포넌트들이 위치하는 디렉토리<br>

<li>src/pages: 각 라우트들이 위치하는 디렉토리<br>

<li>src/client: 브라우저 측에서 사용할 최상위 컴포넌트 <br>
추후 서버사이드 렌더링을 위해 별개의 디렉토리 생성<br>
(서버사이드 렌더링을 할 때에는 서버 전용 라우터를 써야함) <br>여기서 라우터를 설정

<li>src/server: 서버측에서 사용 할 리액트 관련 코드 저장<br>
<li>src/shared: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트 App.js 위치<br>

<li>src/lib: 나중에 웹 연동을 구현 할 때 사용 할 API와 코드스플리팅 할 때 필요한 코드가 여기에 위치

---

<h1>NODE_ENV 설정</h1>

    "scripts": {
        "start": "cross-env NODE_PATH=src react-scripts start",
        "build": "cross-env NODE_PATH=src react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
    }
<li>package.json의 scripts부분을 이렇게 설정함으로써  ‘../components/Something’ 이런식으로 불러와야 하는 코드를 ‘components/Something’으로 간편하게 불러올 수 있음

---
<h1>라우트 파라미터</h1>

`params` 사용<br>
라우트로 설정한 컴포넌트는 3가지의 props를 전달 받는다.
<li>history : push, replace를 통해 앞 뒤 경로로 이동가능
<li>location : 이 객체는 현재 경로에 대한 정보를 지니고 있고  URL 쿼리 (/about?foo=bar 형식) 정보를 가지고 있음
<li>match : 어떤 라우트와 매칭되었는지에 대한 정보를 가지고 있고 params (/about/:name 형식)정보를 가지고 있음

`url 쿼리를 다루기 위한 라이브러리`
```
$ yarn add query-string
```



---




