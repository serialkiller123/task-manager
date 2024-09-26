# Task Manager

Task Manager is a full-stack web application built with Next.js, Prisma, and PostgreSQL. It allows users to efficiently manage their tasks while providing real-time weather information.

![Task Manager Screenshot](https://your-screenshot-url-here.com)

## Features

- User authentication (sign up, sign in, sign out)
- Create, read, update, and delete tasks
- Categorize tasks by status (pending, in-progress, completed)
- Real-time weather information
- Responsive design for mobile and desktop

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building the frontend and API routes
- [Prisma](https://www.prisma.io/) - ORM for database management
- [PostgreSQL](https://www.postgresql.org/) - Database
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type checking and enhanced developer experience

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   DATABASE_URL="your_postgresql_url_here"
   NEXTAUTH_SECRET="your_nextauth_secret_here" -> You can use openssl rand -base64 32 or https://generate-secret.vercel.app/32 to generate a random value.
   NEXTAUTH_URL="http://localhost:3000"  -> When deploying your site set the NEXTAUTH_URL environment variable to the canonical URL of the website. You do not need the NEXTAUTH_URL environment variable in Vercel.
   OPENWEATHER_API_KEY="your_openweather_api_key_here"
   ```

4. Set up the database:

   ```
   npx prisma db push
   ```

5. Run the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This application can be easily deployed on platforms like Vercel or Heroku. Make sure to set up your environment variables on your hosting platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Weather data provided by [OpenWeather](https://openweathermap.org/)
- Icons from [Heroicons](https://heroicons.com/)
