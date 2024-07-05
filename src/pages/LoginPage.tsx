export default function LoginPage() {
    const handleLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/naver';
      };
    
    return (
        <button className="login-button" onClick={handleLogin}>
          로그인
        </button>
    );
}