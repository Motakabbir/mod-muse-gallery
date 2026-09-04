import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, useReveal } from "@/components/site";
import { fetchSeoMetadata, mapSeoToMeta } from "../lib/utils";
import React from "react";

export const Route = createFileRoute("/privacy-policy")({
  loader: async () => {
    const seo = await fetchSeoMetadata("privacy-policy", {
      title: "Privacy Policy | Syndicate",
      description: "Privacy Policy for Syndicate Restomod Build.",
      og_title: "Privacy Policy | Syndicate",
      og_description: "Privacy Policy for Syndicate Restomod Build.",
    });
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Privacy Policy | Syndicate",
      description: "Privacy Policy for Syndicate Restomod Build.",
      og_title: "Privacy Policy | Syndicate",
      og_description: "Privacy Policy for Syndicate Restomod Build.",
    }),
  }),
  component: PrivacyPolicy,
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

function SubHeader({ title }: { title: string }) {
  return (
    <h3 className="font-display text-xl text-acid mt-12 mb-6 border-l-2 border-acid pl-4">
      {title}
    </h3>
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

function PrivacyPolicy() {
  useReveal();
  
  return (
    <main className="bg-ink text-bone overflow-x-hidden min-h-screen flex flex-col">
      <Nav />
      <section className="relative pt-40 pb-32 px-6 flex-grow">
        <div className="mx-auto max-w-4xl">
          <div className="reveal">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">Legal</div>
            <h1 className="font-display text-5xl md:text-7xl mb-12 text-gradient-bone">Privacy Policy</h1>
            
            <div className="space-y-6 text-bone/70 leading-relaxed font-sans text-lg">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-16">
                <p className="font-mono text-xs text-acid uppercase tracking-widest mb-4">Last updated: [31 August 2026]</p>
                <p className="mb-4">Syndicated Restomod respects your privacy and is committed to protecting your personal data.</p>
                <p className="mb-6">This Privacy Policy explains how we collect, use, store and protect your personal information when you visit or use the Syndicated Restomod website, register for an account, join our waiting list, express interest in a project, contact us or participate in a Syndicated Restomod project.</p>
                
                <div className="bg-ink/50 p-6 rounded-xl border border-white/5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-bone/50 mb-3">Data Controller</p>
                  <p className="mb-2">For the purposes of UK data protection legislation, the data controller is:</p>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm text-bone mt-4">
                    <div><strong>Legal Entity:</strong> [Sarthe Cars Ltd / Legal Entity Name]</div>
                    <div><strong>Company Number:</strong> [●]</div>
                    <div><strong>Registered Office:</strong> [●]</div>
                    <div><strong>Email:</strong> [privacy email]</div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-bone/50 italic">In this policy, "Syndicated Restomod", "we", "us" and "our" refers to the relevant operating entity.</p>
              </div>

              <SectionHeader num="1" title="WHAT INFORMATION WE COLLECT" />
              <p>Depending on how you interact with Syndicated Restomod, we may collect the following information.</p>
              
              <SubHeader title="Information you provide to us" />
              <p>This may include:</p>
              <CardList items={[
                "Your name",
                "Email address",
                "Telephone number",
                "Postal address",
                "Country of residence",
                "Information provided when creating an account",
                "Information provided when joining a waiting list",
                "Information about your automotive interests",
                "Information relating to your interest in particular projects",
                "Communications and correspondence with us",
                "Information provided when registering for events or experiences",
                "Information relating to your participation in a Syndicate",
                "Other information you voluntarily provide"
              ]} />
              <p className="text-sm bg-acid/10 text-acid p-4 rounded-xl border border-acid/20">We will only request information that is reasonably necessary for the relevant purpose.</p>
              
              <SubHeader title="Information collected automatically" />
              <p>When you visit our website, we may automatically collect information such as:</p>
              <CardList items={[
                "IP address",
                "Browser type",
                "Device type",
                "Operating system",
                "Pages visited",
                "Approximate location derived from IP address",
                "Referring website",
                "Date and time of visits",
                "Website interactions",
                "Technical information concerning how you use our website"
              ]} />
              <p>This information may be collected using cookies, analytics technologies and similar tools.</p>

              <SectionHeader num="2" title="HOW WE USE YOUR INFORMATION" />
              <p>We may use your personal data for the following purposes:</p>
              
              <SubHeader title="Website operation" />
              <p>To:</p>
              <CardList items={[
                "Provide and operate the Syndicated Restomod website",
                "Create and manage user accounts",
                "Authenticate users",
                "Maintain website security",
                "Respond to enquiries",
                "Provide services requested by you"
              ]} />
              
              <SubHeader title="Waitlists and project notifications" />
              <p>If you join a waiting list or register your interest in a future project, we may use your information to:</p>
              <CardList items={[
                "Confirm your registration",
                "Notify you when relevant projects become available",
                "Provide project information",
                "Invite you to register for a Syndicate",
                "Communicate changes or updates to projects",
                "Understand demand for future projects"
              ]} />
              
              <SubHeader title="Syndicate administration" />
              <p>If you become a member of a Syndicated Restomod project, we may use your information to administer:</p>
              <CardList items={[
                "Membership and access rights",
                "Project communications",
                "Events and driving experiences",
                "Bookings",
                "Member communications",
                "Contractual arrangements",
                "Relevant financial or administrative requirements"
              ]} />
              
              <SubHeader title="Marketing" />
              <p>Where permitted by law and, where required, with your consent, we may contact you about:</p>
              <CardList items={[
                "New Syndicated Restomod projects",
                "Future Syndicates",
                "Automotive experiences and events",
                "News, updates, and partner opportunities",
                "Related products or services"
              ]} />
              <p className="text-sm">You can unsubscribe from marketing communications at any time.</p>

              <SectionHeader num="3" title="OUR LEGAL BASIS FOR PROCESSING" />
              <p>Under UK GDPR, we must have a lawful basis for processing personal data. Depending on the circumstances, we may rely on:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-display text-xl text-acid mb-3">Consent</h4>
                  <p className="text-sm text-bone/70">Where you have actively agreed to receive marketing communications or have otherwise given consent to a specific use of your data. You can withdraw consent at any time.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-display text-xl text-acid mb-3">Contract</h4>
                  <p className="text-sm text-bone/70">Where processing is necessary to enter into or perform an agreement with you. For example, this may apply where you become a member of a Syndicated Restomod project.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-display text-xl text-acid mb-3">Legitimate Interests</h4>
                  <p className="text-sm text-bone/70 mb-3">Where reasonably necessary for our legitimate business interests, provided those do not override your fundamental rights. Examples include:</p>
                  <ul className="text-sm text-bone/60 list-disc pl-4 space-y-1">
                    <li>Operating and improving our website</li>
                    <li>Understanding interest in projects</li>
                    <li>Maintaining security</li>
                    <li>Communicating with existing contacts</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-display text-xl text-acid mb-3">Legal Obligation</h4>
                  <p className="text-sm text-bone/70">We may process information where necessary to comply with a legal or regulatory obligation.</p>
                </div>
              </div>

              <SectionHeader num="4" title="MARKETING COMMUNICATIONS" />
              <p>If you register your interest in Syndicated Restomod or join a project waiting list, we may send you communications relating to that registration. Where legally permitted, we may also send information about future projects and related opportunities.</p>
              <p>Where consent is required, we will obtain that consent before sending direct marketing.</p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-6">
                <p className="font-display text-lg mb-4 text-bone">You can unsubscribe at any time by:</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-ink border border-white/10 p-4 rounded-xl flex items-center gap-3">
                    <div className="text-acid">✉</div>
                    <span className="text-sm">Using the unsubscribe link in our emails</span>
                  </div>
                  <div className="flex-1 bg-ink border border-white/10 p-4 rounded-xl flex items-center gap-3">
                    <div className="text-acid">✎</div>
                    <span className="text-sm">Contacting us at [privacy email]</span>
                  </div>
                </div>
              </div>

              <SectionHeader num="5" title="COOKIES" />
              <p>Our website may use cookies and similar technologies to:</p>
              <CardList items={[
                "Make the website function correctly",
                "Remember preferences",
                "Understand how visitors use the website",
                "Measure website performance",
                "Improve user experience",
                "Support marketing activities where permitted"
              ]} />
              <p>Some cookies may be placed by third-party service providers. Where required by law, we will ask for your consent before placing non-essential cookies. You can manage preferences through our cookie settings or your browser.</p>

              <SectionHeader num="6" title="THIRD-PARTY SERVICE PROVIDERS" />
              <p>We may use trusted third-party service providers to operate parts of the platform, including:</p>
              <CardList items={[
                "Website hosting & Cloud storage",
                "Customer relationship management",
                "Email delivery & Marketing technology",
                "Analytics & Website security",
                "Payment processing",
                "Account authentication & Event management"
              ]} />
              <p className="text-sm text-bone/60 mt-4">These providers may process personal data on our behalf and will only be permitted to process it in accordance with applicable data protection requirements. A current list may be available on request.</p>

              <SectionHeader num="7" title="SHARING YOUR INFORMATION" />
              <p className="text-xl text-acid mb-6">We do not sell your personal information.</p>
              <p>We may share information where reasonably necessary with:</p>
              <CardList items={[
                "Companies within our corporate group",
                "Professional advisers",
                "Technology, website and hosting providers",
                "Payment providers",
                "Project partners, event or experience providers",
                "Insurers",
                "Legal or regulatory authorities where required",
                "Prospective purchasers or investors in connection with a corporate transaction"
              ]} />

              <SectionHeader num="8" title="PROJECT PARTNERS" />
              <p>Individual Syndicated Restomod projects may involve specialist automotive companies, manufacturers, engineering companies, event providers and other partners.</p>
              <p>We will only share member information with such parties where there is a legitimate reason, such as:</p>
              <CardList items={[
                "Arranging a member experience",
                "Administering an event",
                "Fulfilling a contractual obligation",
                "Providing a service requested by you",
                "Where you have provided appropriate consent"
              ]} />

              <SectionHeader num="9" title="INTERNATIONAL DATA TRANSFERS" />
              <p>Some of our service providers may operate outside the United Kingdom. Where personal data is transferred outside the UK, we will take appropriate steps to ensure that the transfer complies with applicable UK data protection law. This may include relying on:</p>
              <CardList items={[
                "UK adequacy regulations",
                "Appropriate contractual safeguards",
                "The UK International Data Transfer Agreement",
                "Another legally recognised transfer mechanism"
              ]} />

              <SectionHeader num="10" title="HOW LONG WE KEEP YOUR INFORMATION" />
              <p>We will retain personal information only for as long as reasonably necessary for the purposes for which it was collected. Retention periods may vary:</p>
              <div className="space-y-4 mt-6">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3 font-display text-acid">Waiting Lists</div>
                  <div className="md:w-2/3 text-sm text-bone/80">Retained while the relevant project or future opportunity remains active.</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3 font-display text-acid">Accounts</div>
                  <div className="md:w-2/3 text-sm text-bone/80">Retained while your account remains active.</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3 font-display text-acid">Financial Records</div>
                  <div className="md:w-2/3 text-sm text-bone/80">Retained for longer where required by law.</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3 font-display text-acid">Marketing</div>
                  <div className="md:w-2/3 text-sm text-bone/80">Retained until you unsubscribe or we determine it is no longer required.</div>
                </div>
              </div>

              <SectionHeader num="11" title="DATA SECURITY" />
              <p>We take reasonable technical and organisational measures to protect personal information against unauthorised access, accidental loss, destruction, alteration, and disclosure.</p>
              <div className="bg-acid/10 border border-acid/20 p-6 rounded-2xl mt-6 flex gap-4 items-start">
                <div className="text-acid text-2xl">⚠</div>
                <p className="text-sm text-bone/90">However, no internet-based service can be guaranteed to be completely secure. You are responsible for keeping any account passwords or login credentials confidential.</p>
              </div>

              <SectionHeader num="12" title="YOUR DATA PROTECTION RIGHTS" />
              <p>Subject to certain legal conditions and exemptions, you have rights under UK data protection law including:</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { r: "Right of access", d: "Request a copy of the personal information we hold about you." },
                  { r: "Right to rectification", d: "Ask us to correct inaccurate or incomplete information." },
                  { r: "Right to erasure", d: "Ask us to delete your personal information in certain circumstances." },
                  { r: "Right to restrict processing", d: "Ask us to restrict how we process your information." },
                  { r: "Right to data portability", d: "Request your information in a structured, machine-readable format." },
                  { r: "Right to object", d: "Object to certain types of processing, including direct marketing." },
                  { r: "Right to withdraw consent", d: "Where we rely on consent, you may withdraw it at any time." },
                ].map(r => (
                  <div key={r.r} className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <div className="font-display text-acid mb-2">{r.r}</div>
                    <div className="text-sm text-bone/70">{r.d}</div>
                  </div>
                ))}
              </div>

              <SectionHeader num="13" title="HOW TO EXERCISE YOUR RIGHTS" />
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl text-center">
                <p className="text-lg mb-6">To exercise any of your rights, please contact the Privacy Team:</p>
                <a href="mailto:[privacy email]" className="inline-block bg-acid text-ink font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-bone transition-colors">
                  Email [privacy email]
                </a>
                <p className="text-sm text-bone/50 mt-6 max-w-md mx-auto">We may need to verify your identity before responding. We normally respond to valid requests within one month.</p>
              </div>

              <SectionHeader num="14" title="CHILDREN" />
              <p>Syndicated Restomod is not intended to collect personal information from children. If you are under 18, you should not register for an account or provide personal information without appropriate parental or guardian involvement where required.</p>

              <SectionHeader num="15" title="LINKS TO OTHER WEBSITES" />
              <p>Our website may contain links to third-party websites. Those websites operate independently from us and may have their own privacy policies. We are not responsible for the privacy practices of third-party websites.</p>

              <SectionHeader num="16" title="CHANGES TO THIS POLICY" />
              <p>We may update this Privacy Policy from time to time to reflect changes to our services, technology, legal requirements, or how we process personal data. The latest version will be published on this page with the relevant "Last updated" date.</p>

              <SectionHeader num="17" title="COMPLAINTS" />
              <p>If you have concerns about how we process your personal information, please contact us first. You also have the right to complain to the UK's data protection regulator:</p>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mt-6 inline-block">
                <div className="font-display text-xl mb-2 text-bone">Information Commissioner's Office (ICO)</div>
                <a href="https://ico.org.uk/" target="_blank" rel="noreferrer" className="text-acid hover:underline">https://ico.org.uk/</a>
              </div>

              <SectionHeader num="18" title="CONTACT US" />
              <div className="grid sm:grid-cols-2 gap-8 bg-ink/50 border border-white/10 p-8 rounded-3xl">
                <div>
                  <h4 className="font-mono text-xs text-acid uppercase tracking-widest mb-4">Company Details</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="font-display text-lg text-bone">Syndicated Restomod</li>
                    <li>[Legal entity name]</li>
                    <li>[Registered address]</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-acid uppercase tracking-widest mb-4">Get in Touch</h4>
                  <ul className="space-y-2 text-sm">
                    <li><span className="text-bone/50">Email:</span> [Email address]</li>
                    <li><span className="text-bone/50">Phone:</span> [Telephone number]</li>
                    <li><span className="text-bone/50">Privacy Contact:</span> [privacy email]</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
