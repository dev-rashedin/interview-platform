# BytePrep AI

**BytePrep AI** is an AI-powered interview preparation platform designed for developers and tech professionals. It provides a **complete interview practice ecosystem** including **mock interviews with voice AI, coding challenges, resume review, and an extensive interview question library**. The question library is built using **MDX** for easy maintenance and scalability.

---

## Features

### AI-Powered Services

* **Mock Interviews (Voice AI)**: Practice technical and behavioral interviews with an AI interviewer.
* **Coding Practice**: Solve coding problems with instant AI-powered feedback.
* **Resume Review**: Get AI-driven suggestions to improve your resume for technical roles.

### Interview Question Library

* Written in **MDX** for flexibility and rich content.
* Categorized by topics: **HTML, CSS, Tailwind, JavaScript, Python, Go, DSA**, etc.
* Dynamically rendered using **`next-mdx-remote`**.
* Provides structured, easy-to-read content for self-paced learning.

### Tech Stack

* **Frontend & Backend**: Next.js (App Router)
* **Database**: Prisma ORM
* **AI Integrations**: OpenAI API for chat, voice, and code analysis
* **Styling**: Tailwind CSS
* **Documentation & Content**: MDX + `next-mdx-remote`
* **Version Control**: Git

---

## Project Structure

```
/app
  /api
  /dashboard
  /practice
  /docs/[...slug]/page.tsx
  layout.tsx
  page.tsx

/docs
  index.mdx
  guide.mdx
  /html
  /css
  /tailwind
  /js
  /python
  /golang
  /dsa

/components
  /ui
  /interview
  /coding
  /resume

/lib
  ai/
  prisma.ts
  auth.ts
  utils.ts

/prisma
  schema.prisma

/public
```

---

## Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/byteprep-ai.git
cd byteprep-ai
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup Prisma**

```bash
npx prisma migrate dev
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

---

## How MDX Question Library Works

* Store questions in `/docs` by topic and difficulty.
* Dynamic route `/docs/[...slug]` renders MDX files using `next-mdx-remote`.
* Easy to expand with new languages/topics.

---

## Why BytePrep AI?

* **Full-stack experience**: Next.js + Prisma + AI integrations.
* **Real-world utility**: Simulates actual interview scenarios.
* **Scalable content**: MDX library grows with topics.
* **Recruiter-friendly**: Highlights backend, AI, and frontend skills in one project.

---

## Future Improvements

* Add **user authentication & progress tracking**.
* Enable **custom AI prompt tuning** for personalized interview feedback.
* Integrate **code execution sandbox** for live coding challenges.
* Add **leaderboard or analytics** for practice sessions.

---

## License

MIT License
