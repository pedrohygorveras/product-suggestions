@echo off

REM Navigate to the backend folder
cd backend
echo Installing backend dependencies...
call npm install

REM Navigate to the frontend folder
cd ../frontend
echo Installing frontend dependencies...
call npm install

REM Build the frontend
echo Building the frontend...
call npm run build

REM Start the backend and frontend
echo Starting the application...
call npm run dev

REM Return to the root directory
cd ..
pause
