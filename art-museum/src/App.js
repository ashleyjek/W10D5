import GalleryNavigation from './components/GalleryNavigation';
import harvardArt from './data/harvardArt';
import GalleryView from './components/GalleryView';
import { Redirect, Route , Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Error from './components/error';



function App() {
  return (
    <div className="page-wrapper">
      <Switch>   
        <Route path="/error" component = {Error}/> 
        debugger

        <Route exact path="/">
          <GalleryNavigation galleries={harvardArt.records}/>
        </Route>

        <Route exact path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records}/>
        </Route>
        < Redirect to="/error" />
        
     </Switch>
    </div>
  );
}

export default App;
