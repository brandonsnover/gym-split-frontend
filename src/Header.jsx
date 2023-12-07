import { useState } from "react";
import { Modal } from "./Modal";
import { Login } from "./Login";

export function Header() {
  const [isShowLoginVisible, setIsShowLoginVisible] = useState(false);

  const handleShowLogin = () => {
    setIsShowLoginVisible(true);
  };

  const handleCloseLogin = () => {
    setIsShowLoginVisible(false);
  };

  return (
    <header>
      <Modal show={isShowLoginVisible} onClose={handleCloseLogin}>
        <Login />
      </Modal>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a> |{" "}
        <a href="#" onClick={handleShowLogin}>
          Login
        </a>
      </nav>
    </header>
  );
}
