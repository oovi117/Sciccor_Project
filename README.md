Scissor - URL Shortener

Scissor is a simple URL shortening service that allows users to convert long URLs into shorter, more manageable links. It also provides features such as customizable slugs, QR code generation, basic analytics, and link history.

Features
URL Shortening: Users can paste a long URL and get a shortened URL that is easy to share.
Custom Slugs: Users can customize their shortened URL by providing a custom slug.
QR Code Generation: Automatically generate a QR code for the shortened URL.
Analytics: Track the number of clicks on each shortened URL.
Link History: View the history of URLs created by users

Setup Instructions

1. Clone the Repository
2. Install Dependencies
3. Set Up Environment Variables
4. Start the Server
5. Access the Application

API Endpoints:

\*POST /api/url/shorten
Description: Shortens a long URL. Accepts optional custom slug.
Request Body:{
"originalUrl": "https://example.com/long-url",
"customSlug": "custom-slug"
}

Response: {
"shortUrl": "http://localhost:3000/custom-slug",
"qrCode": "data:image/png;base64,..."
}

\*GET /api/url/history

Description: Retrieves the history of shortened URLs.
Response: Array of URLs created by the user.

Usage Guide
Shorten a URL:
Enter your long URL into the input field.
Optionally, provide a custom slug.
Click "Shorten URL" to generate a short link and a QR code.

View QR Code:
After shortening a URL, the QR code will be displayed. You can download and use it for promotions.
View Link History:

Access the /history route (not yet connected to the frontend) to view all previously created links.
Screenshots
Main Page:
