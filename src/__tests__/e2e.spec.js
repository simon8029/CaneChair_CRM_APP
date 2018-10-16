import puppeteer from 'puppeteer';
import axios from 'axios';

const appUrlBase = 'http://localhost:3000';

let browser;
let page;

beforeAll(async () => {
	browser = await puppeteer.launch({});
	page = await browser.newPage();
});

afterAll(() => {
	browser.close();
});

describe('CaneChair CRM', () => {
	beforeEach(async () => {
		await axios.post(
			'http://localhost:8139/customers',
			{
				name: 'John',
				id: 1,
				profile: "John's profile"
			},
			{ headers: { 'Content-Type': 'application/json' } }
		);

		await axios.post(
			'http://localhost:8139/customers',
			{
				name: 'Jean',
				id: 2,
				profile: "Jean's profile"
			},
			{ headers: { 'Content-Type': 'application/json' } }
		);

		await axios.post(
			'http://localhost:8139/customers',
			{
				name: 'Smith',
				id: 3,
				profile: "Smith's profile"
			},
			{ headers: { 'Content-Type': 'application/json' } }
		);
	});

	afterEach(async () => {
		await axios.delete('http://localhost:8139/customers/1');
		await axios.delete('http://localhost:8139/customers/2');
		await axios.delete('http://localhost:8139/customers/3');
	});

	it('Heading', async () => {
		await page.goto(`${appUrlBase}/`);
		await page.waitForSelector('h1');
		const result = await page.evaluate(() => {
			return document.querySelector('h1').innerText;
		});

		expect(result).toEqual('CaneChair CRM');
	});

	it('Customer List', async () => {
		await page.goto(`${appUrlBase}/`);
		await page.waitForSelector('.customers');
		const customers = await page.evaluate(() => {
			return [
				...document.querySelectorAll('.customer .customerName')
			].map(element => element.innerText);
		});

		expect(customers.length).toEqual(3);
		expect(customers).toContain('John');
		expect(customers).toContain('Jean');
		expect(customers).toContain('Smith');
	});

	it('should goto customer detail page', async () => {
		await page.goto(`${appUrlBase}/`);
		await page.waitForSelector('a.view-detail');

		const links = await page.evaluate(() => {
			return [...document.querySelectorAll('a.view-detail')].map(el =>
				el.getAttribute('href')
			);
		});

		await Promise.all([
			page.waitForNavigation({ waitUntil: 'networkidle2' }),
			page.goto(`${appUrlBase}${links[0]}`)
		]);

		const url = await page.evaluate('location.href');

		expect(url).toEqual(`${appUrlBase}/customer/1`);

		await page.waitForSelector('.customer-profile');

		const result = await page.evaluate(() => {
			return document.querySelector('.customer-profile').innerText;
		});

		expect(result).toEqual("John's profile");
	});
});
