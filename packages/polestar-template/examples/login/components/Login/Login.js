import React from 'react';
import PropTypes from 'prop-types';
import './style/Login.css';

class Login extends React.Component {
    static propTypes = {
        /** 로그인 컴포넌트의 너비 */
        width: PropTypes.number,
        /** 사용자 계정 필드의 name 속성 값 */
        usernameName: PropTypes.string,
        /** 사용자 계정 필드의 id 속성 값 */
        usernameId: PropTypes.string,
        /** 사용자 계정 필드의 class 속성 값 */
        usernameClassName: PropTypes.string,
        /** 사용자 계정 필드 Label 문자 */
        usernameLableText: PropTypes.string,
        /** 사용자 계정 필드 Placeholder */
        usernamePlaceholder: PropTypes.string,
        /** 사용자 계정 필드값 검증 정규식 */
        usernamePattern: PropTypes.string,
        /** 패스워드 필드의 name 속성 값 */
        passwordName: PropTypes.string,
        /** 패스워드 필드의 id 속성 값 */
        passwordId: PropTypes.string,
        /** 패스워드 필드의 class 속성 값 */
        passwordClassName: PropTypes.string,
        /** 패스워드 필드 Label 문자 */
        passwordLableText: PropTypes.string,
        /**  패스워드 필드 Placeholder */
        passwordPlaceholder: PropTypes.string,
        /** 패스워드 필드값 검증 정규식 */
        passwordPattern: PropTypes.string,
        /** 로그인 버튼 컴포넌트 */
        loginButton: PropTypes.element,
        /** Logo 컴포넌트 */
        logo: PropTypes.element,
        /** 컨테이너의 class 속성 값 */
        containerClassName: PropTypes.string,
        /** Header 영역의 class 속성 값 */
        headerClassName: PropTypes.string,
        /** Content 영역의 class 속성 값 */
        contentClassName: PropTypes.string,
        /** Footer 영역의 class 속성 값 */
        footerClassName: PropTypes.string,
        /** Label class 속성 값 */
        labelClassName: PropTypes.string,
        /** 로그인 컴포넌트를 감싸고 있는 컨테이너의 스타일 */
        containerStyle: PropTypes.object,
        /** 로그인 컴포넌트 Header 영역 스타일 */
        headerStyle: PropTypes.object,
        /** 로그인 컴포넌트 Content 영역 스타일 */
        contentStyle: PropTypes.object,
        /** 로그인 컴포넌트 Footer 영역 스타일 */
        footerStyle: PropTypes.object,
        /** 사용자 계정 필드와 패스워드 필드 Label의 스타일 */
        labelStyle: PropTypes.object,
        /** 사용자 계정 필드 입력창과 패스워드 필드 입력창의 스타일 */
        inputStyle: PropTypes.object,
        /** 로그인 버튼 컴포넌트의 class 속성 값 */
        loginButtonClassName: PropTypes.string,
        /** 로그인 버튼 컴포넌트의 스타일 */
        loginButtonStyle: PropTypes.object,
        /**
         * 사용자 계정이나 패스워드 필드의 값이 변경되었을 경우 실행되는 콜백 함수
         * @param field { fieldName, fieldValue, isValid }
         */
        onChange: PropTypes.func,
        /**
         * 로그인 버튼이 클릭되거나 사용자 계정, 패스워드 입력 창에서 엔터키를 입력받았을 때
         * 실행되는 콜백 함수. 콜백 함수 내부에서 false를 return하면 loginProcess 함수가 실행되는 것을 막을 수 있다.
         * usernamePattern 또는 passwordPattern props를 정의하였을 때, 정의한 패턴과 입력된 필드값이 달라도 loginProcess 함수는 실행되지 않는다.
         * @param fields { username, password }
         */
        onSubmit: PropTypes.func,
        /**
         *  입력받은 사용자 계정과 패스워드 필드값을 이용해서 실제 로그인 과정을 처리해야 하는 함수.
         *  필드값 검증이 성공적으로 완료되고 onSubmit 함수에서도 false를 return 하지 않으면 loginProcess 함수가 실행된다.
         *  @param fields { username, password }
         */
        loginProcess: PropTypes.func,
    };

