# Houseboat Booking Platform

This repository is a monorepo containing two independent applications: a Next.js frontend website and a Sanity CMS backend.

## Project Structure

- `houseboat-booking/` - The Next.js website
- `cms/` - The Sanity Studio CMS

## Getting Started

### Website

To run the Next.js website locally:

```bash
cd houseboat-booking
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### CMS

To run the Sanity Studio locally:

```bash
cd cms
npm install
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to access the Sanity Studio.

## Deployment

- **Website**: Configured to deploy on Vercel. Make sure the "Root Directory" in your Vercel Project Settings is set to `houseboat-booking`.
- **CMS**: Deploy the Sanity Studio by running `npm run deploy` inside the `cms` folder.
