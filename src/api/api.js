import config from "./config";

export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": config.apiKey,
        "X-RapidAPI-Host": config.apiHost,
      },
    }
  );
  if (!response.ok) {
    throw new Error("City not found");
  }
  return response.json();
};

export const fetchAstronomy = async (city, date) => {
  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${city}&dt=${date}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": config.apiKey,
        "X-RapidAPI-Host": config.apiHost,
      },
    }
  );
  if (!response.ok) {
    throw new Error("City not found");
  }
  return response.json();
};
