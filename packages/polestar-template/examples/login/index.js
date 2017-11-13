import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import './styles/style.css';
import Logo from './styles/images/polestarlogo.png';

ReactDOM.render(
    <div>
        <Login
            width={500}

            usernameName="username"
            usernameId="usernameId"
            usernameClassName="polestar login username"
            usernameLableText="사용자 계정"
            usernamePlaceholder="사용자 계정을 입력하세요"
            usernamePattern="[A-Za-z0-9]{4,16}"

            passwordName="password"
            passwordId="passwordId"
            passwordClassName="polestar login password"
            passwordLableText="패스워드"
            passwordPlaceholder="패스워드를 입력하세요"
            passwordPattern="[A-Za-z0-9]{4,16}"

            loginButtonClassName="polestar login button"
            loginButton={(<button>로그인!</button>)}

            logo={(<img src={Logo} alt="logo" className="polestar login logo" />)}

            containerClassName="polestar login container"

            onChange={(field) => {
                console.log('onChange -> ', field);
            }}

            onSubmit={(fields) => {
                console.log('onSubmit ->', fields);
            }}

            loginProcess={(fields) => {
                console.log('loginProcess ->', fields);
                window.location.href = 'http://nis.nkia.net';
            }}
        />
    </div>,
    document.getElementById('app'),
);
