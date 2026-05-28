#!/usr/bin/env python3
"""Generate OnlyCH Office Hours Diagnostic Questionnaire PDF."""

import os
from datetime import datetime

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, KeepTogether, ListFlowable, ListItem
)

# ── Colors ──────────────────────────────────────────────────────────
GREEN = HexColor('#799b3d')
DARK = HexColor('#2B2644')
LIGHT_BG = HexColor('#F5F5F5')
WHITE = HexColor('#FFFFFF')
BLACK = HexColor('#1a1a1a')
GRAY = HexColor('#666666')
LIGHT_GRAY = HexColor('#e0e0e0')
ACCENT_BG = HexColor('#f0f4e8')  # light green tint

# ── Page setup ──────────────────────────────────────────────────────
PAGE_W, PAGE_H = A4
LEFT_M = 2.2 * cm
RIGHT_M = 2.2 * cm
TOP_M = 2.0 * cm
BOT_M = 2.0 * cm
CONTENT_W = PAGE_W - LEFT_M - RIGHT_M

OUTPUT_PATH = '/home/z/my-project/download/OnlyCH_Office_Hours_Diagnostic.pdf'

doc = SimpleDocTemplate(
    OUTPUT_PATH,
    pagesize=A4,
    leftMargin=LEFT_M,
    rightMargin=RIGHT_M,
    topMargin=TOP_M,
    bottomMargin=BOT_M,
    title='OnlyCH Office Hours Diagnostic',
    author='Z.ai',
    subject='Strategic diagnostic questionnaire for OnlyCH website restructuring',
)

# ── Styles ──────────────────────────────────────────────────────────
styles = getSampleStyleSheet()

style_cover_title = ParagraphStyle(
    'CoverTitle', parent=styles['Title'],
    fontSize=32, leading=38, textColor=WHITE,
    alignment=TA_LEFT, fontName='Helvetica-Bold',
    spaceAfter=8*mm,
)
style_cover_sub = ParagraphStyle(
    'CoverSub', parent=styles['Normal'],
    fontSize=14, leading=20, textColor=HexColor('#cccccc'),
    alignment=TA_LEFT, fontName='Helvetica',
    spaceAfter=4*mm,
)
style_cover_date = ParagraphStyle(
    'CoverDate', parent=styles['Normal'],
    fontSize=11, leading=14, textColor=HexColor('#aaaaaa'),
    alignment=TA_LEFT, fontName='Helvetica',
)

style_h1 = ParagraphStyle(
    'H1', parent=styles['Heading1'],
    fontSize=22, leading=28, textColor=DARK,
    fontName='Helvetica-Bold', spaceBefore=14*mm, spaceAfter=5*mm,
    borderWidth=0, borderPadding=0,
)
style_h2 = ParagraphStyle(
    'H2', parent=styles['Heading2'],
    fontSize=16, leading=22, textColor=GREEN,
    fontName='Helvetica-Bold', spaceBefore=10*mm, spaceAfter=4*mm,
)
style_h3 = ParagraphStyle(
    'H3', parent=styles['Heading3'],
    fontSize=13, leading=18, textColor=DARK,
    fontName='Helvetica-Bold', spaceBefore=6*mm, spaceAfter=3*mm,
)
style_body = ParagraphStyle(
    'Body', parent=styles['Normal'],
    fontSize=10.5, leading=16, textColor=BLACK,
    fontName='Helvetica', alignment=TA_JUSTIFY,
    spaceAfter=3*mm,
)
style_question = ParagraphStyle(
    'Question', parent=styles['Normal'],
    fontSize=11, leading=17, textColor=DARK,
    fontName='Helvetica-Bold', alignment=TA_LEFT,
    spaceAfter=2*mm, spaceBefore=5*mm,
)
style_hint = ParagraphStyle(
    'Hint', parent=styles['Normal'],
    fontSize=9.5, leading=14, textColor=GRAY,
    fontName='Helvetica-Oblique', alignment=TA_LEFT,
    spaceAfter=2*mm, leftIndent=8*mm,
)
style_answer = ParagraphStyle(
    'Answer', parent=styles['Normal'],
    fontSize=10, leading=15, textColor=GRAY,
    fontName='Helvetica', alignment=TA_LEFT,
    spaceAfter=1*mm, leftIndent=8*mm,
    borderWidth=0,
)
style_section_intro = ParagraphStyle(
    'SectionIntro', parent=styles['Normal'],
    fontSize=10.5, leading=16, textColor=GRAY,
    fontName='Helvetica-Oblique', alignment=TA_JUSTIFY,
    spaceAfter=5*mm,
)
style_note = ParagraphStyle(
    'Note', parent=styles['Normal'],
    fontSize=9, leading=13, textColor=GRAY,
    fontName='Helvetica', alignment=TA_LEFT,
    spaceAfter=2*mm, leftIndent=8*mm,
    borderWidth=0,
)
style_bullet = ParagraphStyle(
    'Bullet', parent=styles['Normal'],
    fontSize=10.5, leading=16, textColor=BLACK,
    fontName='Helvetica', alignment=TA_LEFT,
    spaceAfter=1.5*mm, leftIndent=12*mm, bulletIndent=6*mm,
)

