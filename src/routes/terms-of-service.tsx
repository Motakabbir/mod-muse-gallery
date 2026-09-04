import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, useReveal } from "@/components/site";
import { fetchSeoMetadata, mapSeoToMeta } from "../lib/utils";
import React from "react";

export const Route = createFileRoute("/terms-of-service")({
  loader: async () => {
    const seo = await fetchSeoMetadata("terms-of-service", {
      title: "Terms of Service | Syndicate",
      description: "Terms of Service for Syndicate Restomod Build.",
      og_title: "Terms of Service | Syndicate",
      og_description: "Terms of Service for Syndicate Restomod Build.",
    });
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Terms of Service | Syndicate",
      description: "Terms of Service for Syndicate Restomod Build.",
      og_title: "Terms of Service | Syndicate",
      og_description: "Terms of Service for Syndicate Restomod Build.",
    }),
  }),
  component: TermsOfService,
});

function SectionHeader({ num, title }: { num?: string; title: string }) {
  return (
    <h2 className="font-display text-2xl md:text-3xl text-bone mt-20 mb-8 flex items-center gap-4 border-b border-white/5 pb-6">
      {num && (
        <span className="text-acid font-mono text-sm tracking-widest border border-acid/30 bg-acid/10 px-3 py-1 rounded-full flex-shrink-0">
          {num}
        </span>
      )}
      {title}
    </h2>
  );
}

