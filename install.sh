#!/bin/bash

# Install backend dependencies
cd ./backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Ensure the frontend build is up to date
npm run build

# Start both backend and frontend
npm run dev
