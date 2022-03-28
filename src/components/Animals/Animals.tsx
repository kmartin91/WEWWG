import Pangolin from "../../assets/images/001_pangolin.png";
import ChauveSouris from "../../assets/images/002_chauvesouris.png";
import Bovin from "../../assets/images/003_bovin.png";
import Dromadaire from "../../assets/images/004_dromadaire.png";
import Rat from "../../assets/images/005_rat.png";
import Alpaga from "../../assets/images/006_alpaga.png";
import Civette from "../../assets/images/007_civette.png";

import "./Animals.scss";
const Animals = () => (
  <div className="Animals">
    <div className="Animals__pangolin Animals__imageContainer">
      <img src={Pangolin} alt="pangolin" className="Animals__image" />
    </div>
    <div className="Animals__chauveSouris Animals__imageContainer">
      <img src={ChauveSouris} alt="chauve-souris" className="Animals__image" />
    </div>
    <div className="Animals__bovin Animals__imageContainer">
      <img src={Bovin} alt="bovin" className="Animals__image" />
    </div>
    <div className="Animals__dromadaire Animals__imageContainer">
      <img src={Dromadaire} alt="dromadaire" className="Animals__image" />
    </div>
    <div className="Animals__rat Animals__imageContainer">
      <img src={Rat} alt="rat" className="Animals__image" />
    </div>
    <div className="Animals__alpaga Animals__imageContainer">
      <img src={Alpaga} alt="alpaga" className="Animals__image" />
    </div>
    <div className="Animals__civette Animals__imageContainer">
      <img src={Civette} alt="civette" className="Animals__image" />
    </div>
  </div>
);

export default Animals;
