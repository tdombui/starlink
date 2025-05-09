"use client";
import Image from "next/image";
import { useActiveSection } from "@/hooks/useActiveSelection";
import { Trophy, Rocket } from "lucide-react"; 
import LightboxImage from '@/app/components/LightboxImage';
import RefundSimulator from '@/app/components/RefundSimulator';
import RefundFlowSimulator from '@/app/components/RefundFlowSimulator';
// import RefundFlowSnapshot from '@/app/components/RefundFlowSnapshot';

function ScrollLink({
  href,
  id,
  activeSection,
  children,
}: {
  href: string;
  id: string;
  activeSection: string;
  children: React.ReactNode;
}) {
  const isActive = activeSection === id;
  return (
    <a href={href} className="flex items-center group gap-2 relative">
      {/* Dot */}
      <span
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          isActive ? "bg-neutral-200 scale-125" : "border border-white/50"
        }`}
      />
      {/* Label */}
      <span
        className={`text-sm transition-colors ${
          isActive ? "text-neutral-200 font-semibold" : "text-white/60 group-hover:text-white"
        }`}
      >
        {children}
      </span>
    </a>
  );
}

export default function Home() {
  const activeSection = useActiveSection();

  return (
    <div className="bg-black w-full min-h-screen px-4 py-6 space-y-6">
      
  {/* Scrollspy Nav */}
  <nav className="fixed top-1/4 left-4 hidden sm:flex flex-col text-white z-20">
    <div className="relative flex flex-col gap-y-6 pl-6 py-4 min-h-[100px]">
      {/* Vertical line */}
      <div className="absolute left-1 top-0 h-full w-px bg-white/20" />
      <ScrollLink href="#about" id="about" activeSection={activeSection}>Who I Am</ScrollLink>
      <ScrollLink href="#onboarding-plan" id="onboarding-plan" activeSection={activeSection}>30–60 Day Plan</ScrollLink>
      <ScrollLink href="#program-spotlight" id="program-spotlight" activeSection={activeSection}>Program Spotlight</ScrollLink>

    </div>
</nav>

{/* Mobile dot-only nav */}
<nav className="fixed top-1/4 left-2 flex sm:hidden flex-col items-center gap-6 z-20">
  <div className="relative h-full flex flex-col items-center gap-y-10 py-4">
    {/* Vertical line */}
    <div className="absolute left-1 top-0 h-full w-px bg-white/20" />
    {/* Dot-only scroll links */}
    {["about", "onboarding-plan", "program-spotlight"].map((id) => (
      <a key={id} href={`#${id}`}>
        <span
          className={`w-3 h-3 rounded-full block transition-all duration-300 ${
            activeSection === id ? "bg-neutral-200 scale-125" : "border border-white/50"
          }`}
        />
      </a>
    ))}
  </div>
</nav>
<div className="pl-8 pr-4 sm:pl-28 md:pl-18 lg:pl-2 w-full">

<main className="pt-[10rem] pl-8 pr-4 sm:pl-26 max-w-3xl mx-auto">
  
    {/* Top Navbar */}
    <nav className="fixed top-0 left-0 w-full z-40 border-b border-white/10 px-4 py-3 flex flex-col items-center text-left bg-[rgba(0,0,0,0.9)] shadow-black/60 shadow-md backdrop-blur">
    <div className="flex items-center gap-3 justify-center ">
    <Image
    src="/starlink-logo.png"
    alt="Starlink logo"
    width={50}
    height={50}
    priority
    />
    <h1 className="text-6xl sm:text-5xl font-bold">Starlink</h1>
    </div>
    <p className="text-xs sm:text-sm font-medium text-white/80 mt-4 mb-4">
    Dominick Bui for Supervisor, Starlink Enterprise Customer Support
    </p>
    </nav>


  {/* ABOUT */}
  <section id="about" className="scroll-mt-36 w-full min-h-[80vh] max-w-screen-md text-left mt-8">
  <h1 className="text-4xl font-bold mb-2">Who I Am</h1>
  <p className="text-2xl mb-6">
    Customer Experience & Ops leader with a systems-first and customer-centric mindset.
  </p>
