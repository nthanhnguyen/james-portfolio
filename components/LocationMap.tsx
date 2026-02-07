import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useTheme } from "../context/theme-context";
import { BiCurrentLocation } from "react-icons/bi";

// Custom marker icon using me.png
const createCustomIcon = (isDark: boolean) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 4px solid ${isDark ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 1)"};
        box-shadow: 0 4px 24px ${isDark ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.2)"};
        overflow: hidden;
        background: ${isDark ? "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)" : "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)"};
      ">
        <img
          src="/me-mac.png"
          alt="Location marker"
          style="width: 100%; height: 100%; object-fit: contain;"
        />
      </div>
    `,
    iconSize: [80, 80],
    iconAnchor: [40, 40],
  });
};

// Reset location button component
const ResetLocationButton: React.FC<{
  center: [number, number];
  zoom: number;
}> = ({ center, zoom }) => {
  const map = useMap();

  const handleReset = () => {
    map.flyTo(center, zoom, {
      duration: 1.5,
    });
  };

  return (
    <button
      onClick={handleReset}
      className="map-reset-btn"
      title="Reset to initial location"
      style={{
        position: "absolute",
        bottom: "90px",
        right: "10px",
        zIndex: 1000,
      }}
    >
      <BiCurrentLocation size={18} />
    </button>
  );
};

interface LocationMapProps {
  center?: [number, number];
  zoom?: number;
}

const LocationMap: React.FC<LocationMapProps> = ({
  // Ho Chi Minh City University of Technology and Education (HCMUTE)
  center = [10.8500, 106.7719],
  zoom = 15,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const customIcon = createCustomIcon(isDark);

  // CartoDB tiles (free, no API key required)
  const tileUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

  return (
    <div
      className={`w-full h-full min-h-[350px] md:min-h-[400px] map-container ${isDark ? "map-dark" : "map-light"}`}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        zoomControl={false}
        scrollWheelZoom={true}
        attributionControl={false}
        style={{ height: "100%", width: "100%", borderRadius: "1.5rem" }}
      >
        <TileLayer url={tileUrl} />
        <ZoomControl position="bottomright" />
        <Marker position={center} icon={customIcon} />
        <ResetLocationButton center={center} zoom={zoom} />
      </MapContainer>
    </div>
  );
};

export default LocationMap;
