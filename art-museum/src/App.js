import GalleryNavigation from './components/GalleryNavigation';
import harvardArt from './data/harvardArt';
import GalleryView from './components/GalleryView';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className="page-wrapper">
      <Route path="/">
        <GalleryNavigation galleries={harvardArt.records}/>
      </Route>

      <Route path="/galleries/:galleryId">
        <GalleryView galleries={harvardArt.records}/>
      </Route>
    </div>
  );
}

export default App;
