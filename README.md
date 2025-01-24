# T.Project - E-Commerce Management System

## Project Description
This project is a comprehensive E-Commerce Management System built with modern web technologies. It provides a robust platform for managing products, categories, users, and orders through an intuitive user interface. The system is containerized using Docker and follows microservices architecture principles.

## Team Members
- Ulas Ulusoy (40472)
- Sadettin Celik (40312)
- Anar Aliyev (39252)

## Technical Stack
- **Frontend**: React.js with Material-UI
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL
- **Containerization**: Docker & Docker Compose

## Features
- User Management
- Product Management
- Category Management
- Order Management
- Dashboard with Statistics
- RESTful API
- Responsive Design

## Prerequisites
Before running the project, make sure you have the following installed:
- Docker Desktop
- Docker Compose

## Running the Project
1. Clone the repository
2. Navigate to the project directory
3. Run the following command:
```bash
docker compose up
```

This command will:
- Build and start all necessary containers
- Set up the PostgreSQL database
- Initialize the backend API
- Launch the frontend application

## Accessing the Application
After running `docker compose up`, you can access:
- Frontend Application: http://localhost:3000
- API Documentation: http://localhost:8000/docs
- Database Port: 5432 (if you need direct access)

## Additional Notes
- The system uses environment variables with sensible defaults, so no additional configuration is required
- Data persistence is handled through Docker volumes
- The API documentation is automatically generated and can be accessed through Swagger UI
- All services are configured to restart automatically in case of failures

## Troubleshooting
If you encounter any issues:
1. Make sure all required ports (3000, 8000, 5432) are available
2. Try stopping all containers and removing volumes:
```bash
docker compose down -v
docker compose up --build
```

## Development
To make changes to the project:
1. Frontend code is in the `/frontend` directory
2. Backend code is in the `/backend` directory
3. Database configuration is handled through environment variables in `docker-compose.yml`
