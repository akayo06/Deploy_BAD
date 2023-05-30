<!-- Run server -->

pm2 start --name memo-ai "python -m uvicorn server:app --reload"
