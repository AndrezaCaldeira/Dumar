import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import banner from "../imagens/banner.jpg";
import { bottom } from "@popperjs/core";

const RodaPe = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
      class="align-items-center"
    >
      <img
        src={banner}
        alt="banner"
        style={{
          width: "80%",
          height: "auto",
          display: "block",
          margin: "auto",
        }}
      />
      <button
        style={{
          position: "absolute",
          top: "60%",
          left: "34%",
          transform: "translate(-50%, -50%)",
          padding: "10px",
          backgroundColor: " #0a376e",
          color: "white",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.href = "/QuemSomos";
        }}
      >
        Saiba Mais
      </button>
      <div className="direitos">
        <p
          style={{
            textAlign: "center",
            margin: "5% 0 0 0",
          }}
        >
          Copyright © 2023 Grupo Café Tech. Todos os direitos reservados
        </p>
      </div>
    </div>
  );
};
export default RodaPe;
