import Footer from "./Footer";
import NavBar from "./NavBar";

const WhoWeArePage = () => {
    return (
        <>
        <NavBar />
        <div className="who-we-are-container">
            <div className="who-we-are-content">
                <h1>¿Quiénes somos?</h1>
                <p>
                    Somos una empresa dedicada a proporcionar las mejores experiencias
                    para los amantes de la lectura. Fundada en el año 2020, nuestra
                    misión es conectar a lectores apasionados con libros que
                    transforman vidas.
                </p>
                <p>
                    Todo comenzó con un pequeño puesto de libros usados en un parque
                    local, pero rápidamente nos dimos cuenta de que había un gran
                    deseo de historias que inspiraran, educaran y entretuvieran. Así
                    nació nuestra plataforma, un espacio en línea donde puedes
                    encontrar desde los clásicos más amados hasta los títulos más
                    novedosos.
                </p>
                <p>
                    Hoy en día, seguimos trabajando con la misma pasión que nos
                    impulsó desde el principio, ofreciendo un catálogo diverso y un
                    servicio excepcional. ¡Gracias por ser parte de nuestra historia!
                </p>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default WhoWeArePage;
