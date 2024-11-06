# 🎬 Netflix GPT

Netflix GPT is a React-based web application that combines the familiar Netflix-style movie browsing experience with intelligent, AI-powered search and recommendations. The app integrates with the **TMDB API** to fetch real-time movie data and uses **Gemini GPT APIs** to deliver enhanced movie suggestions based on user preferences.

> **Note**: TMDB API may be restricted in certain regions (including India). If you experience issues accessing TMDB, please use a VPN or proxy to ensure seamless data fetching and app functionality.

---

## 🌟 Features

### 🚀 Project Setup & Configuration
- **React Initialization**: Built with `Create React App` to set up the foundational React project.
- **Tailwind CSS Integration**: Styled with Tailwind CSS for a clean, responsive look.
- **Environment Configuration**: `.env` files manage API keys and environment-specific settings for secure access.

### 🔐 Authentication
- **Sign Up & Login Forms**: User-friendly forms with validation for both sign-in and sign-up, managed via `useRef`.
- **Sign In/Sign Up API Integration**: Connects to an authentication API for handling user login and registration.
- **Session Management**: Redirects users based on authentication state, ensuring they are directed to the appropriate pages.
- **Logout Functionality**: Offers secure logout, clearing user data on sign-out.

### 👤 User Profile Management
- **Profile Update**: Users can update profile information directly within the app.
- **Display Fixes**: Optimized profile picture and display name rendering to improve user experience.
- **Auth State Optimization**: Unsubscribes from `onAuthStateChange` to boost app performance.

### 🎬 Movie Browsing & Data Fetching
- **TMDB API Integration**: Accesses TMDB's live database for "Now Playing," "Popular," and "Upcoming" movies.
- **Movie Categories**: Offers multiple browsing options, including Popular, Upcoming, and Now Playing movie lists.
- **TMDB CDN URL**: Uses TMDB’s CDN for high-quality and efficient image loading.
- **Custom Hooks**: Utilizes reusable hooks for fetching different movie categories, enhancing organization and performance.

### 🔄 State Management & Optimization
- **Redux Integration**: Manages global state across the app with Redux.
  - **User Slice**: Tracks user data and authentication.
  - **Movie Slice**: Handles movie data for efficient state updates.
  - **GPT Slice**: Manages GPT-based movie recommendations.
- **Memoization**: Reduces re-renders and improves app performance by caching repetitive calculations.

### 🧠 GPT-Powered Search & Recommendations
- **Gemini GPT API Integration**: AI-powered search feature that recommends movies based on user preferences.
- **GPT Search Page & Search Bar**: Dedicated page and component for AI-driven movie searching.
- **Multilingual Support**: Provides recommendations in multiple languages for a diverse user experience.
- **Reusable Components**: Utilizes a `MovieList` component to display GPT search results, enhancing code reusability.

### 📹 Interactive Movie Experience
- **Trailer Video Fetching**: Fetches and displays movie trailers with autoplay and mute settings for an immersive experience.
- **Main & Secondary Containers**: Organizes main featured content and secondary movie lists for streamlined browsing.
- **Responsive Design**: Fully responsive for an optimal experience on any device.

---

## 🧩 Architecture of the App

- **Sign In/Sign Up Page**
  - Contains user-friendly forms for signing in and signing up
  - Redirects authenticated users to the Browse page

- **Browse Page** (for authenticated users)
  - Header with navigation and profile options
  - Main Movie Section featuring:
    - Trailer, Title, and Description of highlighted content
    - Suggested Movies in list format

- **Netflix-GPT Page**
  - AI-Powered Search Bar for customized movie recommendations
  - Displays suggestions based on user inputs and preferences

---

## 🛠️ Technologies Used
- **React**: Core framework for building the app
- **Tailwind CSS**: Provides styling for a modern, responsive design
- **Redux**: Manages global state across the application
- **TMDB API**: Provides real-time movie data
- **Gemini GPT API**: Powers AI-driven search and recommendations
- **YouTube Embed**: Integrates movie trailers for a richer user experience

---
# 🎬 Netflix GPT

Netflix GPT is a React-based web application that combines the familiar Netflix-style movie browsing experience with intelligent, AI-powered search and recommendations. The app integrates with the **TMDB API** to fetch real-time movie data and uses **Gemini GPT APIs** to deliver enhanced movie suggestions based on user preferences.