<br/>
  <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
    {/* Image */}
    <div className="sm:w-80 sm:h-80 md:w-70 md:h-90 w-full overflow-hidden border border-white/15 shadow-lg shrink-0 mt-4"> 
      <Image
        src="/IMGP054612.png"
        alt="Dominick Bui"
        width={400}
        height={400}
        className="object-cover w-full h-full"
      />
    </div>

    {/* First paragraph beside image */}
    <div className="flex-1 text-xl text-white/85 leading-relaxed mt-4 sm:mt-0">
      I’m a customer experience leader with a background in building high-performance support teams and operational systems from the ground up. At Back Market, I helped launch the U.S.  Business Process Outsourcing (BPO) call center during peak COVID, scaling a LATAM-based team of 25 and leading programs that improved customer satisfaction, brand loyalty, team performance, and operational excellence.
    </div>
  </div>

  {/* Remaining paragraphs below image */}
  <div className="mt-6 text-xl text-white/85 leading-relaxed space-y-4">
    <p>
      From recovering $250K+ in failed PayPal refunds through a manual-first but scalable CX workflow, to launching onboarding programs, training pipelines, and QA processes that improved resolution times and reduced agent turnover, my approach combines hands-on execution with systems thinking.
    </p>
    <p>
      I’ve collaborated cross-functionally with Training, QA, Finance, Payments, Product, Engineering, and Account Management, and I’m most energized when leading teams through ambiguity to deliver high-quality outcomes at scale.
    </p>
    <p>
      I thrive in fast-paced, technical environments and bring a bias for action, clarity, and continuous improvement—especially when the stakes are high and the mission is bold.
    </p>
    <br/>

            {/* ACHIEVEMENTS */}
            <h3 className="text-xl font-semibold mb-1 flex items-center gap-2"><Trophy className="w-5 h-5" />Achievements </h3>
      <ul className="text-lg list-disc ml-6 text-md opacity-90 space-y-1 mt-2">
        <li>Launched and scaled a BPO call center from 0 to 60+ agents at Back Market during peak COVID; maintained &gt; 80% CSAT across 1,000+ daily tickets while reducing agent turnover to &lt; 35%.</li> 
        <li>Reduced false-positive product returns by 5–7% (impacting $30K–$60K/month in GMV) by partnering with QA, Training and Engineering to create internal tooling and Knowledge Base, customer-facing guides, and an agent training module.</li>
        <li>Led promotional sale with Sony partnership during Black Friday—all 1,300 units sold out in 2 weeks and generated $220,000+ in Gross Merchandise Value (GMV).</li>
        <li>Built and ran a warranty resolution process for ‘Dead Merchants’—vendors who suddenly vanished from the platform with active warranties still on their orders—managing repairs, refunds, and customer trust using only manual SQL queries and self-built workflows.</li>
        <li>Contained a counterfeit product incident (AirPods) affecting hundreds of orders and rapidly deployed an ad hoc standard operating procedure to treat affected cases; CSAT exceeded 80%.</li>
        <li>Led the onboarding and ramp up of a new Technical Support team at a SaaS (advertising tech) company; coordinating coaching sessions, shadowing plans, and performance benchmarks to ensure successful ramp up.</li> 
      </ul>
      <br />
            <h3 className="text-xl font-semibold mb-1 flex items-center gap-2"><Rocket className="w-5 h-5" /> Why I want to work at SpaceX </h3>
      <p className="text-lg list-disc ml-6 text-md opacity-90 space-y-1 mt-2">I’ve spent years building support systems and training CX teams—but what excites me about Starlink is the mission: expanding access to the internet itself. This role goes beyond typical customer ops—it’s about solving real infrastructure challenges at a global scale.

      <br/><br/>I thrive in fast-moving, hands-on environments where I can build, improve, and collaborate across teams. Starlink gives me the chance to apply what I know while contributing to something far bigger than internal metrics—and that’s what motivates me.</p>

  </div>
