import React, { useState } from "react";
import "./App.css";

// Import composants
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import StepTwo from "./components/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setPasswordCheck] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <div>
            {isRegistered === true ? (
              <StepTwo
                name={name}
                email={email}
                password={password}
                setIsRegistered={setIsRegistered}
              />
            ) : (
              <Form
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                check={check}
                setPasswordCheck={setPasswordCheck}
                isRegistered={isRegistered}
                setIsRegistered={setIsRegistered}
              />
            )}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
