#!/bin/bash
set -e

# Install dependencies with legacy peer deps
npm install --legacy-peer-deps

# Build the Next.js application
npm run build