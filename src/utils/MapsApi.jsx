import {
	APIProvider,
	Map,
	AdvancedMarker,
	InfoWindow,
} from '@vis.gl/react-google-maps';
import { CONST_POSITION_GPS } from './constants';

function MapsApi() {
	return (
		<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<Map
				defaultCenter={CONST_POSITION_GPS}
				defaultZoom={14}
				gestureHandling={'greedy'}
				disableDefaultUI={true}
				mapId={'Perspectivas Map'}
			>
				<AdvancedMarker position={CONST_POSITION_GPS} />
			</Map>
		</APIProvider>
	);
}

export default MapsApi;
