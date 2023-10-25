import { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import bcrypt from 'bcryptjs'


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
const USER_REGEX = /^[A-Z][a-zA-Z0-9_-]{2,15}$/;


export const Register = () => {

	const errRef = useRef();

	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);
	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);


	useEffect(() => {
		const result = USER_REGEX.test(user);
		setValidName(result);
	}, [user])

	useEffect(() => {
		const result = PWD_REGEX.test(pwd);
		setValidPwd(result);
	}, [pwd])

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd])


	const handleInputChange = (e, fieldName) => {
		const value = e.target.value;
		if (fieldName === 'user') {
			setUser(value)
		} else if (fieldName === "password") {
			setPwd(value)
		}
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		const validUs = USER_REGEX.test(user);
		const validPass = PWD_REGEX.test(pwd);
		if (!validUs || !validPass) {
			setErrMsg('Invalid Name or password');
			return;
		}
		try {
			const hash = bcrypt.hashSync(pwd, 10)
			const response = await fetch('http://localhost:4000/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name: user, password: hash }),
			});

			if (response.status === 400) {
				setErrMsg('Username already exists');
			} else if (response.ok) {
				setSuccess(true);
				setErrMsg('Registration Success');
				console.log('User added:', JSON.stringify({ name: user, password: hash }));
			} else {
				setSuccess(false);
				setErrMsg('Registration Failed');
			}
		} catch (err) {
			setSuccess(false);
			setErrMsg('Registration Failed');
		}
	};

	return (
		<div className="container w-25 mt-5 bg-danger-subtle p-4">
			<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
			<h1>Register</h1>
			<form className="d-flex flex-column p-5 mt-5">
				<div className="mb-3">
					<label className="form-label">User Name</label>
					<input
						type="text"
						value={user}
						onChange={(e) => handleInputChange(e, 'user')}
						className="form-control" />
					{!validName && user.length > 0 && (
						<small id="nameHelp" className="form-text text-danger">
							Username must start with a capital letter and be 3-16 characters long (alphanumeric, underscore, or hyphen).
						</small>
					)}
				</div>
				<div className="mb-3">
					<label className="form-label">Password</label>
					<input
						type="password"
						value={pwd}
						onChange={(e) => handleInputChange(e, 'password')}
						className="form-control"
					/>
					{pwd.length > 0 && !validPwd && (
						<small id="passwordHelp" className="form-text text-danger">
							Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit.
						</small>
					)}

				</div>
				<div className="mb-3">
					<button
						type="submit"
						onClick={handleSubmit}
						className="btn btn-secondary">
						Register
					</button>
				</div>
			</form>
			<Link to="/login" className="text-secondary"> Already have an account?</Link>
			
		</div>
	)
}