    static defaultProps = {
        width: 300,
        usernameName: 'username',
        usernameId: 'username',
        usernameClassName: 'polestar login input username',
        usernameLableText: 'Username',
        usernamePlaceholder: 'Username',
        usernamePattern: 'a-zA-Z0-9',
        passwordName: 'password',
        passwordId: 'password',
        passwordClassName: 'polestar login input password',
        passwordLableText: 'Password',
        passwordPlaceholder: 'Password',
        passwordPattern: 'a-zA-Z0-9',
        loginButton: <button>Login</button>,
        logo: <div />,
        containerClassName: 'polestar login container',
        headerClassName: 'polestar login header',
        contentClassName: 'polestar login content',
        footerClassName: 'polestar login footer',
        labelClassName: 'polestar login label',
        containerStyle: {
            position: 'relative',
            margin: '0 auto',
        },
        headerStyle: {},
        contentStyle: {},
        footerStyle: {},
        labelStyle: {},
        inputStyle: {
            width: '100%',
        },
        loginButtonClassName: 'polestar login button',
        loginButtonStyle: {},
        onChange: (field) => {
            console.log('onChange ->', field);
        },
        onSubmit: (fields) => {
            console.log('onSubmit ->', fields);
        },
        loginProcess: (fields) => {
            console.info('디폴트 loginProcess 함수가 호출되었습니다. ' +
                '실제 로그인 과정을 처리할 loginProcess 함수를 정의해서 Login 컴포넌트의 props로 전달해주세요.', fields);
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    isUsernameValid = () => {
        const username = this.state.username || '';
        return username !== '' && new RegExp(this.props.usernamePattern).test(username);
    };

    isPasswordValid = () => {
        const password = this.state.password || '';
        return password !== '' && new RegExp(this.props.passwordPattern).test(password);
    };

    handleChange = (e) => {
        switch (e.target.name) {
            case this.props.usernameName:
                this.props.onChange({
                    fieldName: this.props.usernameName,
                    fieldValue: e.target.value,
                    isValid: this.isUsernameValid(),
                });
                return this.setState({ username: e.target.value });
            case this.props.passwordName:
                this.props.onChange({
                    fieldName: this.props.passwordName,
                    fieldValue: e.target.value,
                    isValid: this.isPasswordValid(),
                });
                return this.setState({ password: e.target.value });
            default:
                return null;
        }
    };

    handleKeyPress = (e) => {
        if (e.charCode === 13) {
            this.handleSubmit();
        }
    };

    handleSubmit = () => {
        let canSubmit = true;
        if (!this.isUsernameValid()) {
            console.error(`${this.props.usernameName} 필드값이 입력되지 않았거나 usernamePattern props에 정의된 패턴과 다릅니다.`);
            canSubmit = false;
            this[this.props.usernameName].focus();
            return;
        }
        if (!this.isPasswordValid()) {
            console.error(`${this.props.passwordName} 필드값이 입력되지 않았거나 usernamePattern props에 정의된 패턴과 다릅니다.`);
            canSubmit = false;
            this[this.props.passwordName].focus();
        }
        if (this.props.onSubmit(this.state) === false) {
            canSubmit = false;
        }
        if (canSubmit) {
            this.clearFields();
            this.props.loginProcess(this.state);
        }
    };

    clearFields = () => {
        this.setState({
            username: '',
            password: '',
        });
    };

    render() {

        const containerStyle = {
            width: this.props.width,
            ...this.props.containerStyle,
        };

        const headerStyle = {
            ...this.props.headerStyle,
        };

        const contentStyle = {
            ...this.props.contentStyle,
        };

        const footerStyle = {
            ...this.props.footerStyle,
        };

        const labelStyle = {
            ...this.props.labelStyle,
        };

        const inputStyle = {
            display: 'block',
            ...this.props.inputStyle,
        };

        return (
            <div className={this.props.containerClassName} style={containerStyle}>
                <div className={this.props.headerClassName} style={headerStyle}>
                    {this.props.logo}
                </div>
                <div className={this.props.contentClassName} style={contentStyle}>
                    <label
                        htmlFor={this.props.usernameName}
                        className={this.props.labelClassName}
                        style={labelStyle}
                    >{this.props.usernameLableText}
                        <input
                            type="text"
                            name={this.props.usernameName}
                            id={this.props.usernameId}
                            value={this.state.username}
                            placeholder={this.props.usernamePlaceholder}
                            style={inputStyle}
                            className={this.props.usernameClassName}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                            ref={(ref) => {
                                this[this.props.usernameName] = ref;
                            }}
                        />
                    </label>
                    <label
                        htmlFor={this.props.passwordName}
                        className={this.props.labelClassName}
                        style={labelStyle}
                    >{this.props.passwordLableText}
                        <input
                            type="password"
                            name={this.props.passwordName}
                            id={this.props.passwordId}
                            value={this.state.password}
                            placeholder={this.props.passwordPlaceholder}
                            style={inputStyle}
                            className={this.props.passwordClassName}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                            ref={(ref) => {
                                this[this.props.passwordName] = ref;
                            }}
                        />
                    </label>
                </div>
                <div className={this.props.footerClassName} style={footerStyle}>
                    {React.cloneElement(this.props.loginButton, {
                        className: this.props.loginButtonClassName,
                        style: this.props.loginButtonStyle,
                        onClick: this.handleSubmit,
                    })}
                </div>
            </div>
        );
    }
}

export default Login;
