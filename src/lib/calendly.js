/**
 * Discovery call booking calendar.
 * Brand colours only render on paid Calendly plans; the embed falls back to
 * its default light theme otherwise, which the surrounding panel accounts for.
 * `hide_event_type_details` / `hide_landing_page_details` drop the host name
 * and event blurb so the widget reads as the brand, not an individual.
 */
export const CALENDLY_URL = 'https://calendly.com/bernie-outbound-growth/30min';

export const CALENDLY_EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1&background_color=0b1220&text_color=e8eef7&primary_color=488080`;
