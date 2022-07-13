import React from "react";
const {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayCloudyHigh,
  WiCloud,
  WiCloudy,
  WiFog,
  WiRainMix,
  WiRain,
  WiThunderstorm,
  WiDaySprinkle,
  WiShowers,
  WiDaySleet,
  WiSleet,
  WiDaySleetStorm,
  WiSnowflakeCold,
  WiSnow,
  WiLightning
} = require("weather-icons-react");

interface IWeatherIconProps {
  value: number | null;
}

export default function WeatherIcon(props: IWeatherIconProps) {
  return (
    <div className="text-2xl">
      {props.value === 1 && <WiDaySunny/>}
      {props.value === 2 && <WiDaySunnyOvercast/>}
      {props.value === 3 && <WiDayCloudyHigh/>}
      {props.value === 4 && <WiDayCloudyHigh/>}
      {props.value === 5 && <WiCloud/>}
      {props.value === 6 && <WiCloudy/>}
      {props.value === 7 && <WiFog/>}
      {props.value === 8 && <WiDaySprinkle/>}
      {props.value === 9 && <WiShowers/>}
      {props.value === 10 && <WiShowers/>}
      {props.value === 11 && <WiThunderstorm/>}
      {props.value === 12 && <WiDaySleet/>}
      {props.value === 13 && <WiSleet/>}
      {props.value === 14 && <WiDaySleetStorm/>}
      {props.value === 15 && <WiSnowflakeCold/>}
      {props.value === 16 && <WiSnow/>}
      {props.value === 17 && <WiSnow/>}
      {props.value === 18 && <WiRainMix/>}
      {props.value === 19 && <WiRain/>}
      {props.value === 20 && <WiRain/>}
      {props.value === 21 && <WiLightning/>}
      {props.value === 22 && <WiDaySleet/>}
      {props.value === 23 && <WiSleet/>}
      {props.value === 24 && <WiDaySleetStorm/>}
      {props.value === 25 && <WiSnowflakeCold/>}
      {props.value === 26 && <WiSnow/>}
      {props.value === 27 && <WiSnow/>}
      {props.value === null && <div className="m-0 text-xs">N/A</div>}
    </div>
  );
}
