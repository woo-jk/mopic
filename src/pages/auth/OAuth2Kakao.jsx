import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuth2Kakao = (props) => {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useEffect(() => navigate("/"), [navigate]);

  return <div>로딩 중..</div>;
};

export default OAuth2Kakao;
