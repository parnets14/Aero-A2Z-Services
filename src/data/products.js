import nmhrImg from '../assets/products/nmhr.jpg'
import nmhrField from '../assets/products/nmhr_field.jpg'
import achrImg from '../assets/products/achr_a.jpg'
import mhrImg from '../assets/products/mhr.jpg'
import mhrScene from '../assets/products/mhr_scene.jpg'
import iemhrImg from '../assets/products/iemhr.jpg'
import iemhrField from '../assets/products/iemhr_b.jpg'
import exmhrImg from '../assets/products/exmhr_c.jpg'
import exmhrScene from '../assets/products/exmhr.jpg'
import achrScene from '../assets/products/achr_b.jpg'

export const products = [
  {
    slug: 'nmhr',
    name: 'nMHR',
    mark: '®',
    family: 'Hemispheric Radar',
    tagline: 'Next-Gen Multi-Mission Hemispheric Radar',
    summary:
      'A fourth-generation AESA hemispheric radar built on GaN switching technology, delivering extremely high Doppler resolution for fast, accurate threat detection and classification across the full spectrum of modern air threats.',
    image: nmhrImg,
    scene: nmhrField,
    accent: 'AESA / GaN',
    features: [
      'Actively Electronically Scanned Array (AESA) antenna with wide band operation',
      'Innovative GaN switching technology',
      'Extremely high Doppler resolution — fast, accurate threat detection and classification',
      'Planar T/R architecture, direct RF sampling, digital beam forming',
      'Wide range of threat velocities',
      'Extended coexistence capability',
      'Significant multipath reduction',
      'Extended Electronic Counter-Countermeasures (ECCM) capabilities',
      'Cyber Certification (Risk Management Framework) ready',
    ],
    specs: [
      ['Spatial coverage', 'Single radar: 90° Az, 90° El — four radars: full hemisphere'],
      ['Interfaces', 'Ethernet, I/O Discrete'],
      ['Interface protocols', 'ASTERIX, customer-tailored'],
      ['Input power', '28 VDC (per MIL-STD-1275E)'],
      ['Power consumption', '700 W average'],
      ['Dimensions', 'H 63 cm × W 46.2 cm × D 15.5 cm'],
      ['Weight', '40 kg'],
      ['Operating temperature', '−40 °C to +55 °C'],
      ['Cooling method', 'Passive only'],
    ],
  },
  {
    slug: 'achr',
    name: 'aCHR',
    mark: '',
    family: 'Hemispheric Radar',
    tagline: 'Advanced Compact Hemispheric Radar',
    summary:
      'A compact, low-power hemispheric radar engineered for space- and power-constrained platforms. Four overlapping units deliver continuous 360° azimuth coverage with passive cooling and no moving parts.',
    image: achrImg,
    scene: achrScene,
    accent: 'Compact',
    features: [
      'Compact footprint for vehicle and mast-mounted installations',
      'Dual input power options — 28 VDC or 110/220 VAC',
      'Low 250 W average consumption for extended silent watch',
      'Four overlapping radars for 360° azimuth coverage',
      'Passive cooling — no moving parts, no maintenance burden',
      'Ruggedised enclosure rated for −40 °C to +55 °C operation',
    ],
    specs: [
      ['Spatial coverage', 'Single radar: 90° Az, 90° El — 4× overlapping radars: 360° Az'],
      ['Interfaces', 'Ethernet, I/O Discrete'],
      ['Input power', '28 V (per MIL-STD-1275B) / 110/220 VAC'],
      ['Power consumption', '250 W average'],
      ['Dimensions', 'W 46.4 cm × H 29.5 cm × D 18.9 cm'],
      ['Weight', '34 kg'],
      ['Operating temperature', '−40 °C to +55 °C'],
      ['Cooling method', 'Passive only'],
    ],
  },
  {
    slug: 'mhr',
    name: 'MHR',
    mark: '®',
    family: 'Hemispheric Radar',
    tagline: 'Multi-Mission Hemispheric Radar',
    summary:
      'A maritime-proven hemispheric radar providing persistent coverage around the protected asset, with superior detection of the widest range of relevant threats — from guided missiles to surface vessels.',
    image: mhrImg,
    scene: mhrScene,
    accent: 'Maritime',
    features: [
      'Hemispheric coverage around the protected asset',
      'Superior detection of the widest range of relevant threats',
      'Guided missiles',
      'Unmanned Aerial Systems (UAS) & drones',
      'Air Breathing Targets (ABT)',
      'Ballistic missiles',
      'Aircraft & helicopters',
      'Surface vessels, boats',
    ],
    specs: [
      ['Spatial coverage', 'Single radar: 90° Az, 90° El — four radars: full hemisphere'],
      ['Interfaces', 'Ethernet, I/O Discrete'],
      ['Interface protocols', 'ASTERIX, customer-tailored'],
      ['Input power', '28 VDC (per MIL-STD-1275E)'],
      ['Power consumption', '320 W average'],
      ['Dimensions', 'Diameter 50 cm, depth 20 cm'],
      ['Weight', '< 30 kg'],
      ['Operating temperature', '−40 °C to +55 °C'],
      ['Cooling method', 'Passive only'],
    ],
  },
  {
    slug: 'iemhr',
    name: 'ieMHR',
    mark: '',
    family: 'Hemispheric Radar',
    tagline: 'Improved & Enhanced Multi-Mission Hemispheric Radar',
    summary:
      'An upgraded hemispheric radar with increased aperture and power, extending detection range and classification fidelity for fixed-site and force-protection deployments.',
    image: iemhrImg,
    scene: iemhrField,
    accent: 'Extended range',
    features: [
      'Increased transmit power for extended detection range',
      'Improved classification fidelity at range',
      'Full-hemisphere coverage with four radar installations',
      'Ruggedised, passively cooled radome assembly',
      'ASTERIX output with customer-tailored protocols',
      'Designed for fixed-site and mobile force protection',
    ],
    specs: [
      ['Spatial coverage', 'Single radar: 90° Az, 90° El — four radars: full hemisphere'],
      ['Interfaces', 'Ethernet, I/O Discrete'],
      ['Interface protocols', 'ASTERIX, customer-tailored'],
      ['Input power', '28 VDC (per MIL-STD-1275E)'],
      ['Power consumption', '790 W average'],
      ['Dimensions', '79 cm'],
      ['Weight', '58 kg'],
      ['Operating temperature', '−40 °C to +55 °C'],
      ['Cooling method', 'Passive only'],
    ],
  },
  {
    slug: 'exmhr',
    name: 'exMHR',
    mark: '',
    family: 'Hemispheric Radar',
    tagline: 'Enhanced & Extended Multi-Mission Hemispheric Radar',
    summary:
      'The long-range member of the family — a large-aperture, high-power hemispheric radar for wide-area surveillance, deployed on mobile masts and transportable platforms.',
    image: exmhrImg,
    scene: exmhrScene,
    accent: 'Long range',
    features: [
      'Large aperture, 2,500 W class transmit chain',
      'Wide-area hemispheric surveillance',
      'Deployable on mobile masts and transportable trailers',
      'Full 360° azimuth with four overlapping radars',
      'Forced-air cooling for harsh environments',
      'ASTERIX output with customer-tailored protocols',
    ],
    specs: [
      ['Spatial coverage', 'Single radar: 90° Az, 90° El — 4× overlapping radars: 360° Az'],
      ['Interfaces', 'Ethernet, I/O Discrete'],
      ['Interface protocols', 'ASTERIX, customer-tailored'],
      ['Input power', '28 VDC'],
      ['Power consumption', '2,500 W average'],
      ['Dimensions', 'H 90 cm × W 120 cm × D 30 cm'],
      ['Weight', '150 kg'],
      ['Operating temperature', '−40 °C to +55 °C'],
      ['Cooling method', 'Passive (fans added for harsh environments)'],
    ],
  },
]

