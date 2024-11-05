# 🎬 Netflix GPT

Netflix GPT is a React-based web application that combines the familiar Netflix-style movie browsing experience with intelligent, AI-powered search and recommendations. The app integrates with the TMDB API to fetch real-time movie data and uses Gemini GPT APIs to deliver enhanced movie suggestions based on user preferences.

---

## 🌟 Features

### 🚀 Project Setup & Configuration
- **React Initialization**: Started with `Create React App` to set up the foundational React project.
- **Tailwind CSS Integration**: Applied Tailwind CSS for clean, responsive styling.
- **Environment Configuration**: Utilized `.env` files for secure and easy management of API keys and environment-specific settings.

### 🔐 Authentication
- **Sign Up & Login Forms**: User-friendly, validated forms for both sign-in and sign-up with `useRef` for input handling.
- **Sign In/Sign Up API Integration**: Authentication API integrated to manage user login and registration.
- **Session Management**: Automatic redirection based on authentication state (e.g., redirecting to the homepage when not logged in).
- **Logout Functionality**: Secure logout option, clearing user data upon signing out.

### 👤 User Profile Management
- **Profile Update**: Users can update their profile information directly.
- **Display Fixes**: Bugfixes to ensure proper display of profile picture and display name.
- **Auth State Optimization**: Unsubscribed from the `onAuthStateChange` callback for better app performance.

### 🎬 Movie Browsing & Data Fetching
- **TMDB API Integration**: Accessed TMDB's "Now Playing" movies list and other categories to populate the app.
- **Movie Categories**: Includes options for different movie types like Popular, Upcoming, and Now Playing.
- **TMDB CDN URL**: Fast image loading for high-quality visuals.
- **Custom Hooks**: Reusable hooks for different movie types, improving code organization and performance.

### 🔄 State Management & Optimization
- **Redux Integration**: Used Redux for managing global state across the application.
  - **User Slice**: Manages user-related data and authentication.
  - **Movie Slice**: Stores movie data for seamless and efficient state updates.
  - **GPT Slice**: Handles GPT-powered movie recommendations.
- **Memoization**: Optimized re-renders to enhance app performance and reduce redundant calculations.

### 🧠 GPT-Powered Search & Recommendations
- **Gemini GPT API Integration**: AI-powered search feature to recommend movies based on user inputs.
- **GPT Search Page & Search Bar**: Separate page and component for GPT-based movie searching.
- **Multilingual Support**: Offers search and recommendations in multiple languages.
- **Reusable Components**: Used the `MovieList` component to render GPT search results, promoting code reusability.

### 📹 Interactive Movie Experience
- **Trailer Video Fetching**: Fetched and displayed movie trailers, allowing autoplay and mute for an immersive experience.
- **Main & Secondary Containers**: Created a main container for featured content and a secondary container for movie lists.
- **Responsive Design**: Made the app fully responsive for a smooth experience on different devices.

---

## 🧩 Architecture of the App

- **Sign In/Sign Up Page**
  - Sign In/Sign Up Forms
  - Redirects authenticated users to the Browse page

- **Browse Page** (for authenticated users)
  - Header with navigation
  - Main Movie Section with:
    - Trailer, Title, and Description
    - Suggested Movies (displayed in list format)

- **Netflix-GPT Page**
  - GPT-Powered Search Bar
  - AI-driven Movie Suggestions

---

## 🛠️ Technologies Used
- **React**: Core framework for building the app
- **Tailwind CSS**: Styling for a modern, responsive design
- **Redux**: State management solution
- **TMDB API**: Real-time movie data
- **Gemini GPT API**: AI-powered search and recommendations
- **YouTube Embed**: For movie trailers

---

