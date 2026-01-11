// Hard-coded static data for materials
export const materialsData = [
  {
    id: 1,
    name: 'Metals',
    description: 'Metallic elements with high conductivity and malleability',
    properties: ['High electrical conductivity', 'High thermal conductivity', 'Malleable and ductile', 'Lustrous appearance'],
    applications: ['Electrical wiring', 'Construction', 'Automotive parts', 'Aerospace components'],
    examples: ['Copper', 'Aluminum', 'Iron', 'Gold']
  },
  {
    id: 2,
    name: 'Alloys',
    description: 'Mixture of metals or metal with non-metal elements',
    properties: ['Enhanced strength', 'Corrosion resistance', 'Improved durability', 'Customizable properties'],
    applications: ['Aircraft construction', 'Medical implants', 'Tools and machinery', 'Jewelry'],
    examples: ['Steel', 'Brass', 'Bronze', 'Titanium alloys']
  },
  {
    id: 3,
    name: 'Fibres',
    description: 'Natural or synthetic elongated materials',
    properties: ['Flexible', 'Lightweight', 'High tensile strength', 'Textile-forming'],
    applications: ['Clothing and textiles', 'Rope and cables', 'Composite reinforcement', 'Insulation'],
    examples: ['Cotton', 'Wool', 'Nylon', 'Carbon fiber']
  },
  {
    id: 4,
    name: 'Plastics',
    description: 'Synthetic polymers with varied properties',
    properties: ['Lightweight', 'Moldable', 'Chemically resistant', 'Insulating'],
    applications: ['Packaging', 'Consumer products', 'Medical devices', 'Automotive parts'],
    examples: ['Polyethylene', 'PVC', 'Polystyrene', 'Nylon']
  },
  {
    id: 5,
    name: 'Composites',
    description: 'Materials made from two or more constituent materials',
    properties: ['High strength-to-weight ratio', 'Tailored properties', 'Corrosion resistant', 'Design flexibility'],
    applications: ['Aircraft structures', 'Sports equipment', 'Wind turbine blades', 'Automotive body panels'],
    examples: ['Fiberglass', 'Carbon fiber composites', 'Reinforced concrete']
  },
  {
    id: 6,
    name: 'Glass',
    description: 'Transparent amorphous solid material',
    properties: ['Transparent', 'Hard and brittle', 'Chemically inert', 'Good insulator'],
    applications: ['Windows and doors', 'Optical fibers', 'Laboratory equipment', 'Containers'],
    examples: ['Soda-lime glass', 'Borosilicate glass', 'Tempered glass']
  },
  {
    id: 7,
    name: 'Others',
    description: 'Various specialized materials',
    properties: ['Specialized functions', 'Unique characteristics', 'Application-specific'],
    applications: ['Research', 'Advanced manufacturing', 'Specialized industries'],
    examples: ['Ceramics', 'Semiconductors', 'Biomaterials', 'Nanomaterials']
  }
];

