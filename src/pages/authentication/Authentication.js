import { useRef, useState } from 'react';
import './Authentication.css';

function Login() {
    //useState hook(s)
    const [role, setRole] = useState('');
    // useRef hook(s)
    // <-- For swap form 'LOGIN' and 'REGISTER' -->
    const formRef = useRef();
    const authRef = useRef();
    // <-- For 'LOGIN' or 'REGISTER' when press ENTER -->
    const btnLoginRef = useRef();
    const btnRegisterRef = useRef();
    // <-- Switch form function: 'LOGIN' <=> 'REGISTER' -->
    const handleSwitchSignIn = () => {
        formRef.current.classList.remove('switchActive');
        authRef.current.classList.remove('authActive');
    };
    const handleSwitchSignUp = () => {
        formRef.current.classList.add('switchActive');
        authRef.current.classList.add('authActive');
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
                        <form>
                            <h3>Login</h3>
                            <input
                                type="text"
                                placeholder="Username"
                                required
                                className="formInput"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                minLength="6"
                                className="formInput"
                            />
                            <button
                                ref={btnLoginRef}
                                type="submit"
                                className="btn loginBtn"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                    {/* Register area */}
                    <div className="form registerForm">
                        <form>
                            <h3>Register</h3>
                            <input
                                type="text"
                                placeholder="First Name"
                                required
                                className="formInput"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                required
                                className="formInput"
                            />
                            <input
                                type="text"
                                placeholder="Username"
                                required
                                className="formInput"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                minLength="6"
                                className="formInput"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                required
                                className="formInput"
                            />
                            <div className="roleGroup">
                                <p className="roleTitle">Role</p>
                                <div class="form-check role">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        id="student"
                                        checked={role == 'student'}
                                        onChange={() => {
                                            setRole('student');
                                        }}
                                    />
                                    <label
                                        class="form-check-label"
                                        for="student"
                                    >
                                        Student
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        id="teacher"
                                        checked={role == 'teacher'}
                                        onChange={() => {
                                            setRole('teacher');
                                        }}
                                    />
                                    <label
                                        class="form-check-label"
                                        for="teacher"
                                    >
                                        Teacher
                                    </label>
                                </div>
                            </div>
                            <button
                                ref={btnRegisterRef}
                                type="submit"
                                className="btn registerBtn"
                            >
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
