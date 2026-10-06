import pathlib, sys
from playwright.sync_api import sync_playwright
here=pathlib.Path('.').resolve()
with sync_playwright() as p:
    b=p.chromium.launch()
    pg=b.new_page(viewport={'width':1700,'height':1200}, device_scale_factor=2)
    pg.goto((here/'boards.html').as_uri(), wait_until='networkidle')
    pg.evaluate('document.fonts.ready'); pg.wait_for_timeout(600)
    for bid,name in (('b2','Board-02-Hero-Design-Language'),('b3','Board-03-Credentials-Practice'),('b4','Board-04-Mobile'),('b5','Board-05-Interior-Pages')):
        pg.locator('#'+bid).screenshot(path=f'{name}.png')
        print(name)
    pg=b.new_page(viewport={'width':1680,'height':1200}, device_scale_factor=1)
    pg.goto((here/'board01.html').as_uri(), wait_until='networkidle')
    pg.evaluate('document.fonts.ready'); pg.wait_for_timeout(500)
    pg.locator('#b1').screenshot(path='Board-01-Full-Desktop-Homepage.png')
    print('Board-01-Full-Desktop-Homepage')
    b.close()
