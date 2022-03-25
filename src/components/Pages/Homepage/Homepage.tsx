import "./Homepage.scss";

const HomePage = () => (
  <div className="Homepage">
    <div className="Homepage__left">
      <div className="Homepage__title">We eat what we get</div>
      <div className="Homepage__description">
        <p className="Homepage__paragraph">
          A zoonosis is an infectious disease that has jumped from a non-human
          animal to humans. Zoonotic pathogens may be bacterial, viral or
          parasitic, or may involve unconventional agents and can spread to
          humans through direct contact or through food, water or the
          environment. They represent a major public health problem around the
          world due to our close relationship with animals in agriculture, as
          companions and in the natural environment. Zoonoses can also cause
          disruptions in the production and trade of animal products for food
          and other uses.
        </p>
        <p className="Homepage__paragraph">
          Zoonoses comprise a large percentage of all newly identified
          infectious diseases as well as many existing ones. Some diseases, such
          as HIV, begin as a zoonosis but later mutate into human-only strains.
          Other zoonoses can cause recurring disease outbreaks, such as Ebola
          virus disease and salmonellosis. Still others, such as the novel
          coronavirus that causes COVID-19, have the potential to cause global
          pandemics{" "}
        </p>
        <a
          href="https://www.who.int/news-room/fact-sheets/detail/zoonoses"
          target="_blank"
          className="Homepage__externalLink"
        >
          (https://www.who.int/news-room/fact-sheets/detail/zoonoses)
        </a>
        .
      </div>

      <div className="Homepage__buyContainer">
        {">>"}
        <a href="#" className="Homepage__buyLink">
          Pre order your set of 7 plates now
        </a>
      </div>

      <div className="Homepage__infosContainer">
        <p className="Homepage__infosParagraph">75 € / 50 copies</p>
        <p className="Homepage__infosParagraph">
          (Hand made in Jingdezhen, China)
        </p>
        <p className="Homepage__infosParagraph">
          Estimated delivery: before the 5th wave
        </p>
      </div>
    </div>
  </div>
);

export default HomePage;
