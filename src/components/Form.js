import React from "react";

const Form = (props) => {
  const handleNameChange = (event) => {
    const value = event.target.value;
    props.setName(value);
    console.log(event.target);
  };

  const handleMailChange = (event) => {
    const value = event.target.value;
    props.setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    props.setPassword(value);
  };

  const handlePasswordCheck = (event) => {
    const value = event.target.value;
    props.setPasswordCheck(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!props.name || !props.email || !props.password) {
      alert("Veuillez compléter le formulaire");
    } else if (props.password !== props.check) {
      alert("Vos deux mots de passe ne sont pas identiques");
    } else if (props.password === props.check) {
      props.setIsRegistered(true);
      props.setName("");
      props.setEmail("");
      props.setPassword("");
      props.setPasswordCheck("");
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <div>
      <form className="display" onSubmit={handleSubmit}>
        <div className="setTitle">
          <h3>Identité</h3>
          <input
            placeholder="Entrez votre Nom/Prénom"
            type="text"
            name="userName"
            required
            value={props.name}
            onChange={handleNameChange}
          ></input>
        </div>

        <div className="setTitle">
          <h3>Email</h3>
          <input
            placeholder="Entrez votre email"
            name="userEmail"
            type="text"
            required
            value={props.email}
            onChange={handleMailChange}
          ></input>
        </div>
        <div className="setTitle">
          <h3>Mot de passe</h3>
          <input
            placeholder="Définissez votre mot de passe"
            type="password"
            name="userPassword"
            required
            value={props.password}
            onChange={handlePasswordChange}
          ></input>{" "}
        </div>

        <div className="setTitle">
          <h3>Confirmation</h3>
          <input
            placeholder="Confirmez votre mot de passe"
            type="password"
            name="userPasswordCheck"
            required
            value={props.check}
            onChange={handlePasswordCheck}
          ></input>
        </div>

        <input
          className="submitButton"
          type="submit"
          value="Inscription"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
