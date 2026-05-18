# SF Airbnb Listings

Browse San Francisco Airbnb listings with host info, amenities, 
and map links - built with vanilla JS and Bootstrap.

## 🌐 Live Demo
[View the live page](https://Fahertyk-NU.github.io/sf-airbnb-listings/)

## About
A simple example of dynamically loading and displaying data using 
JavaScript fetch and async/await, built as part of a web development 
course exercise.

## ✨ Features
-  **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
-  **Fast Loading** - Optimized performance with efficient data handling
-  **Modern UI** - Clean, professional interface using Bootstrap components
-  **Real Data** - Displays actual Airbnb listings from San Francisco
-  **Map Integration** - Click any listing image to view its location on OpenStreetMap

## 🛠️ Technologies
- **HTML** - Page structure and layout
- **CSS** - Custom styling and hover effects
- **JavaScript** - Dynamic data loading with fetch and async/await
- **JSON** - Airbnb listings data source
- **Bootstrap 5** - Responsive grid and UI components

## Development Tools
- **ESLint** - JavaScript linting and code quality
- **Prettier** - Code formatting
- **Jest** - JavaScript testing

## 📦 Installation & Usage

### Quick Start

1. **Clone the repository:**
```bash
   git clone https://github.com/Fahertyk-NU/sf-airbnb-listings.git
   cd sf-airbnb-listings
```

2. **Install dependencies (for development):**
```bash
   npm install
```

3. **Open the application:**
   - Use a local server for better development experience:
```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js
   npx http-server
```

4. **Navigate to the application:**
   - Open your browser and go to `http://localhost:8000`

### Browser Requirements
- Modern web browser with ES6 support
- JavaScript enabled

## 📁 Project Structure
sf-airbnb-listings/
├── index.html              # Main application page
├── css/
│   └── main.css            # Custom styles
├── js/
│   └── main.js             # Main JavaScript logic
├── airbnb_sf_listings_500.json  # Sample Airbnb data
├── package.json            # Project dependencies and scripts
└── .eslintrc.js            # ESLint configuration

## 📊 Data Source

The application uses a dataset of 500 real Airbnb listings from San Francisco, including:
- Listing details (name, description, price)
- Host information
- Location data
- Amenities and features
- Photos and ratings

## 🚀 Future Enhancements
-  Search and filtering functionality
-  Interactive map integration
-  Data visualization charts
-  API integration for live data
-  Local storage for favorites

## 👤 Author

**Kaylee Faherty**
-  GitHub: [@Fahertyk-NU](https://github.com/Fahertyk-NU)

## 📚 Academic Reference

This project was created as part of the **Web Development Course** at Northeastern University

- 📚 **Course:** Web Development
- 🏛️ **Institution:** Northeastern University
- 🎓 **Instructor:** John Alexis Guerra Gomez

## AI Usage

This README was generated using Claude Sonnet 4.

**Prompt:**
I want you to think as a full stack engineer with a lot of experience
in JavaScript and help me create a README file for this project which
is just a simple example on how to load Airbnb listings using JavaScript
and you can follow this guide that was provided for the class
https://johnguerra.co/lectures/webDevelopment_fall2025/04_Bootstrap/#/4/6/6

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
