import "../App.css";
import naver from "../assets/naver_login.png";

const NaverLogin = () => {
  return (
    <button className="btn">
      <img className="img" src={naver} alt="로그인 이미지" />
    </button>
  );
};

export default NaverLogin;
