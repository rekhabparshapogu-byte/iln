export interface CourseModule {
  id: string;
  title: string;
  price: number;
  description: string;
  topics: string[];
  labs: string;
}

export const modules: Record<string, CourseModule> = {
  itn: {
    id: 'itn',
    title: 'Module 1: Introduction to Networks (ITN)',
    price: 99,
    description: 'Master core networking concepts, the OSI model, TCP/IP protocol suite, and fundamental IP addressing required to clear your college exams.',
    topics: [
      'Networking Today & Basic Device Configuration',
      'Network Protocols, Models & Ethernet Architecture',
      'Physical & Data Link Layer Fundamentals',
      'IPv4 & IPv6 Subnetting and Addressing',
      'Transport & Application Layer Protocols'
    ],
    labs: 'Hands-on Packet Tracer labs focusing on basic router/switch configuration and subnetting.'
  },
  srwe: {
    id: 'srwe',
    title: 'Module 2: Switching, Routing, and Wireless (SRWE)',
    price: 99,
    description: 'Understand local area network operations, switching concepts, VLANs, inter-VLAN routing, and wireless network setup.',
    topics: [
      'Basic Switch Configuration & Security',
      'VLANs & Trunking Configuration',
      'Spanning Tree Protocol (STP)',
      'DHCPv4 & SLAAC / DHCPv6',
      'WLAN (Wireless LAN) Concepts'
    ],
    labs: 'Practical lab scenarios targeting university coursework on LAN switching and WLANs.'
  },
  ensa: {
    id: 'ensa',
    title: 'Module 3: Enterprise Networking & Automation (ENSA)',
    price: 99,
    description: 'Explore wide area network (WAN) architecture, network security fundamentals, OSPF routing, and software-defined networking.',
    topics: [
      'Single-Area OSPFv2 Concepts',
      'Network Security Concepts & ACLs',
      'NAT for IPv4 & WAN Technologies',
      'VPNs, IPsec & QoS',
      'Network Virtualization & Automation'
    ],
    labs: 'Advanced university lab exercises covering OSPF, Access Control Lists, and automation.'
  }
};