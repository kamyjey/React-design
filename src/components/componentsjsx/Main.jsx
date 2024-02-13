import "../../App.css";

import { FaReact } from "react-icons/fa";

const Main = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand react-neon" href="#"><FaReact fontSize="27px" />Reactjs(kj)</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Disabled</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Details
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Movie</a></li>
                                    <li><a class="dropdown-item" href="#">Dependencies</a></li>
                                    <li><a class="dropdown-item" href="#">Shair it</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section>
                <div className="mobile-head">
                    <div className="mobile-head-dark">
                        <h1
                            style={{
                                textAlign: "center",
                                color: "#fff",
                                marginTop: "160px"
                            }}
                            className="disappointed"
                        >Never be disappointed</h1>
                        <h1
                            style={{
                                textAlign: "center",
                                color: "#fff",
                                marginTop: "60px"
                            }}
                            className="disappointed">
                            Always believe in yourself
                        </h1>
                        <h1
                            style={{
                                textAlign: "center",
                                color: "#fff",
                                marginTop: "60px",
                                fontSize: "70px"
                            }}
                            className="disappointed">
                            <FaReact color="#21aeea" fontSize="70px" />
                            Reactjs(kj)
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;