</section>


  <hr className="border-t border-white/50 my-12" />

    {/* ONBOARDING PLAN */}
    <section id="onboarding-plan" className="scroll-mt-36 w-full min-h-[80vh] max-w-screen-md text-left mb-8">
  <h2 className="text-4xl font-semibold mb-4">First 30–60-day Plan</h2>
  <h3 className="text-xl font-semibold">Objectives</h3>
  <div className="text-md leading-relaxed mb-6">
  <ul className="list-disc ml-5 mt-1 text-white/85 text-base">

    <li>Build trust and rapport with team, understand existing Enterprise Support ops, and audit tools, processes, and feedback loops. </li>
    <li>Align with Enterprise Support team to first prioritize meaningful reporting cadence and team-building and chemistry, and then focus on planning for and driving improvements.</li>
    <li>Complete Enterprise Support onboarding process.</li>
    </ul>
  </div>

  <div className="relative flex">
    {/* Vertical line */}
    <div className="absolute left-3 top-0 h-full w-px bg-white/30" />

  {/* Timeline content */}
  <div className="flex flex-col pl-12 ">
      {[
        {
          week: 1,
          title: "Week 1",
          content: (
            <>
              <p className="text-white">1. Onboard with HR and IT for tools access.<br />2. Intro meetings with Enterprise Support leadership and team.</p>   
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
                <li>Meet Enterprise Support leadership and team.</li>
                <li>Build trust and rapport with team; learn challenges, goals, and priorities.</li>
                <li>Map Enterprise Support org structure.</li>
                <li>Attend current syncs and meetings.</li>
              </ul>
            <p className="text-white">3. Access ticketing system, Knowledge Base, performance and metrics dashboards, and other tools and resources.</p>
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
                <li>Explore Knowledge Base to understand internal processes and standard operating procedures.</li>
                <li>Explore policies, service-level agreements, regulatory requirements, and other documentation regarding Enterprise Support.</li>
              </ul>
<p className="text-white">4. Begin Enterprise Support Onboarding academy/process (if applicable).</p>
            </>
          )
        },
        {
          week: 2,
          title: "Week 2",
          content: (
            <>
              <p className="text-white">1. Continue intro meetings with Enterprise Support leadership and team, as well as key stakeholders. </p> 
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Meet key stakeholders and cross-functional collaborators (e.g., Enterprise Account Manager, etc.)</li>             
              <li>Questions for direct reports: (1) Preferred method of communication for serious feedback? (2) Why did you decide to work here? (3) What excites you about working here? (4) Career goals?</li>         
              <li>Map who owns what across the org (e.g., support tools, reporting, internal training, etc.)</li>
              <li>Identify Subject Matter Experts and top performers across the team.</li>
              <li>Outline ticket handoff process between teammates and regions.</li>
              <li>Attend current syncs and meetings.</li>

              </ul>
              <p className="text-white">2. Continue deep diving into ticketing system, Knowledge Base, performance and metrics dashboards, and other tools and resources.</p>  
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
                <li>Shadow Enterprise Support agent on resolving common issues.</li>
                <li>Shadow Subject Matter Expert on resolving complex issues.</li>
                <li>Explore Knowledge Base to understand internal processes and standard operating procedures.</li>
                <li>Explore performance metrics and dashboards.</li>
              </ul>              
                <p className="text-white">3. Review existing quality assurance processes.</p>  
                <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
                <li>Review policies, ISO 9001 compliance processes, service-level agreements, regulatory requirements, and other documentation involving Enterprise Support.</li>
                <li>Understand current QA metrics, coaching practices, and feedback mechanisms.</li>
                <li>Shadow team quality reviews, coaching sessions, and other relevant meetings.</li> 
              </ul>
              <p className="text-white">4. Continue Enterprise Support Onboarding academy/process (if applicable).</p>  
              <p className="text-white">5. Resolve first enterprise support tickets with guidance from leadership and team.</p>
            </>
          )
        },
        {
          week: 3,
          title: "Week 3",
          content: (
            <>
<p className="text-white">1. Schedule weekly syncs with leadership. </p> 
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Weekly syncs with leadership to review blockers, challenges, wins, and opportunities for improvement.</li>                      
              <li>Analyze ticket handoff process between teammates and regions and plan for improvements to drive Support quality and efficiency.</li>                      
              </ul>
              <p className="text-white">2. Schedule weekly syncs with direct reports and regular syncs with frequent collaborators. </p> 
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Weekly individual and team syncs to review blockers, challenges, wins, and opportunities for improvement.</li>
              <li>Bi-weekly syncs with frequent collaborators to review opportunities for improvement.</li>
              <li>Identify potential areas for learning to help them grow, as well as gaps in coverage or skill sets.
              </li>
              <li>Identify Subject Matter Experts, top performers, and members who need improvement and coaching across the team.
              </li>
              <li>Begin analysis of call/ticket volume patterns to optimize staffing.
              </li>
              </ul>
              <p className="text-white">3. Explore edge-case, high-friction tickets to understand root causes and begin planning for improvements.</p>    
              <p className="text-white">4. Continue review of existing quality assurance processes.</p>   
              <p className="text-white">5. Continue Enterprise Support Onboarding academy/process (if applicable).</p>
              
              <p className="text-white">6. Resolve enterprise support tickets.</p>    
            </>
          )
        },
        {
          week: 4,
          title: "Week 4",
          content: 
          <>
          <p className="text-white">
            1. Establish enterprise feedback loop and reporting cadence.</p>
            <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Leverage exisiting dashboards to track performance, and develop new dashboards as needed to monitor relevant metrics.</li>
              <li>Share dashboards in leadership syncs and team meetings to align on priorities and identify opportunities for improvement.</li>
              <li>Use team&#39;s goals to understand which details to dig into.</li>
              </ul>
            <p className="text-white">2. Continue weekly syncs with leadership and direct reports.</p>
            <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Continue exploring areas for improvement and help them grow in these areas via project work.</li> 
              <li>Adjust frequency of meetings as needed.</li> 
              </ul>
            <p className="text-white">3. Begin weekly team performance reviews.</p>
            <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Use team performance data to identify strengths and opportunities for improvement.</li> 
                            <li>Continue analysis of call/ticket volume patterns to optimize staffing.
              </li>
              </ul>
              <p className="text-white">4. Continue Enterprise Support Onboarding academy/process (if applicable).</p>  
              <p className="text-white">
              5. Identify areas for improvement of Onboarding documentation and update as needed.</p>
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Edit Onboarding documentation to reflect processes or tools that have changed since the last hire, or clarify points found confusing by new hires.</li> 
              </ul>
            <p className="text-white">
              6. Resolve enterprise support tickets.</p>
          </>
        },
        {
          week: 5,
          title: "Week 5",
          content:           
          <>
            <p className="text-white">
            1. Establish enterprise feedback loop and reporting cadence.</p>

            <p className="text-white">
              2. Continue weekly syncs with leadership and direct reports</p>
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Use performance dashboards to identify strengths and provide positive feedback to team.</li> 
              <li>Continue exploring areas for improvement and help them grow in these areas via project work.</li> 
              <li>Review blockers, challenges, and wins.</li> 
              </ul>
            <p className="text-white">
              3. Continue weekly team performance reviews.</p>
              <p className="text-white">4. Continue Enterprise Support Onboarding academy/process (if applicable).</p>  
              <p className="text-white">
              5. Identify areas for improvement of Onboarding documentation and update as needed.</p>
              <p className="text-white">
              6. Resolve enterprise support tickets and use data to plan for and drive improvements.</p>
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Understand root cause of new and trending issues to plan for improvements.</li> 
              <li>Explore opportunities to improve triage methods and troubleshooting playbooks that improve support efficiency and quality.</li> 
              </ul>

          </>
        },
        {
          week: 6,
          title: "Week 6",
          content: 
          <>
          <p className="text-white">
            1. Pilot small changes to workflows or QA process.</p>
            <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Leverage QA insights to refine SOPs, streamline triage steps, and improve Knowledge Base clarity. Test lightweight changes to workflows or the QA rubric to reduce friction and improve resolution quality.</li> 
              </ul>
            <p className="text-white">2. Continue coaching with low performers and highlight quick wins in team standups.</p>
            <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Continue exploring areas for improvement and help them grow in these areas via project work, external learning, or additional mentoring.</li> 
              </ul>
            <p className="text-white">
              3. Host sessions with team to gather feedback on onboarding, tooling, and process friction.</p>
            <p className="text-white">
              4. Host a short retrospective session with agents and team leads to gather feedback on onboarding, tooling, and process friction.</p>
          </>
        },
        {
          week: 7,
          title: "Week 7",
          content: 
          <>
          <p className="text-white">
                1. Begin shift audit-identify potential coverage gaps, idle time, or overcapacity.</p>
                <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Analyze coverage across current shifts (Bravo, Falcon, etc.), identify idle time, under/overstaffed hours, and friction in handoffs.</li> 
              <li>Review handoff efficiency between sites (Texas, California, Washington) and coverage blind spots (nights/weekends).</li> 
              </ul>

            <p className="text-white">
                2. Align with leadership and cross-functional stakeholders (Engineering, AM, Product) on proposed improvements and get buy-in for long-term fixes</p>
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Tooling friction (e.g., manual processes, internal bug handling).</li> 
              <li>Product knowledge gaps or documentation needs.</li> 
              <li>Long-term fixes requiring engineering or tooling support.</li> 
              </ul>
            <p className="text-white">
                3. Revisit SLAs, internal playbooks, and shift coverage plans—propose draft updates based on observations and team input.</p>
                <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Tooling friction (e.g., manual processes, internal bug handling).</li> 
              <li>Suggest new or refined escalation workflows, triage logic, and QA rubrics.</li> 
              <li>Propose SLA updates based on agent feedback and coverage audit.</li> 
              </ul>
          </>
        },
        {
          week: 8,
          title: "Week 8",
          content: (
            <>
              <p className="text-white">1. Define a repeatable cadence for team reviews, stakeholder updates, and retros.</p>
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Lock in weekly/biweekly rituals: (1) Agent standups, team retros and scrums, QA and Training syncs; (2) Monthly or quarterly leadership updates; (3) Recurring reviews of dashboards or CSAT trends.</li> 
              </ul>
              <p className="text-white">2. Syncs with team to gather feedback on my leadership and impact so far.</p>
              <p className="text-white">3. Identify longer-term tooling or workflow gaps that require engineering or vendor input.</p>
              <p className="text-white">4. Prepare insights for performance calibration or promotion recommendations if applicable.</p>
              <p className="text-white">5. Deliverable: Executive-ready summary deck</p>
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Summary of first 60 days</li> 
              <li>Quick wins</li> 
              <li>Top opportunities and challenges identified</li> 
              </ul>
              <p className="text-white">6. Q3—Q4 Roadmap</p>
              <ul className="list-disc ml-5 mt-1 text-white/60 text-base">
              <li>Build a tactical roadmap aligned with leadership goals, including: (1) agent enablement, (2) tooling and process efficiency, (3) shift and staffing optimization, (4) KPI refinement, (5) owners and deadlines for initiatives.</li>    
              </ul>
            </>
          )
        },
      ].map(({ week, title, content }) => (
        <div key={week} className="relative mb-6 flex items-start">
          {/* Dot intersects line */}
          <div className="absolute -left-[43px] top-1.5">
            <div className="w-4 h-4 bg-white border-2 border-black rounded-full" />
          </div>
          {/* Text */}
          <div>
            <p className="text-base sm:text-xl font-bold text-white underline">{title}</p>
            <div className="text-base sm:text-lg text-white/70">{content}</div>
          </div>
      
        </div>
      ))}
                
    </div>
            </div>
            <div className="text-md leading-relaxed mb-6">
