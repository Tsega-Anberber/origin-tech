import { Link } from 'react-router-dom';
import { useRevealAll } from '../hooks/useScrollReveal';

const assetPathPrefix = '/assets';
const imgEllipse = `${assetPathPrefix}/ef410.svg`;
const imgBackgroundGrid = `${assetPathPrefix}/507d2.svg`;
const imgFrame1 = `${assetPathPrefix}/0280a.svg`;
const imgFrame3 = `${assetPathPrefix}/8a815.svg`;
const imgFrame4 = `${assetPathPrefix}/8a7d6.svg`;
const imgFrame5 = `${assetPathPrefix}/94f2e.svg`;
const imgFrame6 = `${assetPathPrefix}/dbdc9.svg`;
const imgEllipse1 = `${assetPathPrefix}/d36f9.svg`;
const imgEllipse2 = `${assetPathPrefix}/e7141.svg`;
const imgEllipse3 = `${assetPathPrefix}/6dc0b.svg`;
const imgEllipse4 = `${assetPathPrefix}/867a2.svg`;
const imgEllipse5 = `${assetPathPrefix}/4538e.svg`;
const imgEllipse6 = `${assetPathPrefix}/fb2b8.svg`;
const imgPlotFrame = `${assetPathPrefix}/fc2b2.svg`;
const imgQuadFrame = `${assetPathPrefix}/b1a37.svg`;
const imgMapFrame = `${assetPathPrefix}/50da6.svg`;
const imgPortrait = `${assetPathPrefix}/ef86e.svg`;

const services = [
  { icon: imgFrame3, coord: '0, 3', name: 'Custom Software', desc: 'Bespoke applications built around how your team actually works, from first sketch to the version you rely on every day.' },
  { icon: imgFrame4, coord: '2, 0', name: 'Technology Consulting', desc: 'Direct, informed guidance on the calls that are hard to reverse — architecture, vendors, and where to invest engineering time next.' },
  { icon: imgFrame5, coord: '0, -3', name: 'Data Services', desc: 'We turn scattered records into analytics you can act on, with pipelines and dashboards built for the questions your business actually asks.' },
  { icon: imgFrame6, coord: '-2, 0', name: 'IT Infrastructure', desc: 'We design, build, and manage the systems underneath everything else — sized for today\'s load and built to grow with the next one.' },
];

const steps = [
  { dot: imgEllipse1, coord: '0,0', label: 'Locate', desc: 'Understand where you actually stand today — systems, constraints, and the real goal.' },
  { dot: imgEllipse2, coord: '1,1', label: 'Define', desc: 'Set the target coordinates: scope, architecture, and what "done" looks like.' },
  { dot: imgEllipse2, coord: '2,3', label: 'Build', desc: 'Ship in real increments, with your team seeing working progress every week.' },
  { dot: imgEllipse2, coord: '3,2', label: 'Calibrate', desc: 'Test against real usage, not assumptions, and adjust before it matters.' },
  { dot: imgEllipse2, coord: '4,4', label: 'Launch', desc: 'Hand over something you understand fully and can keep building on yourself.' },
];

const values = [
  { dot: imgEllipse3, text: 'Quality & integrity — the highest ethical standard, every time.' },
  { dot: imgEllipse4, text: 'Agility & innovation — ahead of the trend, not chasing it.' },
  { dot: imgEllipse5, text: 'Customer focus — solving the problem that actually matters.' },
  { dot: imgEllipse6, text: 'Collaboration — partnerships built on trust, not just contracts.' },
];

const partners = ['Horra Realestate', 'Gabana Coffee', 'Horra Andaracha', 'Gabana PPTech','Horra Auto','Ethio Gabana','Horra Auto Assembly'];

const marqueeText = "YOUR STARTING POINT ISN'T WHERE YOU ARE , IT'S WHERE YOU DECIDE TO BUILD FROM.";

