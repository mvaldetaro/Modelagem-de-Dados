const INITIAL_STATE = {
  hasIntro: false,
  recentPodcasts: [],
  recentChannels: [],
  recentTrailers: [],
  recentNews: [],
  recentHero: [],
  recentGames: [],
  currentHeroPlataformas: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'RECENT_PODCASTS':
      return {
        ...state,
        recentPodcasts: action.payload
      }
    case 'RECENT_CHANNELS':
      return {
        ...state,
        recentChannels: action.payload
      }
    case 'RECENT_TRAILERS':
      return {
        ...state,
        recentTrailers: action.payload
      }
    case 'RECENT_NEWS':
      return {
        ...state,
        recentNews: action.payload
      }
    case 'RECENT_HERO':
      return {
        ...state,
        recentHero: action.payload
      }
    case 'RECENT_GAMES':
      return {
        ...state,
        recentGames: action.payload
      }
    default:
      return state
  }
}