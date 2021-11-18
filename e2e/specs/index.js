
'use strict';

const puppeteer = require('puppeteer');

const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
  throw new Error('"process.env.BASE_URL" must be set');
}

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
      headless: process.env.CI ? true : false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  page = await browser.newPage();
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });
});

afterAll(async () => {
  await page.close();
  await browser.close();
});

it('displays the title "React App"', async () => {
  const title = await page.title();
  expect(title).toEqual('Burrito Mage');
});

it('displays the header welcome message', async () => {
  const title = await page.$eval('.App-header h1', el => el.textContent);
  expect(title).toEqual('BURRITO MAGE');
});