import "./index.scss";
import { ImUser } from "react-icons/im";
import { useEffect, useState } from "react";
import { PopFrame } from "@/components/layouts/Box";
import { QUERYME } from "@/lib/gql";
import { useQuery } from "@apollo/client";
const PlayerInfo = () => {
  return <div className="infoContainer">this is 个人信息框</div>;
};

const Avatar = () => {
  // 获得根号2
  const sqrt2 = Math.sqrt(2).toString();
  document.documentElement.style.setProperty("--sqrt2", sqrt2);

  const { data} = useQuery(QUERYME);
  useEffect(() => {
    console.log(data)
  }, []);
  const [showCard, setShowCard] = useState(false);

  const handleClose = () => {
    setShowCard(false);
  };

  return (
    <>
      <div className="avatar">
        <div className="big-avatar">
          <div className="sm-avatar"></div>
        </div>
        <div className="name">你的mingzi</div>
        <div className="btn-avatar">
          <button
            onClick={
              showCard ? () => setShowCard(false) : () => setShowCard(true)
            }
          >
            <ImUser
              style={{
                fontSize: 30,
                transform: "rotate(-45deg) translateY(-0.15rem)",
              }}
              color="#915554"
            />
          </button>
        </div>
      </div>
      {showCard && (
        <div className="infoBox">
          <PopFrame onClose={handleClose}>
            <h2>弹框标题</h2>
            <PlayerInfo />
          </PopFrame>
        </div>
      )}
    </>
  );
};

export default Avatar;
