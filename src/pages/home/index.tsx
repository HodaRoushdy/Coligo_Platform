// import Button from "../../components/Button";

import AuthBtn from "../../components/auth-btn";

const styles = {
  fullScreen: {
    backgroundImage:
      "url(https://images.pexels.com/photos/7972506/pexels-photo-7972506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
};

const Home = () => {
    return (
      <div className="fullScreen flex items-center h-screen justify-center" style={styles.fullScreen}>
          <AuthBtn />
      </div>
    );
};
export default Home;