// Detailed properties for each example material
export const exampleMaterialsData = {
  // Metals
  'Copper': {
    name: 'Copper',
    symbol: 'Cu',
    category: 'Metal',
    mechanical: {
      tensileStrength: '210-350 MPa',
      yieldStrength: '33-70 MPa',
      hardness: '35-45 HB',
      elasticModulus: '110-128 GPa',
      elongation: '30-60%'
    },
    thermal: {
      meltingPoint: '1085°C',
      boilingPoint: '2562°C',
      thermalConductivity: '401 W/m·K',
      specificHeat: '385 J/kg·K',
      thermalExpansion: '16.5 µm/m·K'
    },
    green: {
      recyclability: 'Highly Recyclable (100%)',
      toxicity: 'Low toxicity',
      sustainability: 'Excellent - can be recycled indefinitely',
      carbonFootprint: 'Moderate in production',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'Face-centered cubic (FCC)',
      atomicNumber: 29,
      atomicMass: '63.546 u',
      density: '8.96 g/cm³',
      electricalResistivity: '16.78 nΩ·m'
    }
  },
  'Aluminum': {
    name: 'Aluminum',
    symbol: 'Al',
    category: 'Metal',
    mechanical: {
      tensileStrength: '90-570 MPa',
      yieldStrength: '35-505 MPa',
      hardness: '15-150 HB',
      elasticModulus: '70 GPa',
      elongation: '1-40%'
    },
    thermal: {
      meltingPoint: '660°C',
      boilingPoint: '2519°C',
      thermalConductivity: '237 W/m·K',
      specificHeat: '897 J/kg·K',
      thermalExpansion: '23.1 µm/m·K'
    },
    green: {
      recyclability: 'Highly Recyclable (100%)',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - 95% energy savings when recycled',
      carbonFootprint: 'High in primary production, low in recycling',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'Face-centered cubic (FCC)',
      atomicNumber: 13,
      atomicMass: '26.982 u',
      density: '2.70 g/cm³',
      electricalResistivity: '26.5 nΩ·m'
    }
  },
  'Iron': {
    name: 'Iron',
    symbol: 'Fe',
    category: 'Metal',
    mechanical: {
      tensileStrength: '350-540 MPa',
      yieldStrength: '130-360 MPa',
      hardness: '60-70 HB',
      elasticModulus: '211 GPa',
      elongation: '15-30%'
    },
    thermal: {
      meltingPoint: '1538°C',
      boilingPoint: '2862°C',
      thermalConductivity: '80.4 W/m·K',
      specificHeat: '449 J/kg·K',
      thermalExpansion: '11.8 µm/m·K'
    },
    green: {
      recyclability: 'Highly Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Good - widely recycled',
      carbonFootprint: 'High in production',
      biodegradable: 'No (but corrodes naturally)'
    },
    structure: {
      crystalStructure: 'Body-centered cubic (BCC) at room temp',
      atomicNumber: 26,
      atomicMass: '55.845 u',
      density: '7.874 g/cm³',
      electricalResistivity: '96.1 nΩ·m'
    }
  },
  'Gold': {
    name: 'Gold',
    symbol: 'Au',
    category: 'Metal',
    mechanical: {
      tensileStrength: '100-220 MPa',
      yieldStrength: '30-200 MPa',
      hardness: '25 HV',
      elasticModulus: '78 GPa',
      elongation: '30-50%'
    },
    thermal: {
      meltingPoint: '1064°C',
      boilingPoint: '2856°C',
      thermalConductivity: '318 W/m·K',
      specificHeat: '129 J/kg·K',
      thermalExpansion: '14.2 µm/m·K'
    },
    green: {
      recyclability: 'Highly Recyclable (100%)',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent when recycled, mining is harmful',
      carbonFootprint: 'Very high in mining',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'Face-centered cubic (FCC)',
      atomicNumber: 79,
      atomicMass: '196.967 u',
      density: '19.32 g/cm³',
      electricalResistivity: '22.14 nΩ·m'
    }
  },
  // Alloys
  'Steel': {
    name: 'Steel',
    symbol: 'Fe-C',
    category: 'Alloy',
    mechanical: {
      tensileStrength: '400-2000 MPa',
      yieldStrength: '250-1500 MPa',
      hardness: '120-600 HB',
      elasticModulus: '200 GPa',
      elongation: '5-25%'
    },
    thermal: {
      meltingPoint: '1370-1530°C',
      boilingPoint: '2750°C',
      thermalConductivity: '50-60 W/m·K',
      specificHeat: '500 J/kg·K',
      thermalExpansion: '11-13 µm/m·K'
    },
    green: {
      recyclability: 'Highly Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Good - most recycled material worldwide',
      carbonFootprint: 'High in production',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'BCC (ferrite) / FCC (austenite)',
      composition: 'Iron + 0.2-2.1% Carbon',
      atomicMass: 'Varies',
      density: '7.75-8.05 g/cm³',
      electricalResistivity: '180-250 nΩ·m'
    }
  },
  'Brass': {
    name: 'Brass',
    symbol: 'Cu-Zn',
    category: 'Alloy',
    mechanical: {
      tensileStrength: '300-550 MPa',
      yieldStrength: '100-450 MPa',
      hardness: '55-180 HB',
      elasticModulus: '97-115 GPa',
      elongation: '10-60%'
    },
    thermal: {
      meltingPoint: '900-940°C',
      boilingPoint: '1100°C',
      thermalConductivity: '120 W/m·K',
      specificHeat: '380 J/kg·K',
      thermalExpansion: '19-21 µm/m·K'
    },
    green: {
      recyclability: 'Highly Recyclable',
      toxicity: 'Low (avoid lead-containing brass)',
      sustainability: 'Good',
      carbonFootprint: 'Moderate',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'FCC (alpha brass)',
      composition: 'Copper + 5-40% Zinc',
      atomicMass: 'Varies',
      density: '8.4-8.7 g/cm³',
      electricalResistivity: '60-70 nΩ·m'
    }
  },
  'Bronze': {
    name: 'Bronze',
    symbol: 'Cu-Sn',
    category: 'Alloy',
    mechanical: {
      tensileStrength: '300-900 MPa',
      yieldStrength: '125-800 MPa',
      hardness: '60-200 HB',
      elasticModulus: '96-120 GPa',
      elongation: '5-65%'
    },
    thermal: {
      meltingPoint: '850-1000°C',
      boilingPoint: '2300°C',
      thermalConductivity: '50-75 W/m·K',
      specificHeat: '380 J/kg·K',
      thermalExpansion: '17-18 µm/m·K'
    },
    green: {
      recyclability: 'Highly Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Good',
      carbonFootprint: 'Moderate',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'FCC',
      composition: 'Copper + 5-25% Tin',
      atomicMass: 'Varies',
      density: '7.4-8.9 g/cm³',
      electricalResistivity: '100-150 nΩ·m'
    }
  },
  'Titanium alloys': {
    name: 'Titanium Alloys',
    symbol: 'Ti-X',
    category: 'Alloy',
    mechanical: {
      tensileStrength: '900-1400 MPa',
      yieldStrength: '800-1200 MPa',
      hardness: '250-350 HV',
      elasticModulus: '100-120 GPa',
      elongation: '6-16%'
    },
    thermal: {
      meltingPoint: '1650-1700°C',
      boilingPoint: '3287°C',
      thermalConductivity: '6-22 W/m·K',
      specificHeat: '520 J/kg·K',
      thermalExpansion: '8-9 µm/m·K'
    },
    green: {
      recyclability: 'Recyclable',
      toxicity: 'Non-toxic, biocompatible',
      sustainability: 'Good but energy-intensive production',
      carbonFootprint: 'High in production',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'HCP (alpha) / BCC (beta)',
      composition: 'Titanium + Al, V, Mo, etc.',
      atomicMass: '~47.9 u',
      density: '4.4-4.8 g/cm³',
      electricalResistivity: '1500-1700 nΩ·m'
    }
  },
  // Fibres
  'Cotton': {
    name: 'Cotton',
    symbol: 'C₆H₁₀O₅',
    category: 'Natural Fibre',
    mechanical: {
      tensileStrength: '287-597 MPa',
      yieldStrength: 'N/A',
      hardness: 'Soft',
      elasticModulus: '5.5-12.6 GPa',
      elongation: '3-10%'
    },
    thermal: {
      meltingPoint: 'Decomposes at 150°C',
      boilingPoint: 'N/A',
      thermalConductivity: '0.04 W/m·K',
      specificHeat: '1300 J/kg·K',
      thermalExpansion: 'Hygroscopic'
    },
    green: {
      recyclability: 'Recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'Biodegradable, water-intensive cultivation',
      carbonFootprint: 'Moderate',
      biodegradable: 'Yes (months)'
    },
    structure: {
      crystalStructure: 'Cellulose fibrils',
      composition: 'Pure cellulose',
      atomicMass: 'N/A',
      density: '1.5-1.6 g/cm³',
      electricalResistivity: 'Insulator'
    }
  },
  'Wool': {
    name: 'Wool',
    symbol: 'Keratin',
    category: 'Natural Fibre',
    mechanical: {
      tensileStrength: '120-180 MPa',
      yieldStrength: 'N/A',
      hardness: 'Soft',
      elasticModulus: '2.3-3.4 GPa',
      elongation: '25-45%'
    },
    thermal: {
      meltingPoint: 'Chars at 300°C',
      boilingPoint: 'N/A',
      thermalConductivity: '0.04 W/m·K',
      specificHeat: '1360 J/kg·K',
      thermalExpansion: 'Hygroscopic'
    },
    green: {
      recyclability: 'Recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'Renewable, biodegradable',
      carbonFootprint: 'Low',
      biodegradable: 'Yes (1-5 years)'
    },
    structure: {
      crystalStructure: 'Protein fibrils (keratin)',
      composition: 'Keratin protein',
      atomicMass: 'N/A',
      density: '1.3 g/cm³',
      electricalResistivity: 'Insulator'
    }
  },
  'Nylon': {
    name: 'Nylon',
    symbol: 'PA',
    category: 'Synthetic Fibre',
    mechanical: {
      tensileStrength: '70-85 MPa',
      yieldStrength: '45-70 MPa',
      hardness: '75-85 Shore D',
      elasticModulus: '2-4 GPa',
      elongation: '30-300%'
    },
    thermal: {
      meltingPoint: '220-270°C',
      boilingPoint: 'N/A',
      thermalConductivity: '0.25 W/m·K',
      specificHeat: '1700 J/kg·K',
      thermalExpansion: '80-95 µm/m·K'
    },
    green: {
      recyclability: 'Recyclable (limited)',
      toxicity: 'Low toxicity',
      sustainability: 'Petroleum-based, slow degradation',
      carbonFootprint: 'Moderate',
      biodegradable: 'No (30-40 years)'
    },
    structure: {
      crystalStructure: 'Semi-crystalline polymer',
      composition: 'Polyamide chains',
      atomicMass: 'N/A',
      density: '1.13-1.15 g/cm³',
      electricalResistivity: 'Insulator'
    }
  },
  'Carbon fiber': {
    name: 'Carbon Fiber',
    symbol: 'C',
    category: 'Synthetic Fibre',
    mechanical: {
      tensileStrength: '3500-7000 MPa',
      yieldStrength: 'N/A (brittle)',
      hardness: 'Very hard',
      elasticModulus: '230-600 GPa',
      elongation: '1.5-2.4%'
    },
    thermal: {
      meltingPoint: 'Sublimes at 3550°C',
      boilingPoint: 'N/A',
      thermalConductivity: '21-180 W/m·K',
      specificHeat: '710 J/kg·K',
      thermalExpansion: '-0.5 to 0.5 µm/m·K'
    },
    green: {
      recyclability: 'Difficult to recycle',
      toxicity: 'Low (dust is harmful)',
      sustainability: 'Energy-intensive production',
      carbonFootprint: 'High',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'Graphite layers',
      composition: '92-100% Carbon',
      atomicMass: '12.011 u',
      density: '1.55-1.75 g/cm³',
      electricalResistivity: '10-15 µΩ·m'
    }
  },
  // Plastics
  'Polyethylene': {
    name: 'Polyethylene',
    symbol: 'PE',
    category: 'Plastic',
    mechanical: {
      tensileStrength: '10-40 MPa',
      yieldStrength: '8-30 MPa',
      hardness: '40-70 Shore D',
      elasticModulus: '0.2-1.4 GPa',
      elongation: '100-700%'
    },
    thermal: {
      meltingPoint: '105-135°C',
      boilingPoint: 'N/A',
      thermalConductivity: '0.33-0.52 W/m·K',
      specificHeat: '1800-2300 J/kg·K',
      thermalExpansion: '100-200 µm/m·K'
    },
    green: {
      recyclability: 'Recyclable (types 2 & 4)',
      toxicity: 'Non-toxic',
      sustainability: 'Petroleum-based',
      carbonFootprint: 'Moderate',
      biodegradable: 'No (450+ years)'
    },
    structure: {
      crystalStructure: 'Semi-crystalline',
      composition: '(C₂H₄)n',
      atomicMass: 'N/A',
      density: '0.91-0.97 g/cm³',
      electricalResistivity: 'Excellent insulator'
    }
  },
  'PVC': {
    name: 'PVC (Polyvinyl Chloride)',
    symbol: 'PVC',
    category: 'Plastic',
    mechanical: {
      tensileStrength: '40-60 MPa',
      yieldStrength: '35-55 MPa',
      hardness: '70-85 Shore D',
      elasticModulus: '2.4-4.1 GPa',
      elongation: '20-80%'
    },
    thermal: {
      meltingPoint: '160-210°C',
      boilingPoint: 'N/A',
      thermalConductivity: '0.14-0.19 W/m·K',
      specificHeat: '900-1000 J/kg·K',
      thermalExpansion: '50-80 µm/m·K'
    },
    green: {
      recyclability: 'Recyclable (type 3)',
      toxicity: 'Contains chlorine, harmful when burned',
      sustainability: 'Controversial due to additives',
      carbonFootprint: 'Moderate',
      biodegradable: 'No (100+ years)'
    },
    structure: {
      crystalStructure: 'Amorphous to semi-crystalline',
      composition: '(C₂H₃Cl)n',
      atomicMass: 'N/A',
      density: '1.3-1.45 g/cm³',
      electricalResistivity: 'Excellent insulator'
    }
  },
  'Polystyrene': {
    name: 'Polystyrene',
    symbol: 'PS',
    category: 'Plastic',
    mechanical: {
      tensileStrength: '30-60 MPa',
      yieldStrength: 'N/A (brittle)',
      hardness: '70-85 Shore D',
      elasticModulus: '3-3.5 GPa',
      elongation: '1-4%'
    },
    thermal: {
      meltingPoint: '100°C (softens)',
      boilingPoint: 'N/A',
      thermalConductivity: '0.1-0.13 W/m·K',
      specificHeat: '1200-1400 J/kg·K',
      thermalExpansion: '60-80 µm/m·K'
    },
    green: {
      recyclability: 'Recyclable (type 6)',
      toxicity: 'Low, styrene is concerning',
      sustainability: 'Difficult to recycle in practice',
      carbonFootprint: 'Moderate',
      biodegradable: 'No (500+ years)'
    },
    structure: {
      crystalStructure: 'Amorphous',
      composition: '(C₈H₈)n',
      atomicMass: 'N/A',
      density: '1.04-1.1 g/cm³',
      electricalResistivity: 'Excellent insulator'
    }
  },
  // Composites
  'Fiberglass': {
    name: 'Fiberglass',
    symbol: 'GRP/GFRP',
    category: 'Composite',
    mechanical: {
      tensileStrength: '200-500 MPa',
      yieldStrength: 'N/A',
      hardness: '40-55 HB',
      elasticModulus: '10-40 GPa',
      elongation: '2-4%'
    },
    thermal: {
      meltingPoint: '1100-1700°C (glass)',
      boilingPoint: 'N/A',
      thermalConductivity: '0.3-0.5 W/m·K',
      specificHeat: '800-900 J/kg·K',
      thermalExpansion: '10-20 µm/m·K'
    },
    green: {
      recyclability: 'Difficult to recycle',
      toxicity: 'Fibers can be irritating',
      sustainability: 'Long lifespan',
      carbonFootprint: 'Moderate',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'Amorphous glass in polymer matrix',
      composition: 'Glass fibers + polymer resin',
      atomicMass: 'N/A',
      density: '1.5-2.1 g/cm³',
      electricalResistivity: 'Excellent insulator'
    }
  },
  'Carbon fiber composites': {
    name: 'Carbon Fiber Composites',
    symbol: 'CFRP',
    category: 'Composite',
    mechanical: {
      tensileStrength: '600-3000 MPa',
      yieldStrength: 'N/A (brittle)',
      hardness: 'High',
      elasticModulus: '70-200 GPa',
      elongation: '1-2%'
    },
    thermal: {
      meltingPoint: 'Matrix dependent (150-350°C)',
      boilingPoint: 'N/A',
      thermalConductivity: '1-10 W/m·K',
      specificHeat: '800-1000 J/kg·K',
      thermalExpansion: '0-2 µm/m·K'
    },
    green: {
      recyclability: 'Difficult, developing methods',
      toxicity: 'Low (dust hazardous)',
      sustainability: 'Long lifespan, high initial footprint',
      carbonFootprint: 'High',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'Layered carbon fibers in matrix',
      composition: 'Carbon fibers + epoxy/polymer',
      atomicMass: 'N/A',
      density: '1.5-1.6 g/cm³',
      electricalResistivity: 'Conductive'
    }
  },
  'Reinforced concrete': {
    name: 'Reinforced Concrete',
    symbol: 'RC',
    category: 'Composite',
    mechanical: {
      tensileStrength: '2-5 MPa (concrete)',
      yieldStrength: '250-500 MPa (steel)',
      hardness: '5-8 Mohs',
      elasticModulus: '20-40 GPa',
      elongation: '<1%'
    },
    thermal: {
      meltingPoint: '>1000°C',
      boilingPoint: 'N/A',
      thermalConductivity: '1.5-2 W/m·K',
      specificHeat: '880 J/kg·K',
      thermalExpansion: '10-12 µm/m·K'
    },
    green: {
      recyclability: 'Partially recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'High CO2 from cement',
      carbonFootprint: 'Very high',
      biodegradable: 'No (very durable)'
    },
    structure: {
      crystalStructure: 'Amorphous cement + crystalline aggregate',
      composition: 'Cement + aggregate + steel bars',
      atomicMass: 'N/A',
      density: '2.3-2.5 g/cm³',
      electricalResistivity: 'Poor conductor'
    }
  },
  // Glass
  'Soda-lime glass': {
    name: 'Soda-Lime Glass',
    symbol: 'SiO₂-Na₂O-CaO',
    category: 'Glass',
    mechanical: {
      tensileStrength: '30-90 MPa',
      yieldStrength: 'N/A (brittle)',
      hardness: '5-6 Mohs',
      elasticModulus: '70-75 GPa',
      elongation: '<1%'
    },
    thermal: {
      meltingPoint: '1000°C',
      boilingPoint: '2230°C',
      thermalConductivity: '0.9-1.1 W/m·K',
      specificHeat: '840 J/kg·K',
      thermalExpansion: '9 µm/m·K'
    },
    green: {
      recyclability: '100% Recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'Infinitely recyclable',
      carbonFootprint: 'Moderate',
      biodegradable: 'No (but inert)'
    },
    structure: {
      crystalStructure: 'Amorphous',
      composition: '72% SiO₂, 14% Na₂O, 9% CaO',
      atomicMass: 'N/A',
      density: '2.5 g/cm³',
      electricalResistivity: 'Excellent insulator'
    }
  },
  'Borosilicate glass': {
    name: 'Borosilicate Glass',
    symbol: 'SiO₂-B₂O₃',
    category: 'Glass',
    mechanical: {
      tensileStrength: '40-100 MPa',
      yieldStrength: 'N/A (brittle)',
      hardness: '6-7 Mohs',
      elasticModulus: '63-65 GPa',
      elongation: '<1%'
    },
    thermal: {
      meltingPoint: '1650°C',
      boilingPoint: '>2000°C',
      thermalConductivity: '1.14 W/m·K',
      specificHeat: '830 J/kg·K',
      thermalExpansion: '3.3 µm/m·K'
    },
    green: {
      recyclability: 'Recyclable (specialized)',
      toxicity: 'Non-toxic',
      sustainability: 'Durable, long-lasting',
      carbonFootprint: 'Moderate',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'Amorphous',
      composition: '80% SiO₂, 13% B₂O₃, 4% Na₂O',
      atomicMass: 'N/A',
      density: '2.23 g/cm³',
      electricalResistivity: 'Excellent insulator'
    }
  },
  'Tempered glass': {
    name: 'Tempered Glass',
    symbol: 'SiO₂ (treated)',
    category: 'Glass',
    mechanical: {
      tensileStrength: '120-200 MPa',
      yieldStrength: 'N/A (brittle)',
      hardness: '6-7 Mohs',
      elasticModulus: '70 GPa',
      elongation: '<1%'
    },
    thermal: {
      meltingPoint: '1000°C',
      boilingPoint: '2230°C',
      thermalConductivity: '1.05 W/m·K',
      specificHeat: '840 J/kg·K',
      thermalExpansion: '9 µm/m·K'
    },
    green: {
      recyclability: 'Cannot be recycled as tempered',
      toxicity: 'Non-toxic',
      sustainability: 'Safe when breaks',
      carbonFootprint: 'Moderate',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'Amorphous (surface compression)',
      composition: 'Same as soda-lime, heat-treated',
      atomicMass: 'N/A',
      density: '2.5 g/cm³',
      electricalResistivity: 'Excellent insulator'
    }
  },
  // Others
  'Ceramics': {
    name: 'Ceramics',
    symbol: 'Various',
    category: 'Ceramic',
    mechanical: {
      tensileStrength: '10-400 MPa',
      yieldStrength: 'N/A (brittle)',
      hardness: '5-9 Mohs',
      elasticModulus: '150-450 GPa',
      elongation: '<1%'
    },
    thermal: {
      meltingPoint: '1000-2500°C',
      boilingPoint: 'Very high',
      thermalConductivity: '1-30 W/m·K',
      specificHeat: '400-900 J/kg·K',
      thermalExpansion: '3-10 µm/m·K'
    },
    green: {
      recyclability: 'Limited recyclability',
      toxicity: 'Generally non-toxic',
      sustainability: 'Very durable',
      carbonFootprint: 'High firing temperatures',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'Crystalline/polycrystalline',
      composition: 'Metal oxides, carbides, nitrides',
      atomicMass: 'Varies',
      density: '2.5-6 g/cm³',
      electricalResistivity: 'Usually insulator'
    }
  },
  'Semiconductors': {
    name: 'Semiconductors',
    symbol: 'Si, Ge, GaAs',
    category: 'Electronic Material',
    mechanical: {
      tensileStrength: '100-180 MPa',
      yieldStrength: 'N/A (brittle)',
      hardness: '6-7 Mohs',
      elasticModulus: '130-180 GPa',
      elongation: '<1%'
    },
    thermal: {
      meltingPoint: '937-1414°C',
      boilingPoint: '2355-3265°C',
      thermalConductivity: '30-150 W/m·K',
      specificHeat: '700 J/kg·K',
      thermalExpansion: '2.6-6 µm/m·K'
    },
    green: {
      recyclability: 'Recyclable with specialized process',
      toxicity: 'Some compounds toxic',
      sustainability: 'Essential for electronics',
      carbonFootprint: 'High (ultra-pure production)',
      biodegradable: 'No'
    },
    structure: {
      crystalStructure: 'Diamond cubic (Si, Ge)',
      composition: 'Ultra-pure elements/compounds',
      atomicMass: '28.09 u (Si), 72.64 u (Ge)',
      density: '2.33-5.32 g/cm³',
      electricalResistivity: 'Variable (controlled)'
    }
  },
  'Biomaterials': {
    name: 'Biomaterials',
    symbol: 'Various',
    category: 'Biomedical Material',
    mechanical: {
      tensileStrength: '10-500 MPa',
      yieldStrength: 'Varies widely',
      hardness: 'Varies',
      elasticModulus: '0.001-200 GPa',
      elongation: '1-1000%'
    },
    thermal: {
      meltingPoint: 'Varies (often low)',
      boilingPoint: 'N/A',
      thermalConductivity: '0.1-20 W/m·K',
      specificHeat: 'Varies',
      thermalExpansion: 'Varies'
    },
    green: {
      recyclability: 'Often biodegradable',
      toxicity: 'Biocompatible by design',
      sustainability: 'Often from renewable sources',
      carbonFootprint: 'Generally low',
      biodegradable: 'Many are'
    },
    structure: {
      crystalStructure: 'Varies (polymers, ceramics, metals)',
      composition: 'Biocompatible materials',
      atomicMass: 'Varies',
      density: '1-10 g/cm³',
      electricalResistivity: 'Varies'
    }
  },
  'Nanomaterials': {
    name: 'Nanomaterials',
    symbol: 'Nano-X',
    category: 'Advanced Material',
    mechanical: {
      tensileStrength: 'Up to 100 GPa (CNT)',
      yieldStrength: 'Varies',
      hardness: 'Extremely high',
      elasticModulus: 'Up to 1000 GPa (CNT)',
      elongation: 'Varies by type'
    },
    thermal: {
      meltingPoint: 'Size-dependent',
      boilingPoint: 'N/A',
      thermalConductivity: 'Up to 3000 W/m·K (graphene)',
      specificHeat: 'Varies',
      thermalExpansion: 'Often negative'
    },
    green: {
      recyclability: 'Challenging',
      toxicity: 'Unknown long-term effects',
      sustainability: 'Research ongoing',
      carbonFootprint: 'High (production)',
      biodegradable: 'Varies'
    },
    structure: {
      crystalStructure: '1-100 nm scale structures',
      composition: 'Carbon, metals, oxides, etc.',
      atomicMass: 'Varies',
      density: 'Lower than bulk',
      electricalResistivity: 'Quantum effects present'
    }
  }
};

// Static chart data for visualization
export const chartData = [
  { name: 'Metals', value: 20, color: '#3b82f6' },
  { name: 'Alloys', value: 18, color: '#8b5cf6' },
  { name: 'Fibres', value: 15, color: '#ec4899' },
  { name: 'Plastics', value: 22, color: '#f59e0b' },
  { name: 'Composites', value: 12, color: '#10b981' },
  { name: 'Glass', value: 8, color: '#6366f1' },
  { name: 'Others', value: 5, color: '#84cc16' }
];

// Static news/announcements
export const newsItems = [
  {
    id: 1,
    title: 'New Sustainable Materials Discovery',
    date: '2026-01-08',
    summary: 'Researchers develop eco-friendly composite materials for construction.'
  },
  {
    id: 2,
    title: 'AI in Material Science',
    date: '2026-01-05',
    summary: 'Machine learning accelerates material property predictions by 10x.'
  },
  {
    id: 3,
    title: 'Advanced Alloy Technology',
    date: '2026-01-02',
    summary: 'New titanium alloy shows 40% improvement in strength-to-weight ratio.'
  }
];
