import {fromJS} from 'immutable';
import MAP_STYLE from '../../data/map-style-basic-v8.json';;

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = fromJS({
  id: 'data',
  source: 'main_route',
  type: 'line',
  interactive: true,
   "layout": {
    "line-join": "round",
    "line-cap": "round"
  },
  "paint": {
    "line-color": "steelblue",
    "line-width": 5
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);