<br/>
            Of course this is a tentative plan and will be adapted based on the most urgent needs of Leadership and the team. My topmost priority in the first few weeks is to build trust, understand how the team works, and meet them where they are—so I can support them effectively and be their biggest advocate. From there, it’s about making sure we hit our KPIs and SLAs—and ideally, exceed them. But more than that, I want to help foster an environment where the team feels energized and proud of their work, not just productive. When people are connected to the mission and to each other, they naturally perform at their best—and that’s the kind of environment I’ll work tirelessly to build.            </div>

</section>

    <hr className="border-t border-white/50 my-12" />

{/* PROGRAM SPOTLIGHT: PAYPAL REFUND FAILURES*/}
    <section id="program-spotlight" className="scroll-mt-36 w-full min-h-[80vh] max-w-screen-md text-left sm:text-left">
      <h2 className="text-4xl font-semibold mb-1">Program Spotlight</h2>
      <br/>
      <h3 className="text-3xl font-semibold mb-1">PayPal Transformation: Enterprise change to payment infrastructure
      </h3>       
      
      <br />
      <br />
      <br />
{/* PROGRAM STATEMENT */}
      <h3 className="text-3xl font-semibold mb-1">Situation</h3>
      <p className="text-md leading-relaxed mb-2">
Due to a limitation in a legacy PayPal integration, refunds for orders older than 180 days would silently fail, leaving customers without reimbursement and agents with little visibility into the failure. 
<br/>
<br/>
This resulted in prolonged resolution times (7–14 days), excessive touch points, inefficient escalations, duplicate refund attempts, elevated customer dissatisfaction, and revenue loss—creating operational inefficiencies, eroding customer trust during critical support moments, and technical debt. 
      </p>            <br />            <LightboxImage src="/viz/paypal-flow-before.png" alt="PayPal Workflow" />
 <p className="text-md font-bold leading-relaxed mt-2">
        Workflow before program:
      </p>
 <ul className="list-disc ml-6 text-md opacity-80 space-y-1">
        <li>Average resolution time: ~7-14 days</li> 
        <li>Touchpoints per ticket: 10–20+, often with escalations and back-and-forth across teams</li> 
        <li>CSAT for these tickets: significantly below average, often accompanied by frustration and lost trust</li>
        <li>In some cases, Support team in France processed double refunds in error, requiring our team to reach out to customers and request them to return the duplicate refund—which created an awful customer experience</li>
      </ul>
      <br />            <h3 className="text-xl font-semibold mb-1">Key metrics before program launch</h3>

      <LightboxImage  src="/viz/kpi_before_dashboard.png" alt="PayPal Workflow"  />
      <br />
      <br />
      <br />
{/* PROGRAM SCOPE AND GOAL */}
<h3 className="text-3xl font-semibold mb-1">Task: Program Scope and Goals</h3>
<ul className="list-disc ml-6 text-md opacity-80 space-y-1">
        <li>Refund customers in a timely manner: &lt; 1 business day</li> 
        <li>Reduce resolution time from 1-2 weeks to &lt; 2 hours</li>  
        <li>Reduce # of touchpoints/interactions between customer and agent</li> 
        <li>Eliminate errors and unnecessary escalations</li> 
        <li>Create a streamlined process that addresses customer issue, validates refund failure, documents and logs refund failure, and prepares refund in one step</li>  
        <li>Align with Finance and Account Management to reconcile funds from vendor</li>  
            </ul>
            <br />

      <RefundSimulator />
      <br />
      <br />
      <br />
{/* PROGRAM SCOPE AND GOAL */}
<h3 className="text-3xl font-semibold mb-1">Action: Design, Build, and Testing</h3>
  <ul className="list-disc ml-6 text-md opacity-80 space-y-1">
      <li><a className="font-black">Root Cause Discovery</a>: Analyzed customer complaints and internal logs to confirm refund failures were linked to a PayPal API limitation.</li>  <li><a className="font-black">Process Design and Workflow Mapping</a>: Designed a lightweight, streamlined workflow that addresses and resolves customer issue in a single message; and confirms the refund failure, submits the refund, and logs all relevant details in a few steps.</li>
      <li><a className="font-black">Build & Tooling</a>: Developed a lightweight, no-code form that allowed agents to submit validated failures, which were automatically logged into a centralized database. This became the single source of truth for the program and supported Finance&#39;s responsibility to recover funds and push for HyperWallet integration.
      </li> 
      <li><a className="font-black">Testing & Iteration</a>: Soft launch with a small group of agents. Gathered feedback to refine the form structure, error handling, and agent instructions. Simplified input fields, clarified edge cases, and confirmed the process aligned with Finance’s requirements.</li>  
    </ul>
      <br/>
        {/* TIMELINE */}
        <h3 className="text-xl font-semibold mb-1">Timeline (from Discovery to Launch)</h3>
      <LightboxImage src="/viz/gantt.png" alt="PayPal Workflow" /> <ul className="list-disc ml-6 text-md opacity-80 space-y-1 mt-2">
        <li>Program needed to be deployed immediately, without disruption Support Operations</li> 
        <li>Program was in production for 16+ months, processing and recovering $250K+</li> 
      </ul>
      <br />
      <h3 className="text-xl font-semibold mb-1">Creating a streamlined workflow</h3>
      <RefundFlowSimulator /> 
            <br />
            {/* <RefundFlowSnapshot /> */}
      <br/>