export const applications = [
  {
    title: 'C-UAS / SR-Air Defence',
    icon: 'uas',
    text: 'Detect, track and classify Group 1–3 unmanned systems at the edge of the defended perimeter.',
  },
  {
    title: 'C-RAM Detect & Alert',
    icon: 'ram',
    text: 'Counter rocket, artillery and mortar detection with rapid alerting to protect forward assets.',
  },
  {
    title: 'Vehicle Protection',
    icon: 'vehicle',
    text: 'On-the-move hemispheric sensing integrated with vehicle survivability suites.',
  },
  {
    title: 'Maritime Close-in Defence',
    icon: 'maritime',
    text: 'Persistent coverage around vessels against asymmetric surface and air threats.',
  },
  {
    title: 'AI Powered & Software Defined Radar',
    icon: 'ai',
    text: 'Software-defined signal processing with AI-assisted classification and low false-alarm rates.',
  },
  {
    title: 'MRAD',
    icon: 'mrad',
    text: 'Mobile radar air defence — rapid-deploy sensor nodes for expeditionary operations.',
  },
  {
    title: 'Active Protection Systems',
    icon: 'shield',
    text: 'Low-latency threat cueing for hard-kill and soft-kill active protection architectures.',
  },
  {
    title: 'Stryker M-SHORAD',
    icon: 'stryker',
    text: 'Maneuver short-range air defence sensor integration on wheeled combat platforms.',
  },
  {
    title: 'M-SHORAD All in One',
    icon: 'allinone',
    text: 'Integrated detect-to-engage sensor package for convoy and formation protection.',
  },
  {
    title: 'Force Protection',
    icon: 'force',
    text: 'Base, camp and critical-infrastructure perimeter surveillance, day and night.',
  },
]

export const capabilities = [
  {
    title: 'AESA Architecture',
    icon: 'aesa',
    text: 'Active electronically scanned arrays with planar T/R modules, direct RF sampling and digital beam forming — no moving parts, no mechanical wear.',
  },
  {
    title: 'GaN Switching',
    icon: 'gan',
    text: 'Gallium nitride transmit chains deliver higher efficiency and duty cycle in a smaller, lighter envelope.',
  },
  {
    title: 'Doppler Resolution',
    icon: 'doppler',
    text: 'Extremely high Doppler resolution separates slow, small and low-flying targets from clutter for fast, accurate classification.',
  },
  {
    title: 'ECCM & Cyber',
    icon: 'eccm',
    text: 'Extended electronic counter-countermeasures with multipath reduction, and Cyber Certification (RMF) ready design.',
  },
]
