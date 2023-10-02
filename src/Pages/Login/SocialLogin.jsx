import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate =useNavigate()
  const { googleLogin } = useAuth();
  const handleSocialLogin = (media) => {
    console.log("social");
    media()
      .then(() => {
        toast.success("Google Login successful");
        navigate('/')
      })
      .catch((err) => {
        toast.error(err.message);
        console.log("google", err);
      });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-around">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-neutral btn-sm">
          Google
        </button>
        <button
          onClick={() => handleSocialLogin("githubLogin")}
          className="btn btn-neutral btn-sm">
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
