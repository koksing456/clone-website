# Sepang Weekend community website

## Reference and originality boundary

Reference inspected on 29 July 2026: `https://www.formula1.com/`.

The implementation borrows only the broad editorial information architecture:

- slim utility bar
- dark primary navigation
- event/status strip
- one large lead story with two secondary stories
- quick-link rail
- editorial story rail
- dark resource band
- community call-to-action
- legal and privacy footer

It intentionally does not copy the Formula 1 logo, typeface, photography, text,
race data, sponsor marks, team branding, or claims of official affiliation.

## Design system

- Backgrounds: true white `#ffffff`, ink `#070708`, charcoal `#121214`
- Accent: independent red `#ed1c24`; planning status green `#9bd329`
- Headings: Barlow Condensed, heavy italic
- Body and controls: Barlow
- Geometry: square controls, angled image masks, diagonal red rule
- Imagery: original generated Malaysian travel and community photography
- Motion: small image zooms and button lifts, disabled under reduced motion

## Content architecture

1. Utility identity and unofficial status
2. Planning navigation and current community status
3. Conversion hero
4. Transport and route stories
5. Weekend essentials
6. Six practical planning topics
7. Community value proposition
8. Rules, privacy and explicit WhatsApp visibility consent
9. Independent-affiliation notice and footer

## Functional rules

- Hero and navigation controls scroll to live page sections.
- Rules open in a modal before the consent area.
- WhatsApp handoff requires explicit consent.
- Without `NEXT_PUBLIC_WHATSAPP_INVITE_URL`, the handoff remains disabled and
  clearly states that no signup is counted as a member.
- The menu opens and closes at desktop and mobile widths.

