# Use official Python image
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Collect static files (optional if you have static)
RUN python manage.py collectstatic --noinput || true

# Expose port
EXPOSE 8000

# Run the app with Django’s dev server (for production we use gunicorn)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
