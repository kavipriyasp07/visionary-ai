# Visionary AI – AI Creative Studio

Visionary AI is a web-based AI Creative Studio that allows users to generate **stories and images from text prompts** through a simple and interactive interface.

The application provides separate tools for AI-powered story generation and image generation, along with options to copy or download the generated content.

## Features

### ✍️ AI Story Generator

* Generate stories from text prompts.
* Select a story genre.
* Supported genres:

  * Fantasy
  * Science Fiction
  * Mystery
  * Romance
  * Horror
  * Adventure
  * Thriller
* Display the generated story directly in the application.
* Copy the generated story to the clipboard.
* Download the generated story as a `.txt` file.

### 🎨 AI Image Generator

* Generate images from text prompts.
* Display the generated image in the application.
* Download the generated image.

### 💻 User Interface

* Responsive and modern interface.
* Interactive Story and Image Generator sections.
* Loading states while content is being generated.
* Error handling for failed requests.
* Reusable React components.

---

## Technologies Used

### Frontend

* **React** – Building the user interface using reusable components.
* **TypeScript** – Writing structured and type-safe application code.
* **HTML** – Structuring the web application.
* **CSS** – Styling the application.
* **Tailwind CSS** – Creating responsive layouts and UI styling.
* **React Router** – Handling application navigation.
* **Lucide React** – Providing interface icons.

### Backend & AI Integration

* **Supabase** – Used for backend Edge Functions and communication between the frontend and AI generation services.
* **AI Generation API** – Used for generating stories and images from user prompts.

### Development Tools

* **Vite** – Frontend development and build tool.
* **Git** – Version control.
* **GitHub** – Source code management.
* **VS Code** – Development environment.

---

## How It Works

### Story Generation

```text
User enters a story prompt
          ↓
User selects a genre
          ↓
React frontend sends the request
          ↓
Supabase Edge Function
          ↓
AI generation service
          ↓
Generated story returned
          ↓
Story displayed in the application
          ↓
User can copy or download the story
```

### Image Generation

```text
User enters an image prompt
          ↓
React frontend sends the request
          ↓
Supabase Edge Function
          ↓
AI image generation service
          ↓
Generated image returned
          ↓
Image displayed in the application
          ↓
User can download the image
```

---

## Project Structure

```text
visionary-ai/
│
├── public/
│   └── Public assets
│
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Studio.tsx
│   │   ├── StoryGenerator.tsx
│   │   ├── ImageGenerator.tsx
│   │   └── ui/
│   │
│   ├── integrations/
│   │   └── supabase/
│   │
│   ├── pages/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── supabase/
│   └── functions/
│       ├── generate-story/
│       └── generate-image/
│
├── package.json
├── package-lock.json
├── vite.config.ts
├── index.html
└── README.md
```

---

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/kavipriyasp07/visionary-ai.git
```

### 2. Navigate to the Project

```bash
cd visionary-ai
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The terminal will display a local development URL, usually:

```text
http://localhost:5173/
```

Open the URL in your browser.

---

## Usage

1. Open the application in your browser.
2. Click **Start Creating**.
3. Select **Story Generator** or **Image Generator**.
4. Enter your prompt.
5. Select a genre if using the Story Generator.
6. Click the generate button.
7. View the generated result.
8. Copy or download the generated content.

---

## Key React Concepts Used

This project demonstrates practical use of:

* React functional components
* React `useState`
* Props
* Event handling
* Conditional rendering
* Form and user-input handling
* Asynchronous API requests
* Backend function invocation
* Loading and error states
* Reusable UI components

---

## Future Improvements

* Add user authentication.
* Add generation history.
* Allow users to save generated stories and images.
* Add more customization options for image generation.
* Improve prompt handling.
* Add additional AI-powered creative tools.
* Deploy the application for public access.

---

## Author

**Kavipriya S.P.**

B.Tech Artificial Intelligence and Data Science
2023–2027

GitHub: https://github.com/kavipriyasp07
