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
    <img
      src={Pangolin}
      alt="pangolin"
      className="Animals__image Animals__pangolin"
    />
    <img
      src={ChauveSouris}
      alt="chauve-souris"
      className="Animals__image Animals__chauveSouris"
    />
    <img src={Bovin} alt="bovin" className="Animals__image Animals__bovin" />
    <img
      src={Dromadaire}
      alt="dromadaire"
      className="Animals__image Animals__dromadaire"
    />
    <img src={Rat} alt="rat" className="Animals__image Animals__rat" />
    <img src={Alpaga} alt="alpaga" className="Animals__image Animals__alpaga" />
    <img
      src={Civette}
      alt="civette"
      className="Animals__image Animals__civette"
    />
  </div>
);

export default Animals;
