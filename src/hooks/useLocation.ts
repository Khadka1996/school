"use client";

import { useState } from "react";

type LocationState = {
  latitude: number | null;
  longitude: number | null;
  loading: boolean;
  error: string | null;
};

export function useLocation() {
  const [state, setState] = useState<LocationState>({
    latitude: null,
    longitude: null,
    loading: false,
    error: null,
  });

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setState((prev) => ({
        ...prev,
        error: "Geolocation is not supported on this device.",
      }));
      return;
    }

    setState((prev) => ({ ...prev, loading: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          loading: false,
          error: null,
        });
      },
      (err) => {
        let message = "Unable to fetch your location.";
        if (err.code === err.PERMISSION_DENIED) {
          message = "Location permission was denied. You can still continue without sharing location.";
        }
        if (err.code === err.TIMEOUT) {
          message = "Location request timed out. Please try again.";
        }
        setState((prev) => ({ ...prev, loading: false, error: message }));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      },
    );
  };

  const mapsLink =
    state.latitude && state.longitude
      ? `https://maps.google.com/?q=${state.latitude},${state.longitude}`
      : null;

  return { ...state, mapsLink, requestLocation };
}
