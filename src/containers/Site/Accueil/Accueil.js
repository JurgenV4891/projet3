import React from "react";
import Titre from "../../../components/UI/Titres/TitreH1";
import Image from "react-bootstrap/Image";
import imgAccueil from "../../../assets/images/chateauS.jpg";

const accueil = (props) => (
  <>
    <Titre>Bienvenue sur le site des Ardennes</Titre>
    <p>
      Le site pour trouver tous les établissements publics dans les Ardennes
    </p>
    <Image src={imgAccueil} fluid thumbnail style={{ width: "100%" }} />
  </>
);

export default accueil;