<LightboxImage src="/viz/paypal-flow-after.png" alt="PayPal Workflow"  />
 <p className="text-md font-bold leading-relaxed mt-2">
        Workflow after program:
      </p>
      <ul className="list-disc ml-6 text-md opacity-80 space-y-1">
        <li>Average resolution time: &lt; 1 hour</li> 
        <li>Average refund time: &lt; 1 business day</li> 
        <li>Touchpoints per ticket: Reduced by 95%+</li> 
        <li>First response time: Reduced by 75%+. What was once a high-effort edge case became a low-hanging fruit for agents.</li> 
        <li>CSAT for these tickets: consistently 85%+, with significant improvement to customer trust</li>
        <li>Eliminated errors (duplicate payments) and the need for escalation</li>
        <li>Payments processed by team were recovered by Finance from vendors per payout period</li>

      </ul><br /> 
<h3 className="text-3xl font-semibold mb-1">Results</h3>
<ul className="list-disc ml-6 text-md opacity-80 space-y-1">
        <li><a className="font-black">Customer Satisfaction jumped</a> from ~50% to over 85%.</li>
        <li><a className="font-black">Net Promoter Score and customer trust improved</a>  to over 7 out of 10.</li>
        <li><a className="font-black">Resolution Time improved </a> from 12 days to under 2 hours.</li> 
        <li><a className="font-black">First Response Time </a> became over 70% faster, from 8 hours to less than 1 hour.</li> 
        <li><a className="font-black">Unnecessary escalations reduced</a>, freeing up Team Lead and Management bandwidth.</li>
        <li><a className="font-black">Touchpoints per ticket fell </a>  by over 95%, streamlining agent workflows and enabling productivity.</li> 
        <li><a className="font-black">Error rate reduced</a>  to less than 1%—no more mistakes made by the team.</li>  
        <li><a className="font-black">Eliminated revenue loss</a> and recovered over $250,000 from vendors.</li> 
        <li><a className="font-black">Influenced Finance roadmap</a> to implement enterprise-wide change to payment infrastructure (PayPal HyperWallet).</li>
      </ul>
      <br/>
      <h3 className="text-xl font-semibold mb-1">Key metrics after program launch</h3>
