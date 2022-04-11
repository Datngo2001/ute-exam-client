import { useRef, useState, useContext } from 'react';
import { login, register } from '../../api/auth';
import LoadingContext from '../../context/LoadingContext';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './Authentication.css';

function Login() {
    // Switch form handler: switching between Login and Register
    const [role, setRole] = useState('student');
    // <-- For swap form 'LOGIN' and 'REGISTER' -->
    const formRef = useRef();
    const authRef = useRef();

    const handleSwitchSignIn = () => {
        formRef.current.classList.remove('switchActive');
        authRef.current.classList.remove('authActive');
    };
    const handleSwitchSignUp = () => {
        formRef.current.classList.add('switchActive');
        authRef.current.classList.add('authActive');
    };

    // Login handler
    const { user, setUser } = useContext(UserContext);
    const setLoading = useContext(LoadingContext);
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        setLoading(true);
        login({
            username: inputs.usernameLogin,
            password: inputs.passwordLogin,
        })
            .then((res) => {
                setLoading(false);
                if (res.message === 'login') {
                    navigate('/home');
                    setUser(res.data);
                }
            })
            .catch((err) => {
                setLoading(false);
            });
    };
    // Register handler
    const renderNotMatch = () => {
        if (inputs.passwordRegister !== inputs.repeatPassword) {
            return <span style={{ color: 'red' }}>Password not match</span>;
        } else {
            return <span></span>;
        }
    };
    const handleRegister = (event) => {
        event.preventDefault();
        setLoading(true);
        register({
            username: inputs.usernameRegister,
            password: inputs.passwordRegister,
            roleName: role,
            fname: inputs.firstName,
            lname: inputs.lastName,
        })
            .then((res) => {
                setLoading(false);
                if (res.message === 'signup') {
                    handleSwitchSignIn();
                }
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    return (
        <div ref={authRef} className="Authentication">
            <div className="authContainer">
                <div className="authBackground">
                    <div className="box login">
                        <h2 className="boxText">Already have an account?</h2>
                        <button
                            onClick={handleSwitchSignIn}
                            className="btn btn-light switchBtn"
                        >
                            Sign in
                        </button>
                    </div>
                    <div className="box register">
                        <h2 className="boxText">Don't have an account?</h2>
                        <button
                            onClick={handleSwitchSignUp}
                            className="btn btn-light switchBtn"
                        >
                            Sign up
                        </button>
                    </div>
                </div>
                <div ref={formRef} className="formBox">
                    {/* Login area */}
                    <div className="form loginForm">
                        <form onSubmit={handleLogin}>
                            <h3>Login</h3>
                            <input
                                name="usernameLogin"
                                type="text"
                                placeholder="Username"
                                required
                                className="formInput"
                                value={inputs.usernameLogin || ''}
                                onChange={handleChange}
                            />
                            <input
                                name="passwordLogin"
                                type="password"
                                placeholder="Password"
                                required
                                minLength="6"
                                className="formInput"
                                value={inputs.passwordLogin || ''}
                                onChange={handleChange}
                            />
                            <button type="submit" className="btn loginBtn">
                                Login
                            </button>
                        </form>
                    </div>
                    {/* Register area */}
                    <div className="form registerForm">
                        <form onSubmit={handleRegister}>
                            <h3>Register</h3>
                            <input
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                required
                                className="formInput"
                                value={inputs.firstName || ''}
                                onChange={handleChange}
                            />
                            <input
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                required
                                className="formInput"
                                value={inputs.lastName || ''}
                                onChange={handleChange}
                            />
                            <input
                                name="usernameRegister"
                                type="text"
                                placeholder="Username"
                                required
                                className="formInput"
                                value={inputs.usernameRegister || ''}
                                onChange={handleChange}
                            />
                            <input
                                name="passwordRegister"
                                type="password"
                                placeholder="Password"
                                required
                                minLength="6"
                                className="formInput"
                                value={inputs.passwordRegister || ''}
                                onChange={handleChange}
                            />
                            <input
                                name="repeatPassword"
                                type="password"
                                placeholder="Confirm Password"
                                required
                                className="formInput"
                                value={inputs.repeatPassword || ''}
                                onChange={handleChange}
                            />
                            <div className="roleGroup">
                                <p className="roleTitle">Role</p>
                                <div className="form-check role">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="student"
                                        checked={role == 'student'}
                                        onChange={() => {
                                            setRole('student');
                                        }}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="student"
                                    >
                                        Student
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="teacher"
                                        checked={role == 'teacher'}
                                        onChange={() => {
                                            setRole('teacher');
                                        }}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="teacher"
                                    >
                                        Teacher
                                    </label>
                                </div>
                            </div>
                            {renderNotMatch()}
                            <button type="submit" className="btn registerBtn">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
