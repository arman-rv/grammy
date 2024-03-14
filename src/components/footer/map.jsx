import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const Map = () => {
  const location = [36.587463754428796, 53.062701239530845];

  const customIcon = new icon({
    iconUrl: 'https://png.pngtree.com/png-clipart/20221107/ourmid/pngtree-red-location-pin-icon-design-with-white-combination-free-tranparent-background-png-image_6425747.png',
    iconSize: [48, 50],
  });

  return (
    <MapContainer center={location} zoom={13} className="h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={[36.587463754428796, 53.062701239530845]}
        icon={customIcon}
      ></Marker>
    </MapContainer>
  );
};

export { Map };