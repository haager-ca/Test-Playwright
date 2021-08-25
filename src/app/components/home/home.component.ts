import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public startNewTest(): void {
    const playwright = require('playwright');

    (async () => {
      for (const browserType of ['firefox', 'webkit']) {
        const browser = await playwright[browserType].launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('http://auto.caiushaager.de/');
        await page.screenshot({ path: `test-${browserType}.png` });
        await browser.close();
      }
    })();

  };

}
