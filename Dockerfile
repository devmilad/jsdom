# Use the official Node.js 16 image as the base image
FROM mcr.microsoft.com/playwright:latest

# Set environment variables to skip installing Chromium, Firefox, and WebKit
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

# Create and set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Playwright browsers
RUN npx playwright install

# Copy the rest of the application files to the working directory
COPY . .

# Set the command to run your Playwright script
CMD ["node", "app.js"]
