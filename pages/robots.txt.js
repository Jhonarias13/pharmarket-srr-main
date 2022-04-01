import React from "react";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {

  const sitemap = 
  `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
      <loc>https://pharmarket.co/</loc>
      <lastmod>2021-11-19T14:58:38+00:00</lastmod>
      </url>
    </urlset>
  `;  

  res.setHeader('Content-Type', 'text/plain');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;