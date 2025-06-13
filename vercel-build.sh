#!/bin/bash
set -e

# Install dependencies with legacy peer deps
npm install --legacy-peer-deps

# Install TypeScript and type definitions explicitly
npm install --save-dev typescript@5.4.2 @types/react@19.1.8 @types/react-dom@19.1.6 @types/node@20.11.25

# Build the Next.js application
npm run build