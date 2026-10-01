# HomeFix Backend

This directory will contain the Node.js/Express backend for HomeFix.

## Planned Structure

```
backend/
├── src/
│   ├── routes/
│   │   ├── pros.js         # GET /api/pros, GET /api/pros/:id
│   │   ├── services.js     # GET /api/services
│   │   ├── quotes.js       # POST /api/quotes
│   │   └── auth.js         # POST /api/auth/register, /api/auth/login
│   ├── models/             # Mongoose/Sequelize models
│   │   ├── Pro.js
│   │   ├── User.js
│   │   ├── Quote.js
│   │   └── Review.js
│   ├── middleware/
│   │   ├── auth.js         # JWT verification middleware
│   │   └── errorHandler.js
│   ├── controllers/        # Business logic
│   └── app.js              # Express app setup
├── .env.example
├── package.json
└── README.md
```

## Planned Tech Stack

| Layer       | Technology          |
|-------------|---------------------|
| Runtime     | Node.js             |
| Framework   | Express.js          |
| Database    | MongoDB + Mongoose  |
| Auth        | JWT + bcrypt        |
| Validation  | Joi / express-validator |
| File Upload | Multer + Cloudinary |

## API Endpoints (Planned)

| Method | Endpoint               | Description                        |
|--------|------------------------|------------------------------------|
| GET    | /api/pros              | List pros (with filters & pagination)|
| GET    | /api/pros/:id          | Get pro profile                    |
| POST   | /api/quotes            | Submit a quote request             |
| GET    | /api/services          | List service categories            |
| POST   | /api/auth/register     | Register new user                  |
| POST   | /api/auth/login        | Login and get JWT                  |
| GET    | /api/reviews/:proId    | Get reviews for a pro              |
| POST   | /api/reviews           | Submit a review (auth required)    |
