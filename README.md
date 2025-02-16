# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


unicef/
├── public/                 # Static files
│   └── images/
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable components
│   │   ├── common/       # Shared components like Button, Input, etc.
│   │   └── layout/       # Layout components like Header, Footer, etc.
│   ├── pages/            # Page components
│   ├── services/         # API calls and other services
│   ├── utils/            # Helper functions
│   ├── hooks/            # Custom React hooks
│   ├── context/          # React context files
│   ├── styles/           # Global styles
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── vite.config.js