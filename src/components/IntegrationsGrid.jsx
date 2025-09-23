import siteContent from '../../content/site.json';

export default function IntegrationsGrid() {
  const integrationLogos = {
    'Vapi': 'https://logo.clearbit.com/vapi.ai',
    'OpenAI': 'https://logo.clearbit.com/openai.com',
    'Google Calendar': 'https://logo.clearbit.com/calendar.google.com',
    'HubSpot': 'https://logo.clearbit.com/hubspot.com',
    'Salesforce': 'https://logo.clearbit.com/salesforce.com',
    'Zoom': 'https://logo.clearbit.com/zoom.us',
    'Notion': 'https://logo.clearbit.com/notion.so',
    'Zapier': 'https://logo.clearbit.com/zapier.com',
    'Microsoft Azure': 'https://logo.clearbit.com/azure.microsoft.com',
    'AWS': 'https://logo.clearbit.com/aws.amazon.com',
    'Google Cloud': 'https://logo.clearbit.com/cloud.google.com',
    'Slack': 'https://logo.clearbit.com/slack.com',
    'Stripe': 'https://logo.clearbit.com/stripe.com',
    'Twilio': 'https://logo.clearbit.com/twilio.com',
    'WhatsApp': 'https://logo.clearbit.com/whatsapp.com',
  };

  return (
    <section id="integrations" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-section-label mb-4">Integrations</div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            We adapt to your tech stack
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Seamlessly integrate with your existing tools and workflows
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {siteContent.integrations.map((integration, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <img
                    src={integrationLogos[integration]}
                    alt={`${integration} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div 
                    className="hidden w-full h-full bg-primary/10 rounded-lg flex items-center justify-center text-primary font-semibold text-sm"
                    style={{ display: 'none' }}
                  >
                    {integration.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="text-sm font-medium text-ink group-hover:text-primary transition-colors duration-300">
                  {integration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional integrations note */}
        <div className="mt-12 text-center">
            <p className="text-muted">
              Don&apos;t see your tool? We can integrate with virtually any platform. 
              <a href="mailto:bernie@outbound-growth.com" className="text-primary hover:underline ml-1">
                Contact us
              </a> to discuss your specific requirements.
            </p>
        </div>
      </div>
    </section>
  );
}
