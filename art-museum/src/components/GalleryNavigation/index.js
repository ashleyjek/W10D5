import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './GalleryNavigation.css'

function GalleryNavigation(props) {
    // debugger

    const galleryList = props.galleries.map(gallery => {
        return(
            <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>
                {gallery.name}        
            </NavLink>
        );
    });

    return (
        <>
            <h1>Galleries</h1>
            <nav>
                {galleryList};
            </nav>
        </>
    )
}

export default GalleryNavigation;