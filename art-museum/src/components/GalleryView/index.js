import { useParams } from "react-router-dom/cjs/react-router-dom";

function GalleryView(props) {
    const params = useParams();
    const galleryId = params.galleryId;
    
    const gallery = props.galleries.find(record => {
        return galleryId === record.gallerynumber;
    });

    return (
        <>
            <h1>Hello from GalleryView</h1>
            <h2>{gallery.name}</h2>
        </>
    )
}

export default GalleryView;