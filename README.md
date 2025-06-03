# Who Am I?

A simple Express.js app that displays your IP address, browser language, and software (user agent) in a clean web interface.

## Features

- Shows your public IP address
- Detects your browser's preferred language
- Displays your browser and OS information
- Stylish, responsive UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/elliotcann/who-am-i.git
    cd who-am-i
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the App

Start the server in development mode (with auto-reload):

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
who-am-i/
├── public/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── server.js
├── package.json
└── README.md
```

- `server.js`: Express server with `/api/whoami` endpoint
- `public/`: Static frontend files

## API

### `GET /api/whoami`

Returns a JSON object:

```json
{
  "ipaddress": "your.ip.address",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 ..."
}
```

## License

MIT

---
Made with ❤️ using [Express.js](https://expressjs.com/)