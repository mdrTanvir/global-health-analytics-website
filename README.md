# Global Health Analytics Website

This repository contains the public-facing website for the Global Health Analytics project. It presents the research question, results, and method in a format that is useful to non-technical readers first, with implementation details available later on the page.

**Live site:** [health.tanvirrahman.dev](https://health.tanvirrahman.dev/)

## Project repositories

This project is split into two repositories with different roles:

| Repository | Purpose |
|---|---|
| [SDG-Health-Analytics](https://github.com/mdrTanvir/SDG-Health-Analytics) | The analysis repository: official SDR data workflow, executed Jupyter notebooks, clustering, forecast evaluation, and reproducible technical results. |
| [global-health-analytics-website](https://github.com/mdrTanvir/global-health-analytics-website) | This repository: the explanatory website that turns the analysis into an accessible research story and links visitors to the technical source. |

If you are looking for the original data workflow, notebooks, models, and validation outputs, start with [SDG-Health-Analytics](https://github.com/mdrTanvir/SDG-Health-Analytics).

## What this website explains

- The global health question behind the analysis
- Three country-level outcome patterns and what they mean
- A plain-language view of the findings for non-technical readers
- Technical notes on data preparation, clustering, validation, and limitations

## Research basis

The website is based on the results from the [SDG Health Analytics analysis repository](https://github.com/mdrTanvir/SDG-Health-Analytics), which uses the Sustainable Development Report historical data to analyse maternal mortality and life expectancy. The website does not run the models or host the source dataset; it communicates the analysis and provides a route to the reproducible notebooks.

## Run locally

The deployable Next.js application is in [`vercel-app`](./vercel-app).

```bash
cd vercel-app
npm install
npm run dev
```

## Deployment

The website is deployed on Vercel from the `vercel-app` directory. No environment variables are required.
