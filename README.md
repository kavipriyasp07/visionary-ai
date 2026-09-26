# Visionary AI – AI Creative Studio

Visionary AI is a web-based AI Creative Studio that helps users generate **stories and images from simple text prompts**.

The application provides a simple interface where users can enter their ideas, select options, and receive AI-generated creative content.

## Features

### AI Story Generator

* Enter a story idea using a text prompt.
* Select an optional genre such as Fantasy, Science Fiction, Mystery, Romance, Horror, Adventure, or Thriller.
* Generate a complete story using AI.
* Copy the generated story.
* Download the story as a text file.

### AI Image Generator

* Enter a description of the image you want to create.
* Generate an image using AI.
* View the generated image directly in the application.
* Download the generated image.

## Technologies Used

### Frontend

* **React** – Used to build the application interface using reusable components.
* **TypeScript** – Used to write structured and type-safe React code.
* **HTML** – Used for the basic structure of the web application.
* **CSS** – Used for styling and visual design.
* **Tailwind CSS** – Used to create the layout, spacing, colors, buttons, cards, and responsive design.

### Backend / AI Integration

* **Supabase** – Used to connect the frontend with backend functions that handle the story and image generation requests.
* **AI API / Model** – Used to generate stories and images based on the user's prompts.

### Development Tools

* **Git** – Used for version control.
* **GitHub** – Used to store and manage the project source code.
* **VS Code** – Used for development and code editing.

## How the Application Works

### Story Generation

```text
User enters story prompt
        ↓
User selects genre
        ↓
Frontend sends the request
        ↓
Supabase backend function
        ↓
AI generates the story
        ↓
Generated story is displayed
        ↓
User can copy or download it
```

### Image Generation

```text
User enters image prompt
        ↓
Frontend sends the request
        ↓
Supabase backend function
        ↓
AI generates the image
        ↓
Generated image is displayed
        ↓
User can download the image
```

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
│   │   └── ImageGenerator.tsx
│   │
│   ├── integrations/
│   │   └── supabase/
│   │
│   ├── pages/
│   │
│   └── main.tsx
│
├── supabase/
│   └── Backend functions
│
├── package.json
├── index.html
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/kavipriyasp07/visionary-ai.git
```

### 2. Open the project

```bash
cd visionary-ai
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm run dev
```

The application will run on the local development server provided by the terminal.

## Usage

1. Open the application.
2. Click **Start Creating**.
3. Choose either **Story Generator** or **Image Generator**.
4. Enter your prompt.
5. Generate the content.
6. View, copy, or download the generated result.

## Key React Concepts Used

* React functional components
* `useState` for managing user input and generated results
* Props for passing functions between components
* Event handling
* Conditional rendering
* API/backend function calls
* Reusable UI components

## Future Improvements

* Add user authentication.
* Save generated stories and images.
* Add more image and story generation options.
* Add generation history.
* Improve prompt handling.
* Deploy the application for public access.

## Author

**Kavipriya S.P.**

B.Tech Artificial Intelligence and Data Science
2023–2027