# ── Helpers ─────────────────────────────────────────────────────────
story = []

def add_h1(text):
    story.append(Paragraph(text, style_h1))
    story.append(HRFlowable(width='100%', thickness=1.5, color=GREEN, spaceAfter=4*mm))

def add_h2(text):
    story.append(Paragraph(text, style_h2))

def add_h3(text):
    story.append(Paragraph(text, style_h3))

def add_body(text):
    story.append(Paragraph(text, style_body))

def add_intro(text):
    story.append(Paragraph(text, style_section_intro))

def add_question(num, text):
    story.append(Paragraph(f'Q{num}. {text}', style_question))

def add_hint(text):
    story.append(Paragraph(text, style_hint))

def add_answer_line(lines=3):
    for i in range(lines):
        story.append(Paragraph('_' * 85, style_answer))
        story.append(Spacer(1, 2*mm))

def add_note(text):
    story.append(Paragraph(text, style_note))

def add_spacer(h=5*mm):
    story.append(Spacer(1, h))

def add_bullet(text):
    story.append(Paragraph(f'\u2022  {text}', style_bullet))


# ════════════════════════════════════════════════════════════════════
# COVER PAGE
# ════════════════════════════════════════════════════════════════════

# Dark background cover using a table
cover_data = [['']]
cover_table = Table(cover_data, colWidths=[CONTENT_W], rowHeights=[PAGE_H - TOP_M - BOT_M])
cover_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, -1), DARK),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 0),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
]))

# Build cover content as separate flowables
story.append(Spacer(1, 35*mm))
story.append(Paragraph('OnlyCH', ParagraphStyle(
    'CoverBrand', parent=style_cover_title, fontSize=48, leading=54, textColor=GREEN,
)))
story.append(Paragraph('Office Hours Diagnostic', style_cover_title))
story.append(Spacer(1, 8*mm))
story.append(Paragraph(
    'Strategic questionnaire for the OnlyCH website restructuring.',
    style_cover_sub
))
story.append(Paragraph(
    'Answer these questions with your boss / the business owner. Be specific. '
    'Vague answers produce vague websites. Concrete answers produce websites that sell.',
    style_cover_sub
))
story.append(Spacer(1, 20*mm))
story.append(Paragraph(f'Prepared: {datetime.now().strftime("%B %d, %Y")}', style_cover_date))
story.append(Paragraph('Confidential - Internal Use Only', style_cover_date))
story.append(PageBreak())


# ════════════════════════════════════════════════════════════════════
# INSTRUCTIONS
# ════════════════════════════════════════════════════════════════════

add_h1('How to Use This Document')
add_body(
    'This questionnaire is adapted from the Y Combinator office-hours diagnostic framework, '
    'customized specifically for OnlyCH and the Argentine B2B promotional products market. '
    'It is designed to be answered by you and your boss together in a focused session. '
    'The goal is not to fill in every blank -- it is to force the kind of specificity that '
    'separates a website that generates leads from one that sits there looking pretty.'
)
add_body(
    'Rules for answering:')
