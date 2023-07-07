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
            <h2> Look, but don't touch. Please select a gallery in the navigation bar</h2>
            <nav>
                {galleryList};
            </nav>
        </>
    )
}

export default GalleryNavigation;