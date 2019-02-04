import {combineReducers} from 'redux'
import bindState from "./utils/bindState";

import TaxonomiesReducer from "./core/Taxonomies/TaxonomiesReducer";
import SearchGameReducer from "./componentes/Games/GamesFilterBarReducer";
import GamesList from "./componentes/Games/GamesListReducer";
import GameDetails from "./views/Game/GameDetailsReducer";
import Plataforma from "./views/Plataforma/PlataformaReducer";
import HomeReducer from "./views/Home/HomeReducer";

const AppReducer = combineReducers({
  home: HomeReducer,
  search: SearchGameReducer,
  games: GamesList,
  gameSelected: GameDetails,
  plataformaSelected: Plataforma,
  taxonomies: TaxonomiesReducer
})

export default AppReducer