<LightboxImage  src="/viz/kpi_after_dashboard.png" alt="KPI Results"  />
      <br />
      <br />
      <h3 className="text-2xl font-semibold mb-1">Program Challenges</h3>
<ul className="list-disc ml-6 text-md opacity-80 space-y-1">
        <li><a className="font-black">Agent enablement</a>. Training them to learn another process and read API response logs.</li> 
        <li><a className="font-black">Process friction and context-switching</a>. Building a new workflow that minimized human error and was easy to adopt—without slowing down daily operations—was a major priority.</li>  
        <li><a className="font-black">Customer dissatisfaction and eroded trust</a>. Long refund delays made customers distrust the platform, and agents were often left without the right information and tools. I needed to empower the front line quickly with a solution that built confidence and trust on both sides.</li> 
        <li><a className="font-black">Cross-functional ambiguity</a>. Payments, Finance, and CX all had partial ownership, which made accountability somewhat unclear.</li> 
        <li><a className="font-black">Lack of engineering resources</a>. There were no engineering resources available at the time, so the solution had to be lightweight, no-code, and deployable immediately.</li>  
        <li><a className="font-black">Scalability</a>. As the business scaled exponentially, I needed to ensure the solution could handle increasing volume and be robust enough to influence a longer-term fix.</li> 
        <li><a className="font-black">Delayed HyperWallet Rollout</a>. Although HyperWallet integration was initially projected within the year, shifting priorities delayed it nearly two years. The interim process needed to be sustainable and trusted during this long gap.</li> 
      </ul>
      <br />
      <h3 className="text-2xl font-semibold mb-1">My responsibilities for the program</h3>
