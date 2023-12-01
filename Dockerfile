# Use node as the runtime image
FROM node:18

# Set the working directory
WORKDIR /app


# Copy neccessary files to the container
COPY index.html /app
COPY script.js /app
COPY styles.css /app


EXPOSE 8080

# Start the application
CMD ["npx", "live-server"]
