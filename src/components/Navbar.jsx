import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

import logo1 from "../imagens/logo1.png";
import logo2 from "../imagens/logo2.png";
import styles from "./Navbar.module.css";

import {IoSearch, IoCartOutline, IoPersonSharp} from "react-icons/io5";



function Navbar() {
  return (
    <div className={styles["nav-bar grid-caixa"]}>
      <nav class="navbar navbar-light bg-light ">
        <a class="navbar-brand" href="#">
          <div className="logos" class="grid text-center mx-4">
            <img src={logo1} className={styles["img-logo1"]} alt="DUMAR" />
            <img src={logo2} className={styles["img-logo2"]} alt="DUMAR" />
          </div>
        </a>

        <nav>
          <div className={styles.pesquisar}> 
            <form>
              <input
                type="search"
                placeholder="Pesquisar"
                aria-label="Search"
              />
              <button type="submit">
                <IoSearch/>
              </button>
            </form>
          </div>
        </nav>

        <div className={styles["pessoa-carro"]}>
          <button
            type="button"
            className={styles["entrar"]}
          >
            <IoPersonSharp/>
            Entrar
          </button>

          <button
            type="button"
            class="btn-secondary btn-sm"
            className={styles["carrinho"]}
          >
           <IoCartOutline/>
          </button>
        </div>
      </nav>

      <nav className={styles["menu"]}>
        <ul>
            <li>
                <Link to="/quemSomos">Quem somos</Link>
            </li>
            <li>
            <Link to="/contato">Contato</Link> 
            </li>
            <li></li>
            <Link to="/consumoConsciente">Consumo Consciente</Link>
            <li>
    <Dropdown>
      <Dropdown.Toggle variant="action" id="dropdown-basic" className={styles["categoria"]}>
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Peixe</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Crustáceos</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Moluscos</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </li>
        </ul>

      </nav>

     
    </div>
  );
}
export default Navbar;




