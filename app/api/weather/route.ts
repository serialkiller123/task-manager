import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json(
      { error: "City parameter is required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  console.log("API Key:", apiKey);

  if (!apiKey) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log("OpenWeatherMap API response:", data);

    if (response.ok) {
      return NextResponse.json(data);
    } else {
      console.error("OpenWeatherMap API error:", data);
      return NextResponse.json(
        { error: data.message },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Weather API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}