<ul className="list-disc ml-6 text-md opacity-80 space-y-1">
        <li><a className="font-black">Discovery and data analysis</a>. Investigated refund-related tickets and PayPal transaction logs to identify systemic failure points. Quantified the financial impact and mapped user pain points across the CX journey.
</li> 
        <li><a className="font-black">Process design and workflow mapping</a>. Designed a step-by-step internal process to detect, confirm, and recapture failed PayPal refunds. The workflow balanced technical accuracy (API validation) with operational simplicity.</li>  
        <li><a className="font-black">Form and workflow creation</a>. Built a no-code internal form for agents to flag failed PayPal refunds, log transactions, and notify the right leads—minimizing touch points, escalations, and reducing resolution time.</li> 
        <li><a className="font-black">Knowledge Base and training material</a>. Created agent-facing documentation with clear SOPs, troubleshooting guidance, and refund handling examples. Also created enablement decks and led live training sessions.
</li> 
<li><a className="font-black">Launch</a>. Soft launch with team leads and a pilot group of agents. Collected qualitative feedback, identified friction points, and got executive sign-off for full launch.
</li>  
        {/* <li><a className="font-black">Launch</a>. Released the workflow to team leads and a pilot group of agents. Collected qualitative feedback, identified friction points, and iterated quickly to refine usability before full rollout.
</li>  
        <li><a className="font-black">Full launch</a>. Rolled out the process across the CX team. Established team norms, escalations paths, and a daily operational rhythm to ensure smooth execution at scale.
</li>  */}
        <li><a className="font-black">Ongoing monitoring</a>. Built a lightweight tracking method to monitor flagged refunds and processing status.