add_bullet('Name specific people, companies, and numbers. "Some clients" is not an answer. "Acme SA, Maria the procurement lead" is.')
add_bullet('If you do not know, write "ASK BOSS" or "NEED DATA" -- do not guess.')
add_bullet('Every question exists because the answer changes what we build. There are no filler questions.')
add_bullet('The questions get progressively harder. The first few are warm-up. The later ones are where the real strategy lives.')
add_bullet('Bring this back with real answers and we will build a website that sells like a monster.')

add_spacer(8*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 1: DEMAND REALITY
# ════════════════════════════════════════════════════════════════════

add_h1('Section 1: Demand Reality')
add_intro(
    'The goal of this section is to separate real demand from wishful thinking. '
    '"Interest" is free. Demand costs something -- money, time, panic when it breaks.'
)

add_question(1, 'What is the strongest evidence you have that a website will actually drive sales for OnlyCH?')
add_hint('Not "we need a web presence" -- what concrete signal tells you clients would buy through or because of a website?')
add_answer_line(4)

add_question(2, 'Name one specific client who told you they wanted to see your catalog online. What company? What contact? What product were they looking for?')
add_hint('If you cannot name one, that is a signal the demand might be softer than it feels.')
add_answer_line(4)

add_question(3, 'Has any prospect ever been lost because they could not find OnlyCH online? Name the prospect, the approximate date, and what happened.')
add_hint('A lost deal is the strongest demand signal. If you have one, it means the market is trying to buy and cannot find you.')
add_answer_line(4)

add_question(4, 'Has any existing client ever expressed frustration with the current buying process? What specifically frustrated them?')
add_hint('"It takes too long to get a quote" or "I had to wait for someone to send me photos" are gold -- they tell you exactly what the website should fix.')
add_answer_line(4)

add_question(5, 'When a client calls or WhatsApps asking for products, what are the top 3 most common things they ask for?')
add_hint('Rank them by frequency. These become the featured products on the homepage.')
add_answer_line(4)

add_spacer(5*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 2: STATUS QUO
# ════════════════════════════════════════════════════════════════════

add_h1('Section 2: The Current Buying Journey')
add_intro(
    'Before you build something new, you need to understand exactly what clients do now. '
    'The current workaround -- however messy -- is your real competitor. '
    'If "nothing" is the current solution, the problem probably is not painful enough.'
)

add_question(6, 'Walk through the exact steps a new client takes from first contact to receiving their products. Every step.')
add_hint('Example: "They call -> we ask what they need -> we email a PDF catalog -> they pick items -> we send a quote -> they approve -> we produce -> we deliver."')
add_answer_line(6)

add_question(7, 'How does your sales team currently show products to prospects? Check all that apply and describe:')
add_bullet('PDF catalog (how many pages? when was it last updated?)')
add_bullet('Physical samples (how do you get them to the client?)')
add_bullet('WhatsApp photos (who sends them? from what source?)')
add_bullet('In-person visit (how often? how long does it take?)')
add_bullet('Other: _______________________________')
add_answer_line(3)

add_question(8, 'How long does it typically take from first contact to a closed deal? What is the fastest? What is the slowest?')
add_hint('If the range is wide (1 day to 3 weeks), that tells you the process is inconsistent -- a website can standardize the fast path.')
add_answer_line(3)

add_question(9, 'What is the average order value? What is the smallest order you will accept? What is the largest order you have fulfilled?')
add_hint('This determines whether the website should cater to small quick orders, large enterprise contracts, or both with separate flows.')
add_answer_line(3)

add_question(10, 'What happens when a client wants something you do not have in stock? Walk through that scenario.')
add_hint('This tells you whether the website should show real-time inventory, estimated delivery dates, or just "contact us for availability."')
add_answer_line(3)

add_question(11, 'How many quotes does the sales team send per week? How many convert to orders?')
add_hint('The conversion rate from quote to order is your key metric. If it is high, the website just needs to generate more quotes. If it is low, the website needs to improve the quote-to-close process.')
add_answer_line(3)

add_spacer(5*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 3: DESPERATE SPECIFICITY
# ════════════════════════════════════════════════════════════════════

add_h1('Section 3: Who Is the Real Buyer?')
add_intro(
    '"Pymes and enterprises" is a category, not a person. You cannot email a category. '
    'The more specific you are about WHO buys, the more the website can speak directly to them. '
    'Different buyers need different things from the site.'
)

add_question(12, 'Describe your IDEAL client. Not who could buy -- who SHOULD buy. What industry? What size? What situation are they in?')
add_hint('Example: "A mid-size company (50-200 employees) doing a corporate rebrand that needs uniforms, drinkware, and event materials for 3 internal events per year."')
add_answer_line(4)

add_question(13, 'Who inside that company actually makes the purchase decision? What is their job title?')
add_hint('It is almost never the CEO. It is usually a marketing manager, HR director, procurement lead, or event coordinator. Name the role.')
add_answer_line(3)

add_question(14, 'What gets that person promoted? What gets them fired? What keeps them up at night?')
add_hint('If the buyer is a marketing manager, they get promoted when campaigns look professional and stay on budget. They get fired when swag arrives late or looks cheap. The website should make them feel safe on both counts.')
add_answer_line(3)

add_question(15, 'Name 3 specific companies that are your best clients today. What do they buy? How often? How did they find you?')
add_hint('Real client names tell us the actual market. The pattern across these 3 is your target profile.')
add_answer_line(5)

add_question(16, 'What is different about how a pyme (small/medium business) buys from you versus a large enterprise?')
add_hint('Do they buy different products? Different volumes? Different decision speed? Do they care about different things (price vs. quality vs. speed)?')
add_answer_line(3)

add_spacer(5*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 4: NARROWEST WEDGE
# ════════════════════════════════════════════════════════════════════

add_h1('Section 4: The Smallest Version That Sells')
add_intro(
    'The biggest mistake is trying to build everything at once. '
    'The correct approach: build the smallest version that generates real leads, '
    'then expand based on what you learn. This section forces you to find that wedge.'
)

add_question(17, 'If the website could only do ONE thing, what would generate the most revenue? Pick one.')
add_hint('Options: show product catalog / capture quote requests / schedule calls / show client testimonials / something else. Pick the single highest-value action.')
add_answer_line(3)

add_question(18, 'What are the 5 product categories that represent 80% of your revenue?')
add_hint('Not all products are equal. If 5 categories drive most revenue, those 5 become the website. The rest can wait.')
add_answer_line(4)

add_question(19, 'Could you sell from a one-page product showcase (no full catalog, just the top categories with a "request quote" button)? Would that be enough to start?')
add_hint('If yes, we can ship in days instead of weeks. If no -- why not? What specifically breaks?')
add_answer_line(3)

add_question(20, 'What information does a prospect need before they will request a quote? Minimum viable info.')
add_hint('Product photo? Price range? Minimum order quantity? Lead time? Material options? List only what is absolutely required to get them to talk to you.')
add_answer_line(3)

add_question(21, 'What could the website do that would make your sales team more effective, even if it never generates a single inbound lead?')
add_hint('Example: "If I could send a client a link to a product page instead of hunting for a photo on my phone, that alone would save 20 minutes per conversation."')
add_answer_line(3)

add_spacer(5*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 5: OBSERVATION & SURPRISE
# ════════════════════════════════════════════════════════════════════

add_h1('Section 5: What You Have Learned From Clients')
add_intro(
    'The best product insights come from watching what users actually do, not what they say they want. '
    'This section is about surprises -- things clients did that you did not expect.'
)

add_question(22, 'Have you ever watched a client try to find or order a product without helping them? What did they do that surprised you?')
add_hint('If you have not done this, that is assignment #1. Sit with a client, hand them your phone with the current site, and bite your tongue.')
add_answer_line(4)

add_question(23, 'Has a client ever used your product for something you did not intend or expect? What was it?')
add_hint('Clients using products in unexpected ways often reveals a new market or use case you should be selling into.')
add_answer_line(3)

add_question(24, 'What is the most common objection you hear from prospects who do not buy?')
add_hint('Price? Lead time? Minimum order? Quality concern? "I need to think about it"? This objection needs to be addressed on the website before they even talk to you.')
add_answer_line(3)

add_question(25, 'What question do clients ask you most often that the website could answer automatically?')
add_hint('If 80% of first calls start with "what products do you have?" or "how fast can you deliver?", those answers belong on the site.')
add_answer_line(3)

add_spacer(5*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 6: SALES CHANNELS & CONTACT STRATEGY
# ════════════════════════════════════════════════════════════════════

add_h1('Section 6: Sales Channels & Contact Strategy')
add_intro(
    'You mentioned WhatsApp, phone calls, and video calls as contact methods. '
    'Different buyers prefer different channels at different stages. '
    'This section maps the right channel to the right buyer at the right moment.'
)

add_question(26, 'What percentage of inbound inquiries come through each channel today?')
add_hint('Estimate: WhatsApp ___%  |  Phone ___%  |  Email ___%  |  Walk-in ___%  |  Other ___%')
add_answer_line(2)

add_question(27, 'For a first-time pyme buyer, what is the ideal first contact method? For a large enterprise procurement manager?')
add_hint('The pyme owner might prefer WhatsApp (fast, casual). The enterprise buyer might need a scheduled video call (formal, documented). The website should route each to their preferred channel.')
add_answer_line(3)

add_question(28, 'Does anyone on your team currently do video calls with clients? What tool? How often? For what purpose?')
add_hint('If video calls are rare, adding a "Schedule a Video Call" button might be premature. If they are common, the website should make scheduling effortless.')
add_answer_line(3)

add_question(29, 'What happens after a client sends a WhatsApp message? Who responds? How fast? What is the follow-up process?')
add_hint('If the website generates 10x more WhatsApp messages, can the current team handle the volume? This is a scaling question.')
add_answer_line(3)

add_question(30, 'Do you want clients to be able to schedule a call directly from the website? If yes, who takes those calls?')
add_hint('A "Book a Call" button only works if someone actually picks up. If there is no dedicated sales person, a callback request form might be better.')
add_answer_line(3)

add_spacer(5*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 7: COMPETITIVE LANDSCAPE
# ════════════════════════════════════════════════════════════════════

add_h1('Section 7: Competitive Landscape')
add_intro(
    'Your real competitor is not another promotional products company -- '
    'it is the status quo (the spreadsheet, the WhatsApp group, the guy they have been buying from for 10 years). '
    'But you also need to know who is winning online right now.'
)

add_question(31, 'When someone Googles "productos promocionales Buenos Aires" or "merchandising Argentina", who shows up first? Name the top 3 competitors you see online.')
add_hint('Search this yourself right now. Your boss should do the same. What do their sites offer that yours does not?')
add_answer_line(3)

add_question(32, 'What do competitors websites do well? What do they do badly?')
add_hint('Steal the good ideas. Avoid the bad ones. Be specific: "Competitor X has a product filter that actually works" or "Competitor Y has a catalog from 2019 and broken contact forms."')
add_answer_line(3)

add_question(33, 'Why do clients choose OnlyCH over competitors? Name the #1 reason. Not 5 reasons -- one.')
add_hint('If you cannot articulate one clear advantage, the website will not be able to either. This becomes the headline.')
add_answer_line(3)

add_question(34, 'What is the status quo for your clients right now? How are they solving their merchandising needs without a website?')
add_hint('If they are using a competitor, which one and why? If they are using spreadsheets and WhatsApp groups, how painful is that? If they are not doing anything, why do they suddenly need to?')
add_answer_line(3)

add_spacer(5*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 8: BRAND & POSITIONING
# ════════════════════════════════════════════════════════════════════

add_h1('Section 8: Brand & Positioning')
add_intro(
    'The website is not just a catalog -- it is a first impression. '
    'Before we design anything, we need to know what impression OnlyCH should make.'
)

add_question(35, 'Complete this sentence: "OnlyCH is the only promotional products company in Argentina that ____________."')
add_hint('This is your positioning statement. If you cannot fill in the blank with something true and specific, you have a positioning problem before you have a website problem.')
add_answer_line(3)

add_question(36, 'What 3 words should a first-time visitor associate with OnlyCH after seeing the website?')
add_hint('Examples: "Professional, fast, reliable" or "Creative, premium, personalized" or "Affordable, easy, fun". Pick 3 that match reality.')
add_answer_line(2)

add_question(37, 'What is the OnlyCH brand story in 2-3 sentences? Why does this company exist?')
add_hint('Not a marketing pitch. The real reason. "We started in a garage in 2003 because..." or "We got tired of seeing companies buy cheap merch that falls apart..."')
add_answer_line(3)

add_question(38, 'Are there any brand guidelines beyond the logo and the green color (#799b3d)? Fonts? Tone of voice? Photography style?')
add_hint('If there are no guidelines, we will establish them as part of the website project. But check with the boss first -- there might be rules we do not know about.')
add_answer_line(3)

add_spacer(5*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 9: PRODUCT CATALOG STRATEGY
# ════════════════════════════════════════════════════════════════════

add_h1('Section 9: Product Catalog Strategy')
add_intro(
    'Clients want to see products online. But a full catalog with 500+ SKUs is a massive project. '
    'This section determines the minimum viable catalog and how to get there.'
)

add_question(39, 'How many total products does OnlyCH carry? How many are "active" (sold in the last 12 months)?')
add_hint('If you have 500 SKUs but only 80 are active, the website starts with 80. Dead products are dead for a reason.')
add_answer_line(2)

add_question(40, 'Do you have professional product photography for your top products? If not, how will you get it?')
add_hint('Options: hire a photographer (best), use supplier-provided images (fastest), AI-generated mockups (temporary). The answer affects timeline and budget.')
add_answer_line(3)

add_question(41, 'Do your products have variations (colors, sizes, materials)? How many variations per product on average?')
add_hint('A polo shirt comes in 8 colors and 5 sizes. That is 40 SKUs for one product. The website needs to handle this without overwhelming the user.')
add_answer_line(3)

add_question(42, 'Do you want to show prices on the website? Why or why not?')
add_hint('Arguments for: buyers self-qualify, fewer "just checking price" calls. Arguments against: competitors can see your pricing, customized products vary widely. Your boss needs to decide this.')
add_answer_line(3)

add_question(43, 'How often does your product line change? New products added? Old ones discontinued?')
add_hint('If products change monthly, the website needs an easy way to update the catalog. If the line is stable, a simpler approach works.')
add_answer_line(3)

add_spacer(5*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 10: TECHNICAL & OPERATIONAL
# ════════════════════════════════════════════════════════════════════

add_h1('Section 10: Technical & Operational')
add_intro(
    'These questions determine what we build and how. They are not glamorous, '
    'but they prevent building the wrong thing.'
)

add_question(44, 'Who will update the website after it launches? Do they have technical skills?')
add_hint('If no one on the team can update a product page, we need a content management system. If someone can, we can use a simpler approach.')
add_answer_line(3)

add_question(45, 'What is the budget for this project? Not just money -- also time. How many hours per week can you or your boss dedicate?')
add_hint('Be honest. A low budget with high commitment beats a high budget with no time to guide the process.')
add_answer_line(3)

add_question(46, 'What is the deadline? Is there a hard date (trade show, season, client commitment) or is it "as soon as possible"?')
add_hint('"ASAP" means there is no real deadline, which means there is no real urgency. A hard date forces decisions and prevents scope creep.')
add_answer_line(3)

add_question(47, 'Do you have access to all the assets we need? Client logos, product photos, company photos, copy text?')
add_hint('List what you have and what is missing. Missing assets are the #1 reason website projects stall.')
add_answer_line(3)

add_question(48, 'Does OnlyCH have a Google Business Profile? Is it claimed and updated?')
add_hint('If clients search for you on Google Maps, a complete profile drives as many leads as the website itself. This is free and should be done regardless.')
add_answer_line(2)

add_spacer(5*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 11: FUTURE-FIT
# ════════════════════════════════════════════════════════════════════

add_h1('Section 11: Future-Fit')
add_intro(
    'The promotional products industry is changing. E-commerce, AI personalization, '
    'sustainable products -- the market in 3 years will look different from today. '
    'The website needs to be built for where the market is going, not where it has been.'
)

add_question(49, 'What trends are you seeing in your clients requests? What are they asking for now that they did not ask for 3 years ago?')
add_hint('Sustainable products? Faster turnaround? Smaller minimum orders? More customization? These trends should shape the website.')
add_answer_line(3)

add_question(50, 'In 3 years, do you think clients will still prefer to buy through WhatsApp/calls, or will they expect to order online directly?')
add_hint('This determines whether the website is a lead-gen tool (current plan) or needs to evolve into an e-commerce platform. Architecture decisions now affect how easy that transition is.')
add_answer_line(3)

add_question(51, 'Would your boss ever consider offering an online self-service portal where repeat clients can reorder without talking to anyone?')
add_hint('This is the biggest potential unlock for the business. Repeat clients reordering on autopilot means the sales team focuses on new business. But it requires process discipline that may not exist yet.')
add_answer_line(3)

add_spacer(5*mm)


# ════════════════════════════════════════════════════════════════════
# SECTION 12: THE ASSIGNMENT
# ════════════════════════════════════════════════════════════════════

add_h1('Your Assignment')
add_body(
    'You do not need to answer all 51 questions perfectly. But you need to answer these 5 '
    'before we build anything:'
)

add_spacer(3*mm)

# Priority questions table
priority_data = [
    ['#', 'Question', 'Why It Matters'],
    ['Q2', 'Name one client who wanted a catalog online', 'Proves demand is real, not imagined'],
    ['Q6', 'Walk through the current buying journey step by step', 'Reveals exactly what the website should fix'],
    ['Q12', 'Describe your ideal client in detail', 'Determines who the website speaks to'],
    ['Q17', 'If the site could only do ONE thing, what would it be?', 'Prevents scope creep and ships faster'],
    ['Q35', 'Complete: "OnlyCH is the only company that..."', 'Defines the positioning that drives all copy and design'],
]

priority_table = Table(
    priority_data,
    colWidths=[0.08*CONTENT_W, 0.52*CONTENT_W, 0.40*CONTENT_W],
    repeatRows=1,
)
priority_table.setStyle(TableStyle([
    # Header
    ('BACKGROUND', (0, 0), (-1, 0), DARK),
    ('TEXTCOLOR', (0, 0), (-1, 0), WHITE),
    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
    ('FONTSIZE', (0, 0), (-1, 0), 10),
    ('PADDING', (0, 0), (-1, 0), 8),
    # Body
    ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
    ('FONTSIZE', (0, 1), (-1, -1), 9.5),
    ('TEXTCOLOR', (0, 1), (-1, -1), BLACK),
    ('PADDING', (0, 1), (-1, -1), 7),
    # Grid
    ('GRID', (0, 0), (-1, -1), 0.5, LIGHT_GRAY),
    ('ROWBACKGROUNDS', (0, 1), (-1, -1), [WHITE, ACCENT_BG]),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('ALIGN', (0, 0), (0, -1), 'CENTER'),
    # First column bold
    ('FONTNAME', (0, 1), (0, -1), 'Helvetica-Bold'),
    ('TEXTCOLOR', (0, 1), (0, -1), GREEN),
]))

story.append(priority_table)
add_spacer(8*mm)

add_body(
    'Answer these 5 with your boss. Then come back. We will take those answers, '
    'run them through the rest of the diagnostic, and build a website that sells. '
    'Not a website that looks nice. A website that makes the phone ring.'
)

add_spacer(5*mm)
add_body(
    'One more thing: next time your boss mentions a lost client or a prospect who went elsewhere, '
    'write down the name, the company, and the product they wanted. That list becomes the website\'s '
    'priority feature list. Every lost deal is a data point. Start collecting.'
)


# ════════════════════════════════════════════════════════════════════
# BUILD
# ════════════════════════════════════════════════════════════════════

def add_page_number(canvas, doc):
    """Add page numbers and a subtle header."""
    page_num = canvas.getPageNumber()
    if page_num == 1:
        return  # Skip cover
    # Footer
    canvas.saveState()
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(GRAY)
    canvas.drawRightString(PAGE_W - RIGHT_M, BOT_M - 8*mm, f'Page {page_num}')
    canvas.drawString(LEFT_M, BOT_M - 8*mm, 'OnlyCH Office Hours Diagnostic')
    # Top line
    canvas.setStrokeColor(LIGHT_GRAY)
    canvas.setLineWidth(0.5)
    canvas.line(LEFT_M, PAGE_H - TOP_M + 4*mm, PAGE_W - RIGHT_M, PAGE_H - TOP_M + 4*mm)
    canvas.restoreState()


doc.build(story, onFirstPage=add_page_number, onLaterPages=add_page_number)
print(f'PDF generated: {OUTPUT_PATH}')

# Quick size check
size_bytes = os.path.getsize(OUTPUT_PATH)
print(f'File size: {size_bytes / 1024:.1f} KB')
