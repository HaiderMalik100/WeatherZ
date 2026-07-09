export const getAuroraColors = (condition) => {
  const colors = {
    Clear: ['#00ff88', '#40c4ff', '#b388ff'],
    Clouds: ['#5c6bc0', '#42a5f5', '#7e57c2'],
    Rain: ['#0277bd', '#0288d1', '#039be5'],
    Drizzle: ['#0288d1', '#03a9f4', '#4fc3f7'],
    Thunderstorm: ['#311b92', '#512da8', '#673ab7'],
    Snow: ['#e1f5fe', '#b3e5fc', '#81d4fa'],
    Mist: ['#78909c', '#90a4ae', '#b0bec5'],
    Fog: ['#78909c', '#90a4ae', '#b0bec5'],
    Haze: ['#ff8a65', '#ff7043', '#ff5722']
  };
  return colors[condition] || colors.Clear;
};

export const formatTemp = (temp) => Math.round(temp);

export const getWindDirection = (deg) => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return directions[Math.round(deg / 45) % 8];
};