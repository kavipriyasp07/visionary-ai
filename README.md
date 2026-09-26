# Visionary AI — AI Creative Studio

Visionary AI is a web-based AI application that enables users to generate **stories and images from natural-language prompts** through an interactive and responsive interface.

The application integrates a React-based frontend with backend functions to process user requests and return AI-generated creative content.

## Features

### AI Story Generation

* Generate stories from user-provided prompts.
* Select from multiple genres including:

  * Fantasy
  * Science Fiction
  * Mystery
  * Romance
  * Horror
  * Adventure
  * Thriller
* Display generated stories within the application.
* Copy generated stories to the clipboard.
* Download generated stories as text files.

### AI Image Generation

* Generate images from text-based prompts.
* Display generated images within the application.
* Download generated images directly from the interface.

### Application Features

* Responsive user interface.
* Reusable React components.
* Input validation.
* Loading and error states.
* Asynchronous backend requests.
* Copy and download functionality.
* Tab-based navigation between story and image generation.

---

## Technology Stack

### Frontend

| Technology   | Purpose                           |
| ------------ | --------------------------------- |
| React        | Component-based user interface    |
| TypeScript   | Type-safe application development |
| HTML         | Application structure             |
| CSS          | Styling and presentation          |
| Tailwind CSS | Responsive UI styling             |
| React Router | Client-side navigation            |
| Lucide React | Interface icons                   |

### Backend and AI Integration

| Technology        | Purpose                                     |
| ----------------- | ------------------------------------------- |
| Supabase          | Backend Edge Functions and request handling |
| AI Generation API | Story and image generation                  |

### Development Tools

| Tool    | Purpose                           |
| ------- | --------------------------------- |
| Vite    | Development server and build tool |
| Git     | Version control                   |
| GitHub  | Source code management            |
| VS Code | Development environment           |

---

## Application Architecture

### Story Generation Flow

```text
User Input
    |
    v
Story Prompt + Genre
    |
    v
React Frontend
    |
    v
Supabase Edge Function
    |
    v
AI Generation Service
    |
    v
Generated Story
    |
    v
Display / Copy / Download
```

### Image Generation Flow

```text
User Input
    |
    v
Image Prompt
    |
    v
React Frontend
    |
    v
Supabase Edge Function
    |
    v
AI Image Generation Service
    |
    v
Generated Image
    |
    v
Display / Download
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
│       │   └── index.ts
│       │
│       └── generate-image/
│           └── index.ts
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

Install the following before running the project:

* Node.js
* npm
* Git

### Clone the Repository

```bash
git clone https://github.com/kavipriyasp07/visionary-ai.git
```

### Navigate to the Project Directory

```bash
cd visionary-ai
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The Vite development server will provide a local URL, typically:

```text
http://localhost:5173/
```

Open the URL in a web browser to access the application.

---

## Usage

1. Launch the application using the development server.
2. Select the Story Generator or Image Generator.
3. Enter a natural-language prompt.
4. Select a genre when generating a story.
5. Submit the request.
6. View the generated result.
7. Copy or download the generated content.

---

## React Concepts Demonstrated

This project demonstrates practical implementation of:

* Functional React components
* React Hooks, including `useState`
* Props and component communication
* Event handling
* Conditional rendering
* Form and user-input handling
* Asynchronous operations
* Backend function invocation
* Error handling
* Loading-state management
* Reusable UI components

---

## Future Enhancements

* User authentication and personalized accounts
* Generation history and saved content
* Additional story and image customization options
* Improved prompt processing
* Content management and organization
* Additional AI-powered creative features
* Production deployment

---

## Author

**Kavipriya S.P.**

B.Tech Artificial Intelligence and Data Science
2023–2027

GitHub: https://github.com/kavipriyasp07
