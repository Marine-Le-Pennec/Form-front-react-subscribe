import React from "react";

function StepTwo(props) {
  return (
    <div className="steptwo">
      <h1>Récapitulatif</h1>
      <div className="results">
        <span>Name:{props.name}</span>
        <span>Email:{props.email}</span>
        <span>Password:{props.password}</span>
        <button
          type="button"
          value="Précédent"
          onClick={() => {
            props.setIsRegistered(false);
          }}
        >
          Retour au formulaire
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
