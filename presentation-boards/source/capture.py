from playwright.sync_api import sync_playwright
B='http://localhost:4322'
A='assets/'
def settle(pg):
    pg.evaluate('document.fonts.ready'); pg.wait_for_timeout(300)
    H=pg.evaluate('document.documentElement.scrollHeight')
    for y in range(0,H,500):
        pg.evaluate(f'window.scrollTo(0,{y})'); pg.wait_for_timeout(40)
    for _ in range(40):
        if pg.evaluate("[...document.images].every(i=>i.complete && i.naturalWidth>0)"): break
        pg.wait_for_timeout(250)
    pg.evaluate('window.scrollTo(0,0)'); pg.wait_for_timeout(400)
HIDE='.site-header,.action-bar{visibility:hidden !important}'
with sync_playwright() as p:
    b=p.chromium.launch()
    ctx=b.new_context(viewport={'width':1440,'height':900}, reduced_motion='reduce', device_scale_factor=1)
    pg=ctx.new_page()
    for path,name in (('/','home'),('/about','about'),('/practice-areas','practice'),('/contact','contact')):
        pg.goto(B+path, wait_until='networkidle'); settle(pg)
        pg.screenshot(path=A+f'{name}-desktop-full.png', full_page=True)
    ctx.close()
    ctx=b.new_context(viewport={'width':1440,'height':900}, reduced_motion='reduce', device_scale_factor=2)
    pg=ctx.new_page()
    for path,name in (('/','home'),('/about','about'),('/practice-areas','practice'),('/contact','contact')):
        pg.goto(B+path, wait_until='networkidle'); settle(pg)
        pg.screenshot(path=A+f'{name}-fold@2x.png')
        pg.screenshot(path=A+f'{name}-top@2x.png', clip={'x':0,'y':0,'width':1440,'height':1800}, full_page=True)
        if name=='home':
            pg.add_style_tag(content=HIDE)
            for sel,n in (('.credentials','sec-credentials'),('.practice .container','sec-practice'),('.finance','sec-finance'),
                          ('.recognition-section__table','sec-recognition-table'),('.recognition-section__aside','sec-recognition-aside'),
                          ('.contact','sec-contact'),('.location','sec-location')):
                pg.locator(sel).first.screenshot(path=A+f'{n}@2x.png')
    ctx.close()
    ctx=b.new_context(viewport={'width':390,'height':844}, reduced_motion='reduce', device_scale_factor=3, is_mobile=True, has_touch=True)
    pg=ctx.new_page()
    pg.goto(B+'/', wait_until='networkidle'); settle(pg)
    pg.screenshot(path=A+'m-home-1.png')
    def at(sel, off, name):
        y=pg.evaluate(f"document.querySelector('{sel}').getBoundingClientRect().top + window.scrollY - {off}")
        pg.evaluate(f'window.scrollTo(0,{y+40})'); pg.wait_for_timeout(250)
        pg.evaluate(f'window.scrollTo(0,{y})'); pg.wait_for_timeout(700)
        pg.screenshot(path=A+name)
    at('.credentials', 68, 'm-home-2.png')
    at('.practice .practice__sticky', 100, 'm-home-3.png')
    at('.finance', 68, 'm-home-4.png')
    at('.contact .contact__copy', 100, 'm-home-5.png')
    pg.evaluate('window.scrollTo(0,0)'); pg.wait_for_timeout(500)
    pg.click('[data-menu-open]'); pg.wait_for_timeout(500); pg.mouse.move(10,400)
    pg.screenshot(path=A+'m-menu.png')
    ctx.close(); b.close()
print('done')
