import '../styles/NotificacionData.css';
import Menu from "../components/Menu";
import Barra from "../components/Barra";
import NotificacionData from "../components/NotificacionData";

const Notificacion = () => {
    return (
        <>
            <Menu />
            <Barra />
            <main className="main-content Barra-content">
            <NotificacionData></NotificacionData>
            </main>
        </>
    );
};

export default Notificacion;
