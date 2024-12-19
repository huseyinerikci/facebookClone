import "./profile.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                className="profileCoverImg"
                alt="cov-img"
              />
              <img
                src="assets/person/2.jpeg"
                className="profileUserImg"
                alt="pro-img"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">John Doe</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