</li> 
        <li><a className="font-black">Alignment with Finance and Account Management</a>. Partnered with Finance to ensure failed refunds were recovered from vendors. Also synced with Account Management to inform vendors of the new recovery process.
</li> 
      </ul>
      <br />
    </section>
    <hr className="border-t border-white/50 my-12" />

    {/* Links */}
    <section id="links" className="w-full max-w-screen-md flex flex-col gap-4 mt-6">
  <h2 className="text-3xl font-semibold mb-1">Links & Contact</h2>

  <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
    <a
      href="/dominick_bui-starlink-prez-2025.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-gray-200 transition"
    >
      View .pdf Presentation
    </a>
    <a
      href="/dominick_bui-starlink-prez-2025.pptx"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-gray-200 transition"
    >
      Download .ppt Presentation 
    </a>

    {/* <a
      href="/case-study-1"
      className="rounded-full border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black transition"
    >
      Bonus Case Study
    </a> */}

    <a
      href="https://www.linkedin.com/in/tdombui"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black transition"
    >
      LinkedIn
    </a>
    <a
      href="https://github.com/tdombui"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black transition"
    >
      GitHub
    </a>
    <a
      href="https://dombui.com"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black transition"
    >
      Personal Website
    </a>

    <a
      href="mailto:tdombui@gmail.com"
      className="rounded-full border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black transition"
    >
      Email Me
    </a>
  </div>
</section>


    <hr className="border-t border-white/50 mt-12" />

      </main>
      
      </div>

      {/* FOOTER */}
      <footer
  id="footer"
  className="w-full px-16 sm:px-6 text-sm text-white/50 text-left sm:text-center mt-4"
>
  &copy; {new Date().getFullYear()} Dominick Bui – For presentation purposes only – Not affiliated with SpaceX or Starlink
</footer>
    </div>
  );
}
