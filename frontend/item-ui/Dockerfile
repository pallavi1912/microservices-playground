# Stage 1: Build Angular app
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default Nginx configuration
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output to Nginx html folder (Angular 19+ uses browser subdirectory)
COPY --from=build /app/dist/item-ui/browser /usr/share/nginx/html

# Set proper permissions
RUN chmod -R 755 /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html/*

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
