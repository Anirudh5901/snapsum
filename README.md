# SnapSummAI 📚

SnapSummAI is an intelligent PDF summarization tool that transforms lengthy documents into engaging, easy-to-read summaries using AI technology. Built with Next.js and powered by advanced natural language processing.

## ✨ Features

- 🚀 Instant PDF uploads and processing
- 🤖 AI-powered document summarization
- 📱 Responsive, modern UI design
- 📑 Interactive summary viewer with section navigation
- 🔒 Secure user authentication
- 💾 Cloud storage for summaries
- ⚡ Real-time processing status updates

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with TypeORM
- **Authentication**: Clerk
- **File Storage**: UploadThing
- **AI Processing**: LangChain
- **Styling**: Tailwind CSS, Shadcn UI

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/snapsum.git
cd snapsum
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Configure your environment variables:

```env
DATABASE_URL=your_postgresql_connection_string
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

5. Run the development server:

```bash
npm run dev
```

## 🌐 Usage

1. Sign in using your account
2. Upload a PDF file (max 20MB)
3. Wait for the AI to process and generate the summary
4. View your interactive summary with sectioned content
5. Navigate through different sections using the progress bar

## 📝 Features in Detail

- **Smart Summarization**: Automatically extracts key points and organizes them into sections
- **Progress Tracking**: Visual feedback during upload and processing
- **Interactive Viewer**: Easy navigation between summary sections
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Upload Limits**: Managed upload quotas for optimal performance

## 🔒 Security

- Secure file handling with UploadThing
- Authentication powered by Clerk
- Protected API routes
- Secure database connections

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