> **Note**: TMDB API may be restricted in certain regions (including India). If you experience issues accessing TMDB, please use a VPN or proxy to ensure seamless data fetching and app functionality.

---

## 🌟 Features

### 🚀 Project Setup & Configuration
- **React Initialization**: Built with `Create React App` to set up the foundational React project.
- **Tailwind CSS Integration**: Styled with Tailwind CSS for a clean, responsive look.
- **Environment Configuration**: `.env` files manage API keys and environment-specific settings for secure access.

### 🔐 Authentication
- **Sign Up & Login Forms**: User-friendly forms with validation for both sign-in and sign-up, managed via `useRef`.
- **Sign In/Sign Up API Integration**: Connects to an authentication API for handling user login and registration.
- **Session Management**: Redirects users based on authentication state, ensuring they are directed to the appropriate pages.
- **Logout Functionality**: Offers secure logout, clearing user data on sign-out.

### 👤 User Profile Management
- **Profile Update**: Users can update profile information directly within the app.
- **Display Fixes**: Optimized profile picture and display name rendering to improve user experience.
- **Auth State Optimization**: Unsubscribes from `onAuthStateChange` to boost app performance.

### 🎬 Movie Browsing & Data Fetching
- **TMDB API Integration**: Accesses TMDB's live database for "Now Playing," "Popular," and "Upcoming" movies.
- **Movie Categories**: Offers multiple browsing options, including Popular, Upcoming, and Now Playing movie lists.
- **TMDB CDN URL**: Uses TMDB’s CDN for high-quality and efficient image loading.
- **Custom Hooks**: Utilizes reusable hooks for fetching different movie categories, enhancing organization and performance.

### 🔄 State Management & Optimization
- **Redux Integration**: Manages global state across the app with Redux.
  - **User Slice**: Tracks user data and authentication.
  - **Movie Slice**: Handles movie data for efficient state updates.
  - **GPT Slice**: Manages GPT-based movie recommendations.
- **Memoization**: Reduces re-renders and improves app performance by caching repetitive calculations.

### 🧠 GPT-Powered Search & Recommendations
- **Gemini GPT API Integration**: AI-powered search feature that recommends movies based on user preferences.
- **GPT Search Page & Search Bar**: Dedicated page and component for AI-driven movie searching.
- **Multilingual Support**: Provides recommendations in multiple languages for a diverse user experience.
- **Reusable Components**: Utilizes a `MovieList` component to display GPT search results, enhancing code reusability.

### 📹 Interactive Movie Experience
- **Trailer Video Fetching**: Fetches and displays movie trailers with autoplay and mute settings for an immersive experience.
- **Main & Secondary Containers**: Organizes main featured content and secondary movie lists for streamlined browsing.
- **Responsive Design**: Fully responsive for an optimal experience on any device.

---

## 🧩 Architecture of the App

- **Sign In/Sign Up Page**
  - Contains user-friendly forms for signing in and signing up
  - Redirects authenticated users to the Browse page

- **Browse Page** (for authenticated users)
  - Header with navigation and profile options
  - Main Movie Section featuring:
    - Trailer, Title, and Description of highlighted content
    - Suggested Movies in list format

- **Netflix-GPT Page**
  - AI-Powered Search Bar for customized movie recommendations
  - Displays suggestions based on user inputs and preferences

---

## 🛠️ Technologies Used
- **React**: Core framework for building the app
- **Tailwind CSS**: Provides styling for a modern, responsive design
- **Redux**: Manages global state across the application
- **TMDB API**: Provides real-time movie data
- **Gemini GPT API**: Powers AI-driven search and recommendations
- **YouTube Embed**: Integrates movie trailers for a richer user experience

---

## 🚀 Installation & Setup

To get started with Netflix GPT on your local machine, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repo-url>
2. **Navigate to the project Directory**:
     ```bash
    cd netflix-gpt
3. **Install Dependency**:
      ```bash
    npm install

3. **Environment Configuration**:
      ```bash
   REACT_APP_TMDB_API_KEY=<Your_TMDB_API_Key>
   REACT_APP_GEMINI_GPT_API_KEY=<Your_Gemini_GPT_API_Key>

3. **Start the Development Server**:
      ```bash
    npm start

---