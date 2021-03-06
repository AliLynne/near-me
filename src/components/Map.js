import GoogleMapReact from "google-map-react";

const Component = () => {
  return <div></div>;
};

const Map = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.0,
    },
    zoom: 11,
  };
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Component lat={59.955413} lng={30.337844} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