function CardList({ items, cols = 2 }: { items: React.ReactNode[]; cols?: 1 | 2 | 3 }) {
  return (
    <ul className={`grid gap-4 my-8 ${cols === 1 ? 'grid-cols-1' : cols === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-acid/30 hover:bg-white/10 transition-colors">
          <div className="h-1.5 w-1.5 rounded-full bg-acid flex-shrink-0 mt-2 shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
          <span className="text-sm text-bone/80 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TermsOfService() {
  useReveal();
  
  return (
    <main className="bg-ink text-bone overflow-x-hidden min-h-screen flex flex-col">
      <Nav />
      <section className="relative pt-40 pb-32 px-6 flex-grow">
        <div className="mx-auto max-w-4xl">
          <div className="reveal">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">Legal</div>
            <h1 className="font-display text-5xl md:text-7xl mb-12 text-gradient-bone">Terms of Service</h1>
            
            <div className="space-y-6 text-bone/70 leading-relaxed font-sans text-lg">
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-16">
                <p className="font-mono text-xs text-acid uppercase tracking-widest mb-4">Last updated: 31 August 2026</p>
                <p className="mb-4">These Terms of Service govern your use of the Syndicated Restomod website and related online services.</p>
                <p className="mb-4">Please read these Terms carefully before using the website or creating an account.</p>
                <p>By accessing or using the website, you agree to be bound by these Terms. If you do not agree with them, you should not use the website.</p>
              </div>

              <SectionHeader num="1" title="ABOUT SYNDICATED RESTOMOD" />
              <p>Syndicated Restomod is a platform developed to identify, develop and facilitate access to exceptional automotive projects, including restomod, continuation, low-volume and one-of-one vehicles and related automotive experiences.</p>
              <p className="mt-6">The platform may provide:</p>
              <CardList items={[
                "Information about automotive projects",
                "Project updates",
                "Membership and registration services",
                "Waiting lists",
                "Opportunities to express interest in future projects",
                "Access to Syndicate opportunities",
                "Member communications",
                "Automotive events and experiences",
                "Related content and services"
              ]} />
              <div className="bg-ink/50 p-6 rounded-xl border border-white/5 mt-6">
                <p>Syndicated Restomod is operated by [Sarthe Cars Ltd / Legal Entity Name], company number [●], whose registered office is [●].</p>
                <p className="mt-2 text-sm text-bone/50 italic">References in these Terms to "Syndicated Restomod", "we", "us" or "our" refer to the relevant operating entity.</p>
              </div>

              <SectionHeader num="2" title="IMPORTANT INFORMATION ABOUT SYNDICATES" />
              <p>Syndicated Restomod may provide information about opportunities to participate in individual automotive projects.</p>
              <div className="bg-acid/10 border border-acid/20 p-6 rounded-2xl my-6 flex gap-4 items-start">
                <div className="text-acid text-2xl">⚠</div>
                <p className="text-bone/90">An expression of interest, website registration or waitlist registration does not constitute an investment, purchase, membership of a Syndicate or commitment to participate in a project.</p>
              </div>
              <p>Each individual Syndicate will be subject to its own project-specific documentation, which may include:</p>
              <CardList items={[
                "A Syndicate agreement",
                "Membership terms",
                "Vehicle or asset ownership arrangements",
                "Trust documentation",
                "Usage and access rules",
                "Payment terms",
                "Risk disclosures",
                "Insurance requirements",
                "Cancellation provisions",
                "Other relevant legal documents"
              ]} />
              <p>Where there is a conflict between these general Website Terms and the terms of a specific Syndicate, the project-specific documentation will take precedence in relation to that Syndicate.</p>

              <SectionHeader num="3" title="NO OFFER OR INVESTMENT ADVICE" />
              <p>Information displayed on the Syndicated Restomod website is provided for general information and promotional purposes unless expressly stated otherwise.</p>
              <p className="mt-6 font-display text-xl text-bone">Nothing on the website constitutes:</p>
              <CardList items={[
                "Financial advice",
                "Investment advice",
                "Tax advice",
                "Legal advice",
                "A recommendation to invest",
                "An offer of securities",
                "An invitation to acquire shares",
                "A guarantee of financial return",
                "A guarantee that a particular project will proceed"
              ]} cols={3} />
              <p>You should obtain independent professional advice before entering into any financial, investment, ownership or contractual arrangement. Where a project involves a financial or investment structure, the applicable legal documentation will explain the structure and associated risks.</p>

              <SectionHeader num="4" title="ELIGIBILITY" />
              <p>You must be legally capable of entering into binding contracts to use the platform. Unless expressly permitted under the terms of a particular project, Syndicated Restomod services are intended for individuals aged 18 or over.</p>
              <p className="mt-6">We may refuse or restrict access where we reasonably believe that:</p>
              <CardList items={[
                "You are not eligible",
                "Information supplied by you is inaccurate",
                "Your use of the platform may breach applicable law",
                "You are attempting to misuse the platform",
                "Your activities may adversely affect Syndicated Restomod or other users"
              ]} />

              <SectionHeader num="5" title="ACCOUNT REGISTRATION" />
              <p>Certain features may require you to create an account. You agree to provide accurate and current information when registering.</p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-display text-xl text-acid mb-4">You are responsible for:</h4>
                  <ul className="text-sm text-bone/70 space-y-3">
                    <li className="flex gap-2"><span>•</span> Maintaining the confidentiality of your login credentials</li>
                    <li className="flex gap-2"><span>•</span> Ensuring your account information remains accurate</li>
                    <li className="flex gap-2"><span>•</span> Preventing unauthorised use of your account</li>
                    <li className="flex gap-2"><span>•</span> Notifying us if you believe your account has been compromised</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-display text-xl text-acid mb-4">You must not:</h4>
                  <ul className="text-sm text-bone/70 space-y-3">
                    <li className="flex gap-2"><span>•</span> Create an account using another person's identity</li>
                    <li className="flex gap-2"><span>•</span> Share your account credentials with another person</li>
                    <li className="flex gap-2"><span>•</span> Create multiple accounts to circumvent restrictions</li>
                    <li className="flex gap-2"><span>•</span> Provide deliberately misleading information</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-sm">We reserve the right to suspend or terminate accounts where we reasonably believe these Terms have been breached.</p>

              <SectionHeader num="6" title="WAITLISTS AND EXPRESSIONS OF INTEREST" />
              <p>You may register your interest in current or future Syndicated Restomod projects.</p>
              <p className="mt-6 font-display text-xl text-bone">Joining a waiting list:</p>
              <CardList items={[
                "Does not guarantee participation",
                "Does not reserve a place in a Syndicate",
                "Does not guarantee availability",
                "Does not create a contractual commitment to purchase or participate",
                "Does not require you to participate in a future project"
              ]} />
              <p>We may contact you when relevant opportunities become available. Where appropriate, project participation may be subject to additional eligibility, verification, contractual or financial requirements.</p>

              <SectionHeader num="7" title="PROJECT INFORMATION" />
              <p>We make reasonable efforts to ensure that project information displayed on the website is accurate and current. However, automotive projects are subject to development, engineering, manufacturing, funding and commercial considerations.</p>
              <p className="mt-6 font-display text-xl text-bone">Accordingly:</p>
              <CardList items={[
                "Specifications may change",
                "Projected completion dates may change",
                "Costs may change",
                "Suppliers may change",
                "Project structures may change",
                "Vehicles may differ from preliminary images or renderings",
                "Projects may be postponed, changed or cancelled"
              ]} />
              <p className="text-sm text-bone/50 italic">Concept images, computer-generated imagery, renders and preliminary specifications are illustrative unless expressly stated otherwise.</p>

              <SectionHeader num="8" title="PROJECT PERFORMANCE" />
              <p>Syndicated Restomod does not guarantee that any particular project will:</p>
              <CardList items={[
                "Proceed",
                "Reach its proposed funding target",
                "Be completed within an estimated timeframe",
                "Achieve a particular specification",
                "Achieve a particular valuation",
                "Achieve a particular resale value",
                "Generate a financial return"
              ]} />
              <p className="font-semibold text-bone">Past project performance or vehicle values should not be interpreted as an indication of future results.</p>

              <SectionHeader num="9" title="VEHICLE OWNERSHIP AND ACCESS" />
              <p>Participation in a Syndicated Restomod project may provide rights of access, use or participation rather than conventional individual ownership of the underlying vehicle.</p>
              <p>The precise nature of those rights will depend upon the structure of the individual Syndicate.</p>
              <p className="mt-6">Where applicable, members may receive access to:</p>
              <CardList items={[
                "Track days",
                "Driving experiences",
                "Events",
                "Technical sessions",
                "Project visits",
                "Other member experiences"
              ]} cols={3} />
              <p>Access will be subject to the relevant project-specific terms.</p>

              <SectionHeader num="10" title="DRIVING AND AUTOMOTIVE EXPERIENCES" />
              <p>Participation in driving or automotive experiences involves inherent risks.</p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-display text-xl text-acid mb-4">Members may be required to:</h4>
                  <ul className="text-sm text-bone/70 space-y-3">
                    <li className="flex gap-2"><span>•</span> Hold an appropriate driving licence</li>
                    <li className="flex gap-2"><span>•</span> Satisfy minimum age requirements</li>
                    <li className="flex gap-2"><span>•</span> Comply with venue & vehicle requirements</li>
                    <li className="flex gap-2"><span>•</span> Complete relevant safety briefings</li>
                    <li className="flex gap-2"><span>•</span> Use appropriate safety equipment</li>
                    <li className="flex gap-2"><span>•</span> Comply with insurance requirements</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-display text-xl text-acid mb-4">We may refuse participation if:</h4>
                  <ul className="text-sm text-bone/70 space-y-3">
                    <li className="flex gap-2"><span>•</span> A participant is unfit to drive</li>
                    <li className="flex gap-2"><span>•</span> Under the influence of alcohol or drugs</li>
                    <li className="flex gap-2"><span>•</span> Behaving dangerously</li>
                    <li className="flex gap-2"><span>•</span> Failing to comply with safety instructions</li>
                    <li className="flex gap-2"><span>•</span> Otherwise presenting an unacceptable risk</li>
                  </ul>
                </div>
              </div>

              <SectionHeader num="11" title="CONTENT AND PROJECT DOCUMENTATION" />
              <p>Syndicated Restomod projects may be photographed, filmed and documented for promotional, editorial and educational purposes.</p>
              <p>By participating in an event or project activity, you acknowledge that photography or filming may take place. Where appropriate, separate consent or release arrangements may apply.</p>
              <p>We will not intentionally use your personal information for unrelated marketing purposes without an appropriate lawful basis.</p>

              <SectionHeader num="12" title="INTELLECTUAL PROPERTY" />
              <p>Unless otherwise stated, all intellectual property appearing on the Syndicated Restomod website belongs to us or is used under licence. This includes:</p>
              <CardList items={[
                "Name and branding",
                "Logos & Website design",
                "Text & Graphics",
                "Photographs & Videos",
                "Project materials & Original concepts",
                "Digital content & Software"
              ]} />
              <p>You may view and use website content for your personal, non-commercial purposes.</p>
              <div className="bg-ink/50 border border-white/5 p-6 rounded-2xl mt-6">
                <p className="font-display text-xl text-acid mb-4">You must not, without our prior written permission:</p>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-bone/70">
                  <li>• Reproduce substantial parts of the website</li>
                  <li>• Commercially exploit website content</li>
                  <li>• Copy or reproduce project documentation</li>
                  <li>• Use our branding</li>
                  <li>• Modify or create derivative works</li>
                  <li>• Scrape or systematically extract information</li>
                  <li>• Represent our content as your own</li>
                </ul>
              </div>
              <p className="mt-4 text-sm font-semibold">Nothing in these Terms transfers intellectual property ownership to you.</p>

              <SectionHeader num="13" title="USER CONTENT" />
              <p>If you submit material to us, including comments, photographs, ideas, feedback or other content, you confirm that:</p>
              <CardList items={[
                "You own or have the necessary rights to submit it",
                "It does not infringe another person's rights",
                "It is not unlawful or defamatory",
                "It does not contain malicious software"
              ]} />
              <p>You grant us a non-exclusive, worldwide, royalty-free licence to use, reproduce and display submitted content for the purposes of operating, promoting and developing Syndicated Restomod, subject to applicable privacy law.</p>
              <p>We may remove content that we reasonably believe breaches these Terms.</p>

              <SectionHeader num="14" title="ACCEPTABLE USE" />
              <p>You must not use the website to:</p>
              <CardList items={[
                "Commit or facilitate unlawful activity",
                "Attempt to gain unauthorised access to systems",
                "Introduce malware or harmful code",
                "Interfere with website operation",
                "Scrape information without permission",
                "Impersonate another person",
                "Transmit spam",
                "Distribute offensive or unlawful material",
                "Infringe intellectual property rights",
                "Attempt to circumvent security measures",
                "Otherwise misuse the platform"
              ]} />

              <SectionHeader num="15" title="THIRD-PARTY WEBSITES AND SERVICES" />
              <p>The website may contain links to third-party websites, services or platforms.</p>
              <p>We do not control those third parties and are not responsible for their availability, content, security, privacy practices, or terms of service.</p>
              <p>You should review the relevant third party's terms and privacy policy before using its services.</p>

              <SectionHeader num="16" title="PAYMENTS" />
              <p>Where the website permits payment for a service, event, membership or project opportunity, additional terms may apply.</p>
              <p>Any payment made in relation to an individual Syndicate will be governed by the applicable project documentation.</p>
              <p>Unless expressly stated otherwise, registering on the website or joining a waiting list does not require payment.</p>

              <SectionHeader num="17" title="CANCELLATION OF PROJECTS" />
              <p>Automotive development projects can involve significant engineering, manufacturing, funding and commercial dependencies. We therefore reserve the right to:</p>
              <CardList items={[
                "Modify a project",
                "Postpone or suspend a project",
                "Change project specifications",
                "Change suppliers",
                "Change the proposed delivery schedule",
                "Cancel a project"
              ]} />
              <p>Where you have entered into a separate contractual arrangement with us or another project entity, your rights in relation to cancellation will be determined by that agreement.</p>
              <p>Nothing in these Website Terms limits statutory consumer rights that cannot legally be excluded.</p>

              <SectionHeader num="18" title="WEBSITE AVAILABILITY" />
              <p>We aim to keep the website available and operational but do not guarantee uninterrupted access.</p>
              <p>The website may occasionally be unavailable because of maintenance, upgrades, technical failures, security incidents, hosting issues, third-party service interruptions, or circumstances outside our reasonable control.</p>

              <SectionHeader num="19" title="DISCLAIMER" />
              <p>To the maximum extent permitted by law, the website and its content are provided without warranties that:</p>
              <CardList items={[
                "The website will always be available",
                "Information will always be complete or error-free",
                "Project information will remain unchanged",
                "Projects will proceed as described",
                "The website will be free from technical defects"
              ]} />
              <p>Nothing in these Terms excludes statutory rights or protections that cannot legally be excluded.</p>

              <SectionHeader num="20" title="LIMITATION OF LIABILITY" />
              <p>Nothing in these Terms excludes or limits liability where it would be unlawful to do so.</p>
              <p>Subject to that limitation, we will not be responsible for losses that are:</p>
              <CardList items={[
                "Indirect",
                "Incidental",
                "Consequential",
                "Unforeseeable",
                "Not reasonably contemplated when these Terms were entered into"
              ]} />
              <p className="mt-6 font-semibold">Nothing in these Terms limits liability for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-bone/70">
                <li>Death or personal injury caused by negligence;</li>
                <li>Fraud or fraudulent misrepresentation; or</li>
                <li>Any other liability that cannot legally be excluded or limited.</li>
              </ul>
              <p className="mt-6 text-sm">Where you enter into a separate Syndicate agreement, the liability provisions of that agreement will apply to the relevant project.</p>

              <SectionHeader num="21" title="INDEMNITY" />
              <p>You agree to compensate us for reasonable losses, costs or liabilities arising from your unlawful use of the website or your deliberate or negligent breach of these Terms, to the extent permitted by law. This does not affect any statutory rights you may have.</p>

              <SectionHeader num="22" title="PRIVACY" />
              <p>Our collection and use of personal information is governed by our Privacy Policy. Please review our Privacy Policy for information about what personal data we collect, why we collect it, how we use it, how long we retain it, who we share it with, and your data protection rights.</p>

              <SectionHeader num="23" title="CHANGES TO THESE TERMS" />
              <p>We may update these Terms from time to time.</p>
              <p>When we make material changes, we may publish an updated version on the website and, where appropriate, notify registered users. Your continued use of the website following publication of revised Terms constitutes acceptance of those changes.</p>

              <SectionHeader num="24" title="SUSPENSION OR TERMINATION" />
              <p>We may suspend or terminate your access to the website where we reasonably believe that you have breached these Terms, have provided false information, have misused the platform, have engaged in unlawful activity, or pose a security or operational risk.</p>
              <p>You may stop using the website at any time. Termination of your website account does not automatically terminate any separate contractual relationship you may have in relation to a Syndicate.</p>

              <SectionHeader num="25" title="GOVERNING LAW" />
              <p>These Terms are governed by the laws of England and Wales. The courts of England and Wales will have jurisdiction over disputes arising from these Terms, subject to any mandatory rights you may have under applicable consumer protection legislation.</p>

              <SectionHeader num="26" title="CONTACT" />
              <div className="bg-ink/50 border border-white/10 p-8 rounded-3xl mt-6 inline-block">
                <ul className="space-y-2 text-sm text-bone/80">
                  <li className="font-display text-lg text-bone mb-2">Syndicated Restomod</li>
                  <li>[Legal Entity Name]</li>
                  <li>[Registered Office]</li>
                  <li>[Company Number]</li>
                  <li className="pt-2"><span className="text-acid">Email:</span> [contact email]</li>
                </ul>
              </div>

              <div className="bg-acid text-ink p-8 rounded-3xl mt-16 shadow-[0_0_40px_rgba(204,255,0,0.15)]">
                <h3 className="font-display text-2xl mb-6">IMPORTANT PROJECT-SPECIFIC TERMS</h3>
                <p className="mb-4">These Website Terms are intended to govern use of the Syndicated Restomod website. They are not intended to replace the detailed legal documentation governing participation in an individual Syndicate.</p>
                <p className="mb-4">Before accepting funds for a Syndicate, the relevant project should have its own documentation covering matters including:</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm mb-6 font-medium">
                  <div>• Legal ownership structure</div>
                  <div>• Member rights</div>
                  <div>• Payment & drawdown</div>
                  <div>• Funding thresholds</div>
                  <div>• Insufficient funding</div>
                  <div>• Project cancellation</div>
                  <div>• Vehicle use</div>
                  <div>• Insurance</div>
                  <div>• Maintenance</div>
                  <div>• Storage</div>
                  <div>• Member access</div>
                  <div>• Resale or disposal</div>
                  <div>• Treatment of losses</div>
                  <div>• Surplus proceeds</div>
                  <div>• Voting & decisions</div>
                  <div>• Liability</div>
                  <div>• Tax</div>
                  <div>• Regulatory & Exit</div>
                </div>
                <p className="font-semibold text-sm border-t border-ink/20 pt-6">By registering on Syndicated Restomod, you acknowledge that registration and expressions of interest are preliminary only and do not themselves create an entitlement to participate in any particular Syndicate.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
