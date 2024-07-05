export default function LoginPage() {
	const handleLogin = () => {
		window.location.href = `${import.meta.env.VITE_API_BACK_URL}/oauth2/authorization/naver`;
	};

	return (
		<button className="login-button" onClick={handleLogin}>
			로그인
		</button>
	);
}