export function Home() {
  const pageRef = useRevealAll();

  return (
    
    <div ref={pageRef} className="bg-[#f5f6f2] flex flex-col items-start w-full">

      {/* Hero */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex flex-col gap-14 items-start overflow-hidden pb-[120px] pt-[140px] px-6 md:px-24 relative w-full">
        <div className="absolute h-full left-0 top-0 w-full pointer-events-none">
          <img alt="" className="absolute block inset-0 max-w-none size-full object-cover opacity-60" src={imgBackgroundGrid} />
        </div>

        <div className="reveal flex gap-[10px] items-center relative">
          <div className="shrink-0 size-[6px] relative">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
          </div>
          <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">
            A TECH VANGUARD
          </p>
        </div>

        <div className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(56px,10vw,132px)] tracking-[0.264px] leading-[0.9] relative">
          <p>ORIGIN</p>
          <p>TECHNOLOGIES</p>
        </div>

        <div className="reveal delay-2 flex flex-col lg:flex-row gap-20 items-start relative w-full">
          <div className="flex flex-col gap-8 items-start w-full lg:w-[600px]">
            <p
              className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[21px] leading-[1.55]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              The tech vanguard of the Horra corporate group. We build software, infrastructure and data systems that give Ethiopian businesses a genuine starting point for what comes next  engineered with the same rigor whether we're shipping your first release or your hundredth.
            </p>
            <div className="flex gap-6 items-center">
              <Link
                to="/services"
                className="btn-primary bg-[#2647ff] flex items-center px-8 py-5 rounded-[2px]"
              >
                <span
                  className="font-['IBM_Plex_Sans:Medium'] font-medium text-[15px] text-white leading-[1.3] whitespace-nowrap"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  See what we build
                </span>
              </Link>
              <Link
                to="/about"
                className="nav-link font-['IBM_Plex_Sans:Medium'] font-medium text-[#12151b] text-[15px] leading-[1.3] whitespace-nowrap"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Who we are
              </Link>
            </div>
            <div className="flex font-['IBM_Plex_Mono:Regular'] gap-[14px] items-center text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap pt-2">
              <span>SOFTWARE</span><span>·</span><span>CONSULTING</span><span>·</span><span>DATA</span><span>·</span><span>INFRASTRUCTURE</span>
            </div>
          </div>

          {/* Origin Plot */}
          <div className="relative shrink-0 size-[380px] lg:size-[480px] -translate-x-[-150px] -translate-y-10 lg:-translate-y-75 -lg:translate-x-90" >
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlotFrame} />
            <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#12151b] text-[12px] leading-[1.4] left-[53%] top-[51%] whitespace-nowrap">0,0</p>
            <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#12151b] text-[12px] leading-[1.4] left-[53%] top-[8%] whitespace-nowrap">Software</p>
            <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#12151b] text-[12px] leading-[1.4] left-[11%] top-[51%] whitespace-nowrap">Consulting</p>
            <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#12151b] text-[12px] leading-[1.4] left-[53%] top-[88%] whitespace-nowrap">Data</p>
            <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#12151b] text-[12px] leading-[1.4] left-[69%] top-[51%] whitespace-nowrap">Infrastructure</p>
          </div>
        </div>

        <div className="reveal delay-3 flex gap-[10px] items-center relative">
          <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">
            SCROLL TO EXPLORE
          </p>
          <div className="h-[14px] w-[10px] shrink-0 relative bounce-down">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex flex-col md:flex-row items-start justify-between px-6 md:px-24 py-16 w-full gap-10">
        {[
          { n: '4', label: 'Core service lines' },
          { n: '7', label: 'Businesses in the Horra ecosystem' },
          { n: '1', label: 'Vanguard mission, no exceptions' },
        ].map((s, i) => (
          <div key={i} className={`reveal delay-${i} flex flex-col gap-[10px] items-start w-full md:w-[280px]`}>
            <p className="font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(72px,9vw,132px)] leading-[0.9] tracking-[0.264px] whitespace-nowrap">
              {s.n}
            </p>
            <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex flex-col lg:flex-row gap-[70px] items-start px-6 md:px-24 py-[120px] w-full">
        <div className="flex flex-col gap-[22px] items-start shrink-0 w-full lg:w-[400px]">
          <div className="reveal flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">ABOUT</p>
          </div>
          <div className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[62px] tracking-[0.124px] leading-[0.94]">
            <p>Not adapting to change.</p>
            <p>Driving it.</p>
          </div>
        </div>

        <div className="reveal-right flex flex-1 flex-col gap-5 items-start min-w-0">
          <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[16px] leading-[1.55] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Origin Technologies sits inside the Horra corporate group, built on the same entrepreneurial drive that has grown seven businesses across Ethiopia. We started as the group's own technology arm and have grown into a company that builds for clients well beyond it.
          </p>
          <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[16px] leading-[1.55] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Under CEO Adem Kedir, our work is judged on what it does for the people using it: software that fits how a business actually runs, infrastructure that holds up under real load, and data systems that make decisions easier, not harder.
          </p>
          <div className="flex flex-col gap-7 items-start pt-3 w-full">
            {[
              { label: 'MISSION', title: 'Give people and businesses a real starting point.', body: 'We build products that raise efficiency and connectivity, so our customers can put their full potential to work in a digital economy that moves fast.' },
              { label: 'VISION', title: 'Set the pace for technology in the region.', body: 'We stay close to where the industry is heading and build for that, not for where it already was — with the craft and sustainability to keep delivering as it changes.' },
            ].map((mv, i) => (
              <div key={i} className={`reveal delay-${i} flex flex-col gap-2 items-start w-full`}>
                <p className="font-['IBM_Plex_Mono:Regular'] text-[#2647ff] text-[12px] leading-[1.4] whitespace-nowrap">{mv.label}</p>
                <p className="font-['Big_Shoulders_Display:SemiBold'] font-semibold text-[#12151b] text-[22px] leading-[1.06] tracking-[0.044px]">{mv.title}</p>
                <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>{mv.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#eceee7] border-[#d8d8d0] border-b border-solid flex flex-col lg:flex-row gap-20 items-center px-6 md:px-24 py-[120px] w-full">
        <div className="reveal-left bg-[#f5f6f2] border border-[#d8d8d0] border-solid overflow-hidden shrink-0 size-[280px] relative">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPortrait} />
        </div>
        <div className="reveal-right flex flex-1 flex-col gap-6 items-start min-w-0">
          <div className="flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">LEADERSHIP</p>
          </div>
          <p className="font-['Big_Shoulders_Display:Bold'] font-bold text-[#12151b] text-[32px] leading-none tracking-[0.064px]">
            "We don't measure ourselves against where the industry was. We build for where it's going and we hold every line of code to the same standard we'd want from a partner we were trusting with our own business."
          </p>
          <div className="flex flex-col gap-1 items-start whitespace-nowrap">
            <p className="font-['IBM_Plex_Sans:Medium'] font-medium text-[#12151b] text-[15px] leading-[1.3]" style={{ fontVariationSettings: '"wdth" 100' }}>Adem Kedir</p>
            <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>Chief Executive Officer, Origin Technologies</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex flex-col gap-14 items-start px-6 md:px-24 py-[120px] w-full">
        <div className="flex flex-col gap-[14px] items-start w-full">
          <div className="reveal flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">SERVICES</p>
          </div>
          <p className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(36px,4.5vw,62px)] tracking-[0.124px] leading-[0.94]">
            Four ways we start something with you
          </p>
        </div>
        <div className="flex flex-col items-start w-full">
          {services.map((svc, i) => (
            <div key={i} className={`reveal delay-${i} service-row border-[#d8d8d0] border-solid border-t flex flex-col md:flex-row gap-8 items-start md:items-center py-[34px] w-full`}>
              <div className="flex flex-col gap-[10px] items-start shrink-0 w-[110px]">
                <div className="shrink-0 size-[42px] relative">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={svc.icon} />
                </div>
                <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[12px] leading-[1.4] whitespace-nowrap">{svc.coord}</p>
              </div>
              <div className="shrink-0 w-full md:w-[300px]">
                <p className="font-['Big_Shoulders_Display:Bold'] font-bold text-[#12151b] text-[32px] leading-none tracking-[0.064px]">{svc.name}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[16px] leading-[1.55]" style={{ fontVariationSettings: '"wdth" 100' }}>{svc.desc}</p>
              </div>
            </div>
          ))}
          <div className="border-[#d8d8d0] border-solid border-b w-full" />
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex flex-col gap-16 items-start px-6 md:px-24 py-[120px] w-full">
        <div className="flex flex-col gap-[14px] items-start w-full">
          <div className="reveal flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">HOW WE WORK</p>
          </div>
          <p className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(36px,4.5vw,62px)] tracking-[0.124px] leading-[0.94]">
            Five moves, from origin to launch
          </p>
          <p className="reveal delay-2 font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[16px] leading-[1.55] max-w-[680px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Every engagement follows the same path we'd want as a client: plotted honestly, adjusted in the open, and never further from your goals than it has to be.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
          {steps.map((step, i) => (
            <div key={i} className={`reveal delay-${i} timeline-step flex flex-col gap-[14px] items-start`}>
              <div className="flex items-center w-full">
                <div className="shrink-0 size-[10px] relative">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={step.dot} />
                </div>
                {i < steps.length - 1 && <div className="bg-white border-[#d8d8d0] border-solid border-t flex-1 h-px ml-1" />}
              </div>
              <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[12px] leading-[1.4] whitespace-nowrap">{step.coord}</p>
              <p className="font-['Big_Shoulders_Display:Bold'] font-bold text-[#12151b] text-[32px] leading-none tracking-[0.064px]">{step.label}</p>
              <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-solid flex flex-col lg:flex-row gap-[70px] items-center px-6 md:px-24 py-[120px] w-full">
        <div className="flex flex-col gap-[18px] items-start shrink-0 w-full lg:w-[520px]">
          <div className="reveal flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">WHAT WE VALUE</p>
          </div>
          <p className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(36px,4.5vw,62px)] tracking-[0.124px] leading-[0.94]">
            Where we choose to stand
          </p>
          <p className="reveal delay-2 font-['IBM_Plex_Sans:Regular'] font-normal text-[#4b5058] text-[16px] leading-[1.55]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Four commitments, plotted against how we work and who we work for. Each one pulls slightly differently, and we hold all four at once.
          </p>
          <div className="flex flex-col gap-[14px] items-start pt-[14px] w-full">
            {values.map((v, i) => (
              <div key={i} className={`reveal delay-${i} flex gap-3 items-center`}>
                <div className="shrink-0 size-[9px] relative">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.dot} />
                </div>
                <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5]" style={{ fontVariationSettings: '"wdth" 100' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-right overflow-hidden shrink-0 size-[380px] relative">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuadFrame} />
          <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] left-[130px] top-[4px] tracking-[0.22px] whitespace-nowrap">FUTURE-FOCUSED</p>
          <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] left-[145px] top-[358px] tracking-[0.22px] whitespace-nowrap">DEPENDABLE</p>
          <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] left-[290px] top-[172px] tracking-[0.22px] whitespace-nowrap">CUSTOMER-LED</p>
          <p className="absolute font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] left-[8px] top-[172px] tracking-[0.22px] whitespace-nowrap">PRINCIPLED</p>
          <p className="absolute font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5] left-[200px] top-[112px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Agility &amp; innovation</p>
          <p className="absolute font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5] left-[40px] top-[118px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Quality &amp; integrity</p>
          <p className="absolute font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5] left-[206px] top-[292px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Customer focus</p>
          <p className="absolute font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[14px] leading-[1.5] left-[44px] top-[284px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Collaboration</p>
        </div>
      </section>

      {/* Marquee Band */}
      <div className="bg-[#12151b] overflow-hidden py-[22px] w-full relative">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <p key={i} className="shrink-0 font-['Big_Shoulders_Display:SemiBold'] font-semibold text-[#f5f6f2] text-[22px] leading-[1.06] tracking-[0.044px]">
              {marqueeText}
            </p>
          ))}
          {[...Array(4)].map((_, i) => (
            <p key={`b${i}`} className="shrink-0 font-['Big_Shoulders_Display:SemiBold'] font-semibold text-[#f5f6f2] text-[22px] leading-[1.06] tracking-[0.044px]">
              {marqueeText}
            </p>
          ))}
        </div>
      </div>

      {/* Partners marquee */}
      <section className="bg-[#f5f6f2] border-[#d8d8d0] border-b border-t border-solid overflow-hidden w-full">
        <div className="marquee-track-slow flex">
          {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="partner-cell border-[#d8d8d0] border-r border-solid flex h-[108px] items-center pl-10 pr-10 shrink-0"
            >
              <p className="font-['Big_Shoulders_Display:SemiBold'] font-semibold text-[#4b5058]] text-[22px] leading-[1.06] tracking-[0.044px] whitespace-nowrap">
                {p}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#f5f6f2] flex flex-col lg:flex-row gap-[70px] items-start px-6 md:px-24 py-[120px] w-full">
        <div className="flex flex-col items-start shrink-0 w-full lg:w-[600px]">
          <div className="reveal flex gap-[10px] items-center">
            <div className="shrink-0 size-[6px] relative">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">REACH US</p>
          </div>
          <div className="h-5" />
          <p className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#12151b] text-[clamp(36px,4.5vw,62px)] tracking-[0.124px] leading-[0.94]">
            Tell us where you're starting from
          </p>
          <div className="h-9" />
          <div className="flex flex-col items-start w-full">
            {[
              { label: 'EMAIL', value: 'contact@origintechnologies.org' },
              { label: 'PHONE', value: '+251 931 203 211' },
              { label: 'OFFICE', value: 'Sarbet, near Canada Embassy, Horra Real Estate, 1st Flr, Addis Ababa' },
            ].map((row, i) => (
              <div key={i} className={`reveal delay-${i} border-[#d8d8d0] border-solid border-t flex items-center justify-between py-4 w-full flex-wrap gap-2`}>
                <p className="font-['IBM_Plex_Mono:Regular'] text-[#4b5058] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">{row.label}</p>
                <p className="font-['IBM_Plex_Sans:Regular'] font-normal text-[#12151b] text-[16px] leading-[1.55]" style={{ fontVariationSettings: '"wdth" 100' }}>{row.value}</p>
              </div>
            ))}
            <div className="border-[#d8d8d0] border-b border-solid h-px w-full" />
          </div>
        </div>

        <div className="map">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18868.07775201576!2d38.720088450941155!3d8.947494084890133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b833bb582dab1%3A0x47ec479e7fc96cc5!2sHorra%20Trading%20Office%20Park!5e1!3m2!1sen!2set!4v1790169690951!5m2!1sen!2set"
           width="600"
           height="450"
           style={{ border: 0 }}
           allowFullScreen
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade" 
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#12151b] flex flex-col gap-8 items-center px-6 md:px-24 py-[140px] w-full">
        <div className="reveal flex gap-[10px] items-center">
          <div className="shrink-0 size-[6px] relative">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
          </div>
          <p className="font-['IBM_Plex_Mono:Regular'] text-[#f5f6f2] text-[11px] leading-[1.4] tracking-[0.22px] whitespace-nowrap">LET'S PLOT SOMETHING NEW</p>
        </div>
        <div className="reveal delay-1 font-['Big_Shoulders_Display:ExtraBold'] font-extrabold text-[#f5f6f2] text-[clamp(48px,9vw,132px)] text-center tracking-[0.264px] leading-[0.9]">
          <p>Ready to build</p>
          <p>from here?</p>
        </div>
        <p className="reveal delay-2 font-['IBM_Plex_Sans:Regular'] font-normal text-[#f5f6f2] text-[21px] text-center leading-[1.55] opacity-70 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Tell us where you're starting from. We'll help you plot the rest.
        </p>
        <Link to="/contact" className="reveal delay-3 btn-primary bg-[#2647ff] flex items-center px-8 py-5 rounded-[2px]">
          <span className="font-['IBM_Plex_Sans:Medium'] font-medium text-[15px] text-white leading-[1.3]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Reach us
          </span>
        </Link>
      </section>
    </div>
  );
}
