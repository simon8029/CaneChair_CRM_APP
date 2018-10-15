import puppeteer from 'puppeteer';
import axios from 'axios';

const appUrlBase = 'http://localhost:3000';

let browser;
let page;

beforeAll(async () => {
	browser = await puppeteer.launch({});
	page = await browser.newPage();

	const customers = [
		{ name: 'John', id: 1 },
		{ name: 'Jean', id: 2 },
		{ name: 'Smith', id: 3 }
	];
	return customers.map(c =>
		axios
			.post('http://localhost:8139/customers', c, {
				headers: { 'Content-Type': 'application/json' }
			})
			.catch(e => {
				console.log(`e:`, e);
			})
	);
});

afterAll(() => {
	return axios
		.delete('http://localhost:8139/customers?_cleanup=true')
		.catch(err => err);

	browser.close();
});

describe('CaneChair CRM', () => {
